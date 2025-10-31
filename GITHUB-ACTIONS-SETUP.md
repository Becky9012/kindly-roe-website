# 🚀 GitHub Actions Setup for Firebase Deployments

This guide will help you set up automatic deployments to Firebase when you push to GitHub.

---

## ✅ Prerequisites

- ✅ GitHub repository set up
- ✅ Firebase project: `kindlyroe-website`
- ✅ Code pushed to GitHub

---

## 📋 Step 1: Generate Firebase Service Account Key

You need to create a service account that GitHub Actions can use to deploy to Firebase.

### Option A: Using Firebase Console (Easier)

1. **Go to Firebase Console:**
   https://console.firebase.google.com/project/kindlyroe-website/settings/serviceaccounts/adminsdk

2. **Click "Generate new private key"**

3. **Click "Generate key"** in the popup

4. **Save the JSON file** - This contains your service account credentials

⚠️ **Keep this file secure - don't commit it to Git!**

### Option B: Using Google Cloud Console

1. **Go to Service Accounts:**
   https://console.cloud.google.com/iam-admin/serviceaccounts?project=kindlyroe-website

2. **Create or select service account:**
   - Name: `github-actions-deploy`
   - Description: "Service account for GitHub Actions deployments"

3. **Grant roles:**
   - `Firebase Admin SDK Administrator Service Agent`
   - `Firebase Hosting Admin`
   - `Cloud Functions Admin`

4. **Create key:**
   - Click on the service account
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose JSON format
   - Download the key file

---

## 📋 Step 2: Add Secret to GitHub

1. **Go to your GitHub repository**

2. **Navigate to Settings → Secrets and variables → Actions**

3. **Click "New repository secret"**

4. **Create secret:**

   ```
   Name: FIREBASE_SERVICE_ACCOUNT_KINDLYROE_WEBSITE
   Secret: [Paste the entire contents of the JSON file]
   ```

5. **Click "Add secret"**

---

## 📋 Step 3: Verify Workflow File

The workflow file is already created at:

```
.github/workflows/firebase-deploy.yml
```

It will:

- ✅ Trigger on pushes to `main` branch
- ✅ Build your project
- ✅ Deploy to Firebase Hosting
- ✅ Deploy Cloud Functions
- ✅ Allow manual triggers

---

## 🧪 Step 4: Test the Deployment

### Test 1: Push to Main Branch

```bash
# Make a small change
echo "# Test deployment" >> README.md

# Commit and push
git add .
git commit -m "Test: Trigger GitHub Actions deployment"
git push origin main
```

### Test 2: Manual Trigger

1. Go to your GitHub repository
2. Click **"Actions"** tab
3. Select **"Deploy to Firebase"** workflow
4. Click **"Run workflow"**
5. Select branch: `main`
6. Click **"Run workflow"**

---

## 📊 Monitor Deployments

### View Workflow Runs

**GitHub Actions tab:**

- URL: `https://github.com/[your-username]/[repo-name]/actions`

### View Deployment Status

**Firebase Console:**

- Hosting: https://console.firebase.google.com/project/kindlyroe-website/hosting
- Functions: https://console.firebase.google.com/project/kindlyroe-website/functions

---

## 🔧 Workflow Details

The workflow (`firebase-deploy.yml`) does:

1. **Checkout code** from GitHub
2. **Setup Node.js** (version 20)
3. **Install dependencies** (`npm ci`)
4. **Install Firebase CLI**
5. **Build project** (`npm run build`)
6. **Deploy** to Firebase (Hosting + Functions)

**Deployment triggers:**

- ✅ Push to `main` branch
- ✅ Manual trigger (workflow_dispatch)

---

## 🎯 What Gets Deployed

### Automatic Deployments Include:

- ✅ **Hosting** - Your built site from `dist/`
- ✅ **Functions** - Cloud Functions from `functions/`
- ✅ **Firestore Rules** - If changed

