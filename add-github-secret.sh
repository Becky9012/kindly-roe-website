#!/bin/bash
# Script to add Firebase service account key to GitHub Secrets

set -e

echo "🔐 Adding Firebase Service Account to GitHub Secrets"
echo "===================================================="
echo ""

# Check if key file path provided
if [ -z "$1" ]; then
  echo "Usage: ./add-github-secret.sh <path-to-service-account-key.json>"
  echo ""
  echo "Example:"
  echo "  ./add-github-secret.sh ~/Downloads/kindlyroe-website-*.json"
  echo ""
  echo "Or if the file is in the current directory:"
  echo "  ./add-github-secret.sh ./kindlyroe-website-*.json"
  echo ""
  exit 1
fi

KEY_FILE="$1"

# Check if file exists
if [ ! -f "$KEY_FILE" ]; then
  echo "❌ Error: File not found: $KEY_FILE"
  echo ""
  exit 1
fi

# Get repository name
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "")
if [ -z "$REPO" ]; then
  echo "⚠️  Warning: Could not detect repository. Make sure you're in a git repo with GitHub remote."
  echo ""
  read -p "Enter repository (format: owner/repo): " REPO
fi

echo "📁 Key file: $KEY_FILE"
echo "📦 Repository: $REPO"
echo ""
echo "⚠️  About to add secret: FIREBASE_SERVICE_ACCOUNT_KINDLYROE_WEBSITE"
echo ""

read -p "Continue? (y/N): " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo "Cancelled."
  exit 0
fi

echo ""
echo "Adding secret to GitHub..."
echo ""

# Add the secret
if [ -n "$REPO" ] && [[ "$REPO" == *"/"* ]]; then
  gh secret set FIREBASE_SERVICE_ACCOUNT_KINDLYROE_WEBSITE --repo "$REPO" --body "$(cat "$KEY_FILE")"
else
  gh secret set FIREBASE_SERVICE_ACCOUNT_KINDLYROE_WEBSITE --body "$(cat "$KEY_FILE")"
fi

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Success! Secret added to GitHub."
  echo ""
  echo "You can verify it was added:"
  echo "  gh secret list"
  echo ""
  echo "Now you can push to GitHub and GitHub Actions will deploy automatically!"
  echo ""
else
  echo ""
  echo "❌ Error: Failed to add secret. Check your GitHub CLI permissions."
  echo ""
  exit 1
fi

