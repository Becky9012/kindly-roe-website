# Kindly Roe — Public Website

> _A calm, emotionally intelligent website that introduces Kindly Roe and its foundations, built as a fast, accessible static site._

## Overview

This repository contains the public-facing website for Kindly Roe, designed to:

- explain the vision and what the product is becoming,
- signpost the two pathways, **For Families** and **For Adults**,
- share thoughtful updates and invite interest,
- begin to build a gentle sense of community around Roe's values of curiosity, compassion, and understanding.

_This site is intentionally simple, fast, and low-maintenance._

## ✨ Features

- 🎨 **Beautiful UI** with hand-drawn illustrations
- 📝 **Interest Form** with Cloud Function backend
- 🛡️ **Spam Protection** (honeypot + timestamp checks)
- 🔒 **Secure** (Firestore Admin SDK, locked client rules)
- 🎯 **Toast Notifications** for user feedback
- 📊 **Monitoring & Alerts** ready
- ⚡ **Fast & Reliable** (no SDK timeouts)

## What's in here

- **Vite + React + TypeScript**
- **Tailwind CSS** with custom tokens for colour and typography
- Hand-drawn illustration styling and soft copper accents
- Lightweight component set (shadcn/ui) for cards, buttons, and layout
- No server or database, no trackers, minimal JavaScript

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## CI/CD

This repo deploys with **GitHub Actions** using **Google Workload Identity Federation**, so there are no JSON keys or Firebase tokens.

- **Branch that deploys to production**: `main`
- **Firebase project**: `kindlyroe-website`
- **Service account**: `ci-deployer@kindlyroe-website.iam.gserviceaccount.com`
- **Workflow file**: `.github/workflows/firebase-deploy.yml`

The workflow:

1. Checks out the repo
2. Authenticates to Google Cloud using WIF
3. Installs Node 20 and the Firebase CLI
4. Builds the website
5. Builds functions if present
6. Deploys to Firebase Hosting and Cloud Functions

Run it by pushing to `main` or using **Actions** → **Run workflow**.

## Deployment

### Automatic (recommended)

Pushing to `main` will deploy to:

- **Hosting**: `kindlyroe-website`
- **Functions**: Gen 2 in `europe-west2` (if present)

You will see the run in GitHub at **Actions**.

### Manual (for emergencies only)

You can still deploy from your machine if logged in.

```bash
npm run build
firebase deploy --only hosting --project kindlyroe-website
firebase deploy --only functions --project kindlyroe-website
```

## Config

### firebase.json

```json
{
  "firestore": {
    "rules": "firestore.rules"
  },
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "/api/submit-interest",
        "function": { "functionId": "submitInterest", "region": "europe-west2" }
      },
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  },
  "functions": {
    "source": "functions",
    "runtime": "nodejs20"
  }
}
```

### .firebaserc

```json
{
  "projects": {
    "default": "kindlyroe-website"
  }
}
```

## Quick commands

```bash
# Local dev
npm install
npm run dev

# Build the site
npm run build

# View production logs for a single function
firebase functions:log --only submitInterest --project kindlyroe-website
```

## Monitoring and troubleshooting

- **Check deploys**: GitHub → Actions
- **Check Hosting**: Firebase Console → Hosting
- **Check Functions logs**: Firebase Console → Functions, or `firebase functions:log`

### Common fixes

**Permission denied on deploy**  
Ensure `ci-deployer@kindlyroe-website.iam.gserviceaccount.com` has roles: `firebase.admin`, `cloudfunctions.admin`, `run.admin`, `artifactregistry.reader`, and `iam.serviceAccountUser` on `${PROJECT_NUMBER}-compute@developer.gserviceaccount.com`.

**API not enabled**  
Enable once in Cloud Shell:
`cloudfunctions.googleapis.com`, `run.googleapis.com`, `artifactregistry.googleapis.com`, `cloudbuild.googleapis.com`, `eventarc.googleapis.com`, `hosting.googleapis.com`.

**Wrong project or site**  
Deploy with explicit flags:
`firebase deploy --project kindlyroe-website`
and if you have multiple sites:
`--site YOUR_SITE_ID`.

## Accessibility and performance

- Semantic HTML and readable defaults
- Custom colour tokens for contrast on warm backgrounds
- Targets 90+ Lighthouse on performance, accessibility, and best practices

## Contributing

Solo development at present. Direct pushes to `main` are fine while setting up.

When collaborators join, we will switch to PRs into `main` and add preview deploys.

## Licence

All code in this repository is provided under a permissive licence to be confirmed for launch. Content and artwork are reserved.
