# 🚀 Kindly Roe Deployment Guide

## Quick Deployment Commands

### Deploy Cloud Functions

When you update anything in `functions/src`:

```bash
firebase deploy --only "functions:submitInterest"
```

### Deploy Hosting

When you tweak front-end or rewrites:

```bash
npm run build
firebase deploy --only hosting
```

### Deploy Everything

```bash
npm run build
firebase deploy
```

---

## ✅ What's Implemented

### 1. UX Feedback ✅

- **Toast Notifications** (using Sonner)
  - Success: "Thanks! We'll be in touch soon."
  - Error: Shows specific error message
- **Form Reset** - Automatic after successful submission
- **Loading State** - "Sending..." button text during submission

### 2. Spam Protection ✅

- **Honeypot Field** - Hidden "website" field catches bots
- **Timestamp Check** - Rejects submissions < 1 second after form load
- **Client-side validation** - Name and email required

### 3. Security ✅

- **Locked Firestore Rules** - All client writes blocked
- **CORS Protection** - Only allowed origins can call function
- **Admin SDK Only** - All writes via secure Cloud Function

### 4. Clean Architecture ✅

- **No Firebase SDK in browser** - Just simple fetch API
- **Same-origin requests** - No CORS issues
- **Fast & reliable** - No WebChannel timeouts

---

## 📊 Monitoring Setup

### Cloud Logging - Function Errors

1. **Go to Cloud Logging**:
   https://console.cloud.google.com/logs/query?project=kindlyroe-website

2. **Add this filter**:

   ```
   resource.type="cloud_function"
   resource.labels.function_name="submitInterest"
   severity>=ERROR
   ```

3. **Create Alert** (optional):
   - Click "Create alert" from the query
   - Set threshold: `> 5 errors in 5 minutes`
   - Notification channel: Your email

### Function Metrics

**View in Cloud Console**:
https://console.cloud.google.com/functions/details/europe-west2/submitInterest?project=kindlyroe-website

**Key metrics to watch**:

- Invocations per minute
- Error rate (should be < 1%)
- Execution time (should be < 1 second)
- Memory usage

### Firestore Usage

**Check your Firestore**:
https://console.firebase.google.com/project/kindlyroe-website/firestore

**Monitor**:

- `interest` collection growth
- Document reads/writes
- Watch for spam patterns (multiple same-name submissions)

---

## 🔍 Uptime Monitoring (Optional)

### Using Google Cloud Monitoring

1. **Go to Monitoring**:
   https://console.cloud.google.com/monitoring/uptime?project=kindlyroe-website

2. **Create Uptime Check**:
   - Protocol: HTTPS
   - Resource Type: URL
   - Hostname: `kindlyroe-website.web.app`
   - Path: `/api/submit-interest`
   - Check Interval: 5 minutes
   - Regions: Choose 2-3 regions

3. **Set Alert**:
   - Alert if: Check fails from any location
   - Notification: Email

---

## 🐛 Troubleshooting

### Function Errors

```bash
# View recent logs
firebase functions:log --only submitInterest

# Or use gcloud
gcloud functions logs read submitInterest \
  --region=europe-west2 \
  --limit=50 \
  --project=kindlyroe-website
```

### Test Function Directly

```bash
curl -X POST "https://kindlyroe-website.web.app/api/submit-interest" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'
```

Expected: `{"ok":true,"id":"..."}`

### Check Firestore Rules

```bash
firebase deploy --only firestore:rules
```

---

## 📝 Common Tasks

### Add Custom Domain

1. Add domain in Firebase Console → Hosting
2. Update CORS in `functions/src/index.ts`:
   ```typescript
   origin: [
     'http://localhost:5173',
     'https://kindlyroe-website.web.app',
     'https://kindlyroe.com', // Add your domain
   ]
   ```
3. Redeploy function:
   ```bash
   firebase deploy --only "functions:submitInterest"
   ```

### Update Function Timeout

In `functions/src/index.ts`:

```typescript
export const submitInterest = onRequest({
  region: 'europe-west2',
  cors: true,
  timeoutSeconds: 60,  // Default is 60, max is 540
}, (req, res) => { ... })
```

### Add Rate Limiting

Install: `npm install express-rate-limit`

In `functions/src/index.ts`:

```typescript
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 requests per IP
  message: { ok: false, error: 'Too many requests' }
})

// Apply to function
export const submitInterest = onRequest({ ... }, (req, res) => {
  limiter(req, res, () => {
    corsMiddleware(req, res, async () => { ... })
  })
})
```

---

## 🎯 Production URLs

- **Website**: https://kindlyroe-website.web.app
- **API Endpoint**: https://kindlyroe-website.web.app/api/submit-interest
- **Firebase Console**: https://console.firebase.google.com/project/kindlyroe-website
- **Cloud Console**: https://console.cloud.google.com/home/dashboard?project=kindlyroe-website

---

## 📦 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Hosting**: Firebase Hosting
- **Backend**: Cloud Functions (Gen 2)
- **Database**: Firestore
- **Notifications**: Sonner (toast library)
- **Region**: europe-west2 (London)

---

## 🔒 Security Notes

- Firestore rules deny all client access
- All writes go through Admin SDK in Cloud Function
- CORS configured for specific origins only
- Honeypot and timestamp checks prevent basic spam
- No sensitive data logged

---

## 💡 Future Enhancements

- [ ] Add reCAPTCHA for additional spam protection
- [ ] Set up automated backups of Firestore data
- [ ] Add analytics to track form submissions
- [ ] Create admin dashboard to view submissions
- [ ] Add email notifications when form is submitted
- [ ] Implement rate limiting in Cloud Function
- [ ] Add uptime monitoring and alerts
- [ ] Set up CI/CD with GitHub Actions
