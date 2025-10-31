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

## Deployment

This is a **static site**, so you can host the `build/` output almost anywhere.

### Option A — Netlify

- Connect the repo, build command: `npm run build`
- Publish directory: `dist`

### Option B — GitHub Pages

```bash
# optional: add a deploy script using e.g. peaceiris/actions-gh-pages in CI
```

### Option C — Any static host

- Upload the contents of `dist/` to your provider or object storage (e.g. S3 + CloudFront)

## Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "format": "prettier . -w",
  "format:check": "prettier . -c"
}
```

## 🚀 Deployment

### Quick Commands

```bash
# Deploy frontend
npm run build
firebase deploy --only hosting

# Deploy Cloud Function
firebase deploy --only "functions:submitInterest"

# View logs
firebase functions:log --only submitInterest
```

### Production URLs

- **Website**: https://kindlyroe-website.web.app
- **API**: https://kindlyroe-website.web.app/api/submit-interest
- **Firebase Console**: https://console.firebase.google.com/project/kindlyroe-website

## 📚 Documentation

- **[QUICK-REFERENCE.md](QUICK-REFERENCE.md)** - Essential commands and links
- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Complete deployment guide
- **[MONITORING-SETUP.md](MONITORING-SETUP.md)** - Alerts and monitoring
- **[SMOKE-TESTS.md](SMOKE-TESTS.md)** - Testing checklist
- **[COMPLETED-FEATURES.md](COMPLETED-FEATURES.md)** - Feature list

## CI/CD

- **Firebase Hosting**: Manual deploys with `firebase deploy`
- **Cloud Functions**: Gen 2 in `europe-west2`
- **SPA Routing**: Configured via `firebase.json` rewrites

## Accessibility & performance

- Uses semantic HTML and readable defaults
- Tailored colour tokens for contrast on warm backgrounds
- Aims for 90+ Lighthouse on performance, a11y, best practices

## Contributing

At this stage, contributions are limited to small fixes in content and styling. Larger features are planned via an internal board.

## Licence

All code in this repository is provided under a permissive licence to be confirmed for launch. Content and artwork are reserved.

_Last updated: October 2025_
