#!/bin/bash
# Generate Firebase CI token for GitHub Actions

echo "🔑 Generating Firebase CI Token"
echo "================================"
echo ""
echo "This will generate a token that GitHub Actions can use to deploy."
echo "This token works without service account keys!"
echo ""
echo "Steps:"
echo "1. A browser will open for Firebase authentication"
echo "2. Log in with your Google account"
echo "3. Copy the token that appears"
echo "4. Add it to GitHub Secrets as FIREBASE_TOKEN"
echo ""
echo "Press Enter to continue..."
read

echo ""
echo "Opening Firebase login..."
echo ""

# Generate CI token
firebase login:ci

echo ""
echo "✅ Token generated!"
echo ""
echo "Next steps:"
echo "1. Copy the token above"
echo "2. Add it to GitHub Secrets:"
echo "   gh secret set FIREBASE_TOKEN"
echo ""
echo "Or use the script: ./add-firebase-token.sh"

