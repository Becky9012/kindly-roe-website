#!/bin/bash
# Generate Firebase CI token and add it to GitHub in one step

set -e

echo "🔑 Generate Firebase Token & Add to GitHub"
echo "=========================================="
echo ""

# Check if we can run interactive commands
if [ ! -t 0 ]; then
  echo "❌ This script requires an interactive terminal."
  echo "Please run it directly: ./generate-and-add-token.sh"
  exit 1
fi

echo "Step 1: Generating Firebase CI token..."
echo "A browser will open for authentication."
echo ""
echo "Press Enter to continue..."
read

# Generate CI token (this opens browser)
TOKEN=$(firebase login:ci 2>&1 | tee /tmp/firebase-login-output.txt)

# Extract token from output
TOKEN=$(grep -oP 'Success! Use this token to login on a CI server:\s*\K[^\s]+' /tmp/firebase-login-output.txt || \
        grep -oP 'Token:\s*\K[^\s]+' /tmp/firebase-login-output.txt || \
        echo "")

if [ -z "$TOKEN" ]; then
  echo ""
  echo "⚠️  Could not extract token automatically."
  echo "Please copy the token from the output above and run:"
  echo "  ./add-firebase-token.sh YOUR_TOKEN_HERE"
  echo ""
  exit 1
fi

echo ""
echo "✅ Token generated: ${TOKEN:0:20}..."
echo ""

# Get repository
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner 2>/dev/null || echo "")

echo "Step 2: Adding token to GitHub Secrets..."
echo "Repository: ${REPO:-current repo}"
echo ""

read -p "Add token to GitHub Secrets? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  echo ""
  echo "Token generated but not added to GitHub."
  echo "To add it manually, run:"
  echo "  ./add-firebase-token.sh $TOKEN"
  echo ""
  exit 0
fi

# Add to GitHub
if [ -n "$REPO" ] && [[ "$REPO" == *"/"* ]]; then
  gh secret set FIREBASE_TOKEN --repo "$REPO" --body "$TOKEN"
else
  gh secret set FIREBASE_TOKEN --body "$TOKEN"
fi

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Success! Firebase token added to GitHub Secrets."
  echo ""
  echo "You can now push to GitHub and deployments will run automatically!"
  echo ""
  # Clean up
  rm -f /tmp/firebase-login-output.txt
else
  echo ""
  echo "❌ Failed to add secret to GitHub."
  echo "Token: $TOKEN"
  echo "Add it manually: ./add-firebase-token.sh $TOKEN"
  echo ""
  exit 1
fi