### What Doesn't Deploy Automatically:

- ❌ Firestore indexes (manual deployment)
- ❌ Storage rules (manual deployment)
- ❌ Extensions (manual installation)

---

## 🔒 Security Best Practices

### ✅ Do:

- ✅ Keep service account key as GitHub Secret (never commit)
- ✅ Use least-privilege permissions
- ✅ Review workflow runs regularly
- ✅ Use branch protection rules on `main`

### ❌ Don't:

- ❌ Commit service account JSON files
- ❌ Share service account keys publicly
- ❌ Give service account admin permissions unless needed

---

## 🐛 Troubleshooting

### "Authentication failed" Error

**Problem:** GitHub Actions can't authenticate to Firebase

**Solution:**

1. Check secret name matches: `FIREBASE_SERVICE_ACCOUNT_KINDLYROE_WEBSITE`
2. Verify JSON content is correct (entire file, not just part)
3. Check service account has correct permissions

### "Build failed" Error

**Problem:** `npm run build` fails

**Solution:**

1. Test build locally: `npm run build`
2. Check for TypeScript errors
3. Verify all dependencies are in `package.json`

### "Deploy failed" Error

**Problem:** Firebase deployment fails

**Solution:**

1. Check Firebase Console for error details
2. Verify project ID: `kindlyroe-website`
3. Check service account permissions
4. Review workflow logs in GitHub Actions

---

## 📝 Workflow Customization

### Deploy Only Hosting

Edit `.github/workflows/firebase-deploy.yml`:

```yaml
- name: Deploy to Firebase
  uses: FirebaseExtended/action-hosting-deploy@v0
  with:
    repoToken: '${{ secrets.GITHUB_TOKEN }}'
    firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT_KINDLYROE_WEBSITE }}'
    projectId: kindlyroe-website
    channelId: live
    target: hosting # Only hosting
```

### Deploy Only Functions

```yaml
target: functions # Only functions
```

### Deploy on Pull Requests (Preview)

```yaml
on:
  push:
    branches:
      - main
  pull_request: # Add this
    branches:
      - main
```

This creates preview channels for PRs!

---

## 🎯 Branch Strategy

### Recommended Setup:

- **`main` branch** → Auto-deploys to production
- **`develop` branch** → Optional preview deployments
- **Pull requests** → Preview channels (optional)

### Example Branch Protection:

1. Go to: **Settings → Branches**
2. Add rule for `main`:
   - ✅ Require pull request reviews
   - ✅ Require status checks
   - ✅ Require branches to be up to date

---

## 📊 Deployment Status Badge

Add a badge to your README:

```markdown
![Deploy Status](https://github.com/[your-username]/[repo-name]/actions/workflows/firebase-deploy.yml/badge.svg)
```

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Service account created in Firebase/Google Cloud
- [ ] Service account key downloaded (JSON)
- [ ] Secret added to GitHub (`FIREBASE_SERVICE_ACCOUNT_KINDLYROE_WEBSITE`)
- [ ] Workflow file exists (`.github/workflows/firebase-deploy.yml`)
- [ ] Code pushed to GitHub
- [ ] Test deployment triggered
- [ ] Deployment succeeded in GitHub Actions
- [ ] Site updated on Firebase Hosting

---

## 🎉 Success!

Once set up, every push to `main` will:

1. ✅ Automatically build your site
2. ✅ Deploy to Firebase Hosting
3. ✅ Deploy Cloud Functions
4. ✅ Update your live site

**No more manual deployments needed!** 🚀

---

## 📞 Need Help?

- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Firebase GitHub Action**: https://github.com/FirebaseExtended/action-hosting-deploy
- **Firebase CLI Docs**: https://firebase.google.com/docs/cli

---

**Next Steps:**

1. Generate service account key
2. Add secret to GitHub
3. Push code to trigger first deployment
4. Monitor in GitHub Actions tab

🎊 **Happy automating!**
