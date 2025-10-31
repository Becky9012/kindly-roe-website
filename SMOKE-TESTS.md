# 🧪 Smoke Test Checklist

## Pre-Deployment Checklist

Before running smoke tests, verify:

- ✅ `npm run build` succeeds
- ✅ `firebase deploy --only hosting` completes
- ✅ Function deployed: `firebase deploy --only "functions:submitInterest"`

---

## 1. Desktop Browser Test

### Chrome/Firefox/Safari

1. **Visit the site**
   - URL: https://kindlyroe-website.web.app
   - Open DevTools (F12)
   - Go to Console tab

2. **Fill out the form**
   - Name: `[Your Name] Desktop Test`
   - Email: `test@example.com` (or your email)
   - Note: `Testing from [Browser] on desktop`

3. **Submit the form**
   - Click "Send" button
   - Button should show "Sending..." briefly

4. **Verify success indicators**
   - [ ] Toast appears: "Thanks! We'll be in touch soon."
   - [ ] Form fields clear automatically
   - [ ] No errors in console
   - [ ] Network tab shows: `POST /api/submit-interest` → Status `200`

5. **Check response**

   ```javascript
   // In console, run:
   await fetch('/api/submit-interest', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       name: 'Console Test',
       email: 'test@example.com',
       note: 'Direct console test',
     }),
   }).then((r) => r.json())

   // Expected: {ok: true, id: "..."}
   ```

---

## 2. Mobile Browser Test

### iOS Safari / Android Chrome

1. **Visit on mobile**
   - URL: https://kindlyroe-website.web.app
   - Test on actual device (not just desktop responsive mode)

2. **Fill out the form**
   - Name: `[Your Name] Mobile Test`
   - Email: `test@example.com`
   - Note: `Testing from mobile device`

3. **Submit the form**
   - Tap "Send" button
   - Verify button shows "Sending..."

4. **Verify success indicators**
   - [ ] Toast notification appears at top
   - [ ] Form clears
   - [ ] No visible errors
   - [ ] Can submit again after clearing

---

## 3. Firestore Verification

**Check the database:**

1. Open Firebase Console:
   https://console.firebase.google.com/project/kindlyroe-website/firestore

2. Navigate to `interest` collection

3. **Verify latest documents have:**
   - [ ] `name` field populated
   - [ ] `email` field populated
   - [ ] `note` field populated
   - [ ] `source: "website"`
   - [ ] `createdAt` timestamp (within last few minutes)
   - [ ] `userAgent` field (browser info)
   - [ ] `ipHint` field (IP address)

4. **Count documents:**
   - Should have 2+ new documents (desktop + mobile tests)
   - Document IDs should be unique

---

## 4. Cloud Logs Verification

**Check function logs:**

### Option 1: Firebase CLI

```bash
firebase functions:log --only submitInterest
```

### Option 2: Cloud Console

1. Visit: https://console.cloud.google.com/logs/query?project=kindlyroe-website

2. Use this query:

   ```
   resource.type="cloud_function"
   resource.labels.function_name="submitInterest"
   httpRequest.status=200
   ```

3. **Verify logs show:**
   - [ ] Recent entries (last few minutes)
   - [ ] HTTP status: `200`
   - [ ] No error messages
   - [ ] Expected request count

### Check for Errors

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
severity>=ERROR
```

**Expected:** No results (0 errors)

---

## 5. Spam Protection Tests

### Test 1: Honeypot Field

1. Open browser console on form page
2. Run:
   ```javascript
   document.querySelector('input[name="website"]').value = 'spam'
   ```
3. Fill form normally and submit
4. **Expected:**
   - Form clears
   - Toast shows success message
   - BUT no document in Firestore (silently rejected)

### Test 2: Rapid Submission

1. Refresh the page
2. IMMEDIATELY fill and submit (< 1 second)
3. **Expected:**
   - Form clears
   - Toast shows success message
   - BUT no document in Firestore (silently rejected)

### Test 3: Normal Submission

1. Refresh the page
2. Wait 2+ seconds
3. Fill form normally
4. Submit
5. **Expected:**
   - Success toast
   - Document IS created in Firestore

---

## 6. Network & Performance Tests

### Check Response Times

In browser DevTools Network tab:

1. Submit form
2. Find `submit-interest` request
3. **Verify:**
   - [ ] Status: `200`
   - [ ] Response time: < 2 seconds
   - [ ] Response body: `{"ok":true,"id":"..."}`
   - [ ] CORS headers present: `access-control-allow-origin`

### Check Bundle Size

In Network tab after page load:

1. Look for `index-*.js`
2. **Verify:**
   - [ ] Size: ~370 KB uncompressed
   - [ ] Gzipped: ~116 KB
   - [ ] Loads in < 2 seconds on 3G

---

## 7. Edge Cases

### Empty Fields

1. Try submitting with empty name
2. **Expected:** Toast error: "Please enter your name and email"

### Invalid Email

1. Enter invalid email: `notanemail`
2. **Expected:** Browser validation stops submission

### Long Text

1. Fill note field with 1000+ characters
2. Submit
3. **Expected:**
   - Success (no length limit)
   - Document created with full note

### Special Characters

1. Name: `Test User's "Name" & Co.`
2. Email: `test+tag@example.com`
3. Submit
4. **Expected:**
   - Success
   - Characters stored correctly in Firestore

---

## 8. Cross-Browser Compatibility

Test on:

- [ ] Chrome (Windows/Mac)
- [ ] Firefox (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Edge (Windows)
- [ ] Chrome Mobile (Android)
- [ ] Safari Mobile (iOS)

---

## ✅ Sign-Off Checklist

Before marking as production-ready:

- [ ] Desktop test passed (Chrome, Firefox, or Safari)
- [ ] Mobile test passed (iOS or Android)
- [ ] At least 2 documents in Firestore with correct fields
- [ ] Cloud Logs show 200 responses
- [ ] No errors in Cloud Logs
- [ ] Honeypot test passed (spam blocked)
- [ ] Timestamp test passed (rapid submission blocked)
- [ ] Response times < 2 seconds
- [ ] Toast notifications working
- [ ] Form clears after submission

---

## 🐛 If Tests Fail

### Form doesn't submit

1. Check browser console for errors
2. Verify API endpoint: `/api/submit-interest`
3. Check Network tab for failed requests
4. View function logs: `firebase functions:log --only submitInterest`

### No toast notification

1. Verify Toaster component in App.tsx
2. Check for JavaScript errors
3. Try hard refresh (Cmd+Shift+R / Ctrl+Shift+F5)

### Document not in Firestore

1. Check if spam protection triggered
2. Verify function logs for errors
3. Check Firestore rules (should be `if false`)
4. Verify function has Firestore permissions

### 403 Forbidden

1. Check Cloud Run IAM permissions
2. Verify `allUsers` has `roles/run.invoker`
3. Check CORS configuration in function

---

## 📊 Expected Results Summary

**After completing all tests:**

- 5+ documents in `interest` collection
- 5+ entries in Cloud Logs with status 200
- 2+ spam attempts blocked (not in Firestore)
- 0 errors in logs
- All browser tests passed
- All mobile tests passed

**Status:** ✅ PRODUCTION READY 🚀
