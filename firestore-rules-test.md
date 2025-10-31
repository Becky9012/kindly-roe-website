# Temporary Firestore Rules for Testing

**⚠️ WARNING: These rules are OPEN and allow anyone to read/write. Use ONLY for testing, then revert to proper auth rules.**

## How to Apply Temporary Rules

1. Go to Firebase Console → Firestore Database → Rules
2. Replace the current rules with the template below (update the date!)
3. Click "Publish"
4. Test your form submission
5. **IMPORTANT:** After confirming it works, revert to proper secure rules

## Temporary Test Rules (replace YYYY, MM, DD with tomorrow's date)

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.time < timestamp.date(2025, 1, 15);
    }
  }
}
```

**Example:** If today is January 14, 2025, set the date to `timestamp.date(2025, 1, 15)`.

## After Testing - Secure Rules

Once you confirm the form works, replace with proper rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /interest/{docId} {
      allow create: if true;  // Anyone can submit
      allow read, update, delete: if false;  // Only admins can read via console
    }
    match /{document=**} {
      allow read, write: if false;  // Everything else blocked
    }
  }
}
```

## What Changed

1. ✅ **firebaseConfig.ts**: Cleaner singleton pattern, `initializeFirestore` called once
2. ✅ **InterestForm.tsx**: Uses shared `db` instance, added `source: 'website'` field
3. ✅ **Better logging**: Console logs show exactly where failures occur

## Next Steps

1. Update Firestore rules (see above)
2. Refresh your browser
3. Submit the form
4. Check Firestore Console → Data → `interest` collection for new document
5. Check browser console for detailed logs
