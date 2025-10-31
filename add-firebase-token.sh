#!/bin/bash
# Add Firebase CI token to GitHub Secrets

echo "🔐 Adding Firebase Token to GitHub Secrets"
echo "=========================================="
echo ""

# Check if token provided
if [ -z "$1" ]; then
  echo "Usage: ./add-firebase-token.sh <firebase-token>"
  echo ""
  echo "Example:"
  echo "  ./add-firebase-token.sh 1//abc123xyz..."
  echo ""
  echo "To generate a token, first run:"
  echo "  ./generate-firebase-token.sh"
  echo ""
  exit 1
fi

TOKEN="$1"

# Get repository name
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "")
if [ -z "$REPO" ]; then
  echo "⚠️  Warning: Could not detect repository. Make sure you're in a git repo with GitHub remote."
  echo ""
  read -p "Enter repository (format: owner/repo): " REPO
fi

echo "📦 Repository: ${REPO:-current repo}"
echo "🔑 Token: ${TOKEN:0:20}..."
echo ""
echo "⚠️  About to add secret: FIREBASE_TOKEN"
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
  gh secret set FIREBASE_TOKEN --repo "$REPO" --body "$TOKEN"
else
  gh secret set FIREBASE_TOKEN --body "$TOKEN"
fi

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Success! Firebase token added to GitHub Secrets."
  echo ""
  echo "You can verify:"
  echo "  gh secret list"
  echo ""
  echo "Now you can push to GitHub and deployments will run automatically!"
  echo ""
else
  echo ""
  echo "❌ Error: Failed to add secret. Check your GitHub CLI permissions."
  echo ""
  exit 1
fi

