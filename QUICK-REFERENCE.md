# ⚡ Quick Reference Guide

Essential commands and links for managing your Kindly Roe form.

---

## 🚀 Deployment Commands

### Deploy Frontend

```bash
npm run build
firebase deploy --only hosting
```

### Deploy Cloud Function

```bash
firebase deploy --only "functions:submitInterest"
```

### Deploy Firestore Rules

```bash
firebase deploy --only firestore:rules
```

### Deploy Everything

```bash
npm run build
firebase deploy
```

---

## 📋 View Logs

### Recent Function Logs

```bash
firebase functions:log --only submitInterest
```

### Last 50 Logs

```bash
firebase functions:log --only submitInterest --limit 50
```

### Errors Only

```bash
gcloud logging read \
  "resource.type=\"cloud_function\" AND resource.labels.function_name=\"submitInterest\" AND severity>=ERROR" \
  --limit=20 \
  --project=kindlyroe-website
```

---

## 🧪 Test Commands

### Test API Endpoint

```bash
curl -X POST "https://kindlyroe-website.web.app/api/submit-interest" \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","note":"Testing"}'
```

Expected: `{"ok":true,"id":"..."}`

### Browser Console Test

```javascript
await fetch('/api/submit-interest', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Console Test', email: 'test@example.com', note: '' }),
}).then((r) => r.json())
```

---

## 🔗 Important URLs

### Live Site

https://kindlyroe-website.web.app

### Firebase Console

https://console.firebase.google.com/project/kindlyroe-website

### Firestore Data

https://console.firebase.google.com/project/kindlyroe-website/firestore

### Cloud Functions

https://console.cloud.google.com/functions/details/europe-west2/submitInterest?project=kindlyroe-website

### Cloud Logs

https://console.cloud.google.com/logs/query?project=kindlyroe-website

### Monitoring Dashboard

https://console.cloud.google.com/monitoring?project=kindlyroe-website

---

## 🔍 Log Queries

### All Function Logs

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
```

### Only Errors

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
severity>=ERROR
```

### Successful Submissions (200)

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
httpRequest.status=200
```

### Failed Submissions (4xx/5xx)

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
httpRequest.status>=400
```

### Slow Requests (> 2s)

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
httpRequest.latency>"2s"
```

### Honeypot Blocks

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
jsonPayload.message=~"Honeypot triggered"
```

---

## 🛡️ Security Status

### Firestore Rules

- **Status**: ✅ Locked (`allow read, write: if false`)
- **Location**: `firestore.rules`

### CORS Origins (Whitelisted)

```javascript
'http://localhost:5173'
'http://localhost:4173'
'http://localhost:5000'
'https://kindlyroe-website.web.app'
'https://kindlyroe-website.firebaseapp.com'
// 'https://kindlyroe.com' - Add when custom domain ready
```

### Spam Protection

- ✅ Honeypot field (hidden "website" input)
- ✅ Timestamp check (< 1 second rejection)
- ✅ Client-side validation

---

## 📊 Key Metrics

### Normal Baseline

- **Uptime**: > 99.9%
- **Error rate**: < 0.1%
- **Response time**: 300-800ms average
- **P95 latency**: < 2 seconds
- **Cost**: $0-5/month (free tier)

### Alert Thresholds

- Uptime check fails: Immediate alert
- Error rate: > 5 errors in 5 minutes
- Budget: Alert at 50%, 75%, 90%, 100%

---

## 🐛 Troubleshooting

### Form Doesn't Submit

1. Check browser console for errors
2. Check Network tab: `/api/submit-interest` request
3. View function logs: `firebase functions:log --only submitInterest`
4. Verify CORS: Check `access-control-allow-origin` header

### 403 Forbidden

```bash
# Grant public access
gcloud run services add-iam-policy-binding submitinterest \
  --region=europe-west2 \
  --member="allUsers" \
  --role="roles/run.invoker" \
  --project=kindlyroe-website
```

### Function Errors

