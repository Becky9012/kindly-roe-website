# Kindly Roe — Public Website

A calm, emotionally intelligent website that introduces Kindly Roe and its foundations, built as a fast, accessible static site.

![Deploy](https://github.com/Becky9012/kindly-roe-website/actions/workflows/firebase-deploy.yml/badge.svg)

## Overview

This site explains the vision, signposts the two pathways (For Families, For Adults), invites interest, and builds a gentle sense of community. It is intentionally simple, fast, and low-maintenance.

## Features

- 🎨 Beautiful UI with hand-drawn illustrations
- 📝 Interest form with Cloud Function backend
- 🛡️ Spam protection (honeypot + timestamp checks)
- 🔒 Secure defaults (no client SDK, locked rules)
- 📊 Monitoring & alerts ready
- ⚡ Fast & reliable (static hosting)

## Tech

- Vite + React + TypeScript
- Tailwind tokens for colour and typography
- Lightweight UI (shadcn/ui)
- No trackers, minimal JavaScript

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## CI/CD

This repo deploys with **GitHub Actions** using **Google Workload Identity Federation**. No JSON keys or Firebase tokens.

- **Production branch**: `main`
- **Firebase project**: `kindlyroe-website`
- **Workflow**: `.github/workflows/firebase-deploy.yml`

Pipeline:

1. Checkout
2. WIF auth → Google Cloud
3. Install Node 20 + Firebase CLI
4. Build web
5. Build functions (if present)
6. Deploy Hosting and Functions

Run by pushing to `main` or via **Actions** → **Run workflow**.

### Preview deploys (optional, for PRs)

Add later: a second workflow that runs on `pull_request` and publishes a temporary Hosting channel for review. Not enabled yet.

## Deployment

### Automatic (recommended)

Pushing to `main` deploys to:

- **Hosting**: project `kindlyroe-website`
- **Functions**: Gen 2 in `europe-west2` (if present)

### Manual (fallback)

```bash
npm run build
firebase deploy --only hosting --project kindlyroe-website
firebase deploy --only functions --project kindlyroe-website
```

## Configuration

### firebase.json

```json
{
  "firestore": { "rules": "firestore.rules" },
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "headers": [
      {
        "source": "**/*.@(js|css)",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
      },
      {
        "source": "**/*.@(png|jpg|jpeg|gif|webp|svg|ico|woff|woff2)",
        "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
      },
      { "source": "**", "headers": [{ "key": "Cache-Control", "value": "no-store" }] }
    ],
    "rewrites": [
      {
        "source": "/api/submit-interest",
        "function": { "functionId": "submitInterest", "region": "europe-west2" }
      },
      { "source": "**", "destination": "/index.html" }
    ]
  },
  "functions": { "source": "functions", "runtime": "nodejs20" }
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
# Build site
npm run build

# Tail logs for one function
firebase functions:log --only submitInterest --project kindlyroe-website
```

## Monitoring & troubleshooting

- **Deploys**: GitHub → Actions
- **Hosting**: Firebase Console → Hosting
- **Functions logs**: Firebase Console → Functions, or the command above

Common fixes:

- **Permission denied**: ensure `ci-deployer@kindlyroe-website.iam.gserviceaccount.com` has roles `firebase.admin`, `cloudfunctions.admin`, `run.admin`, `artifactregistry.reader`, and `iam.serviceAccountUser` on `${PROJECT_NUMBER}-compute@developer.gserviceaccount.com`.
- **API not enabled**: enable `cloudfunctions.googleapis.com`, `run.googleapis.com`, `artifactregistry.googleapis.com`, `cloudbuild.googleapis.com`, `eventarc.googleapis.com`, `hosting.googleapis.com`.
- **Wrong project/site**: add `--project kindlyroe-website` and if needed `--site YOUR_SITE_ID`.

## Accessibility & performance

- Semantic HTML, readable defaults
- Custom colour tokens with contrast on warm backgrounds
- Targets 90+ Lighthouse for performance, a11y, best practices

## Contributing

Solo development for now, direct pushes to `main` are fine. When collaborators join, we'll switch to PRs and add preview deploys.

## Licence

© 2025 Kindly Roe Ltd. All rights reserved.

This repository and its contents (including code, text, design, and artwork)
are proprietary and confidential to Kindly Roe Ltd.

No part of this repository may be reproduced, distributed, or reused without
prior written permission from Kindly Roe Ltd.