1. Check logs for specific error message
2. Verify Firestore permissions
3. Check CORS configuration
4. Verify environment is correct

### Slow Performance

1. Check Cloud Function metrics
2. Look for cold starts
3. Verify Firestore connection
4. Check network latency

---

## 📁 File Structure

```
kindly-roe-website/
├── src/
│   ├── components/
│   │   └── InterestForm.tsx        # Form component
│   ├── lib/
│   │   └── interest.ts             # API helper
│   └── App.tsx                     # Main app
├── functions/
│   └── src/
│       └── index.ts                # Cloud Function
├── firestore.rules                 # Database security
├── firebase.json                   # Firebase config
├── DEPLOYMENT.md                   # Full deployment guide
├── MONITORING-SETUP.md            # Monitoring setup
├── SMOKE-TESTS.md                 # Test checklist
└── QUICK-REFERENCE.md             # This file
```

---

## 🔄 Common Workflows

### Adding Custom Domain

1. Add domain in Firebase Console → Hosting
2. Update CORS in `functions/src/index.ts`
3. Redeploy: `firebase deploy --only "functions:submitInterest"`

### Updating Form Fields

1. Modify `InterestForm.tsx`
2. Update `functions/src/index.ts` to handle new fields
3. Build: `npm run build`
4. Deploy: `firebase deploy --only hosting,functions:submitInterest`

### Viewing Submissions

1. Go to Firestore Console
2. Navigate to `interest` collection
3. View documents (newest first)
4. Export if needed (Console → Export)

---

## 📞 Support Resources

### Documentation

- Firebase Hosting: https://firebase.google.com/docs/hosting
- Cloud Functions: https://firebase.google.com/docs/functions
- Firestore: https://firebase.google.com/docs/firestore

### Your Documentation

- `DEPLOYMENT.md` - Complete deployment guide
- `MONITORING-SETUP.md` - Alerts and monitoring
- `SMOKE-TESTS.md` - Testing checklist
- `COMPLETED-FEATURES.md` - Feature list

### Community

- Firebase Discord: https://firebase.google.com/community
- Stack Overflow: Tag `firebase`
- GitHub Issues: Report bugs

---

## ✅ Daily Checklist

**Every day (optional):**

- [ ] Check Firestore for new submissions
- [ ] Verify no alerts received
- [ ] Spot-check function logs for errors

**Every week:**

- [ ] Review weekly metrics
- [ ] Check budget usage
- [ ] Review spam blocks
- [ ] Verify uptime > 99.9%

**Every month:**

- [ ] Export Firestore data (backup)
- [ ] Review and optimize costs
- [ ] Update dependencies: `npm outdated`
- [ ] Security audit: Check for vulnerabilities

---

## 🎯 Quick Health Check

Run these 3 commands to verify everything is working:

```bash
# 1. Test API
curl -s "https://kindlyroe-website.web.app/api/submit-interest" \
  -X POST -H "Content-Type: application/json" \
  -d '{"name":"Health","email":"test@example.com"}' | grep -q "ok" && echo "✅ API OK" || echo "❌ API FAILED"

# 2. Test Hosting
curl -s -o /dev/null -w "%{http_code}" https://kindlyroe-website.web.app | grep -q "200" && echo "✅ Hosting OK" || echo "❌ Hosting FAILED"

# 3. Check for recent errors
firebase functions:log --only submitInterest --limit 10 | grep -q "ERROR" && echo "⚠️ Errors found" || echo "✅ No errors"
```

---

## 💡 Pro Tips

1. **Bookmark this file** for quick reference
2. **Set calendar reminders** for weekly/monthly reviews
3. **Save log queries** as bookmarks in Cloud Console
4. **Screenshot baseline metrics** for comparison
5. **Document any issues** you encounter for future reference

---

**Status**: ✅ Production Ready  
**Last Updated**: 2025-10-30  
**Region**: europe-west2  
**Function**: submitInterest  
**Version**: 1.0.0
