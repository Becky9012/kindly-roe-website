# 🔧 Domain Verification Troubleshooting - Squarespace

## ✅ What's Working

I've verified your DNS records are correct:

- ✅ **TXT Record**: `hosting-site=kindlyroe-website` - Present and correct
- ✅ **A Record**: `199.36.158.100` - Present and correct

## 🚨 The Problem

Firebase is getting **403 Forbidden** errors when trying to verify your domain. This means:

- DNS records are correct ✅
- But something is blocking Firebase's verification requests ❌

## 🔍 Common Squarespace Issues

### Issue 1: DNS Proxy/Privacy Settings

**Check in Squarespace:**

1. Go to: **Settings → Domains → kindlyroe.com**
2. Look for: **"DNS Settings"** or **"DNS Records"**
3. Check if there's a **"Proxy"** or **"CDN"** toggle
4. **Turn OFF any proxy/CDN** - Firebase needs direct DNS access

### Issue 2: Squarespace Website Blocking HTTP

**The Problem:**

- Squarespace might be redirecting all HTTP → HTTPS
- Firebase verification needs HTTP access to `/.well-known/acme-challenge/`

**Solution:**

- Make sure the domain is in **"DNS Only"** mode (not connected to a Squarespace site)
- If the domain is connected to a Squarespace site, temporarily disconnect it

### Issue 3: DNS Records Not Propagated to Firebase's Servers

**The Problem:**

- Your DNS works locally, but Firebase's verification servers might not see it yet
- Can take up to 48 hours for full global propagation

**Solution:**

- Wait 1-2 hours and try again
- Or force DNS refresh

---

## 📋 Step-by-Step Fix for Squarespace

### Step 1: Verify DNS Record Format

In Squarespace DNS settings, make sure:

**TXT Record:**

```
Type: TXT
Name: @ (or leave blank, or "kindlyroe.com")
Data: hosting-site=kindlyroe-website
TTL: 3600 (or 1 hour)
```

**A Record:**

```
Type: A
Name: @ (or leave blank, or "kindlyroe.com")
Data: 199.36.158.100
TTL: 3600 (or 1 hour)
```

**Important:**

- Use `@` or leave Name field blank (NOT "www" or "kindlyroe.com")
- Don't include quotes around the TXT value
- Make sure there are NO extra spaces

### Step 2: Disconnect Domain from Squarespace Site (If Connected)

If `kindlyroe.com` is connected to a Squarespace website:

1. Go to: **Settings → Domains**
2. Click on: **kindlyroe.com**
3. Look for: **"Disconnect"** or **"DNS Settings"**
4. **Temporarily disconnect** the domain from any Squarespace site
5. Keep only the DNS records (A and TXT)

**Why:** Squarespace might be intercepting HTTP requests for verification

### Step 3: Check for Firewall/Security Settings

In Squarespace:

1. **Settings → Domains → kindlyroe.com**
2. Look for: **"Security"**, **"Firewall"**, or **"Access Control"**
3. Make sure nothing is blocking:
   - `198.185.159.144`
   - `198.185.159.145`
   - `198.49.23.144`
   - `198.49.23.145`

These are Firebase's verification IPs that need access.

### Step 4: Remove All Other A Records (Temporarily)

**Important:** Only keep the ONE A record pointing to Firebase:

1. In Squarespace DNS, check for OTHER A records
2. Temporarily delete/disable any A records NOT pointing to `199.36.158.100`
3. Keep only:
   - A record: `@` → `199.36.158.100`
   - TXT record: `@` → `hosting-site=kindlyroe-website`

### Step 5: Wait and Retry

1. **Wait 15-30 minutes** after making changes
2. In Firebase Console, click **"Retry verification"** or **"Verify domain"**
3. Firebase will re-check DNS

---

## 🔧 Alternative: Try Using www Subdomain First

Sometimes verifying `www` first works better:

### Step 1: Add www Records in Squarespace

**CNAME Record:**

```
Type: CNAME
Name: www
Data: kindlyroe-website.web.app.
TTL: 3600
```

**Note:** Use the `.web.app` subdomain, NOT the IP address

### Step 2: Verify www in Firebase

1. In Firebase Console → Hosting
2. Click "Add custom domain"
3. Enter: `www.kindlyroe.com`
4. Follow verification steps

### Step 3: Then Add Apex Domain

After www works, add the apex domain (`kindlyroe.com`)

---

## 🧪 Verification Commands

Run these to verify DNS is correct:

```bash
# Check TXT record
dig kindlyroe.com TXT +short
# Should show: "hosting-site=kindlyroe-website"

# Check A record
dig kindlyroe.com A +short
# Should show: 199.36.158.100

# Check from multiple DNS servers
nslookup kindlyroe.com 8.8.8.8
nslookup kindlyroe.com 1.1.1.1
```

---

## 🚨 If Still Not Working

### Option 1: Contact Squarespace Support

Ask them:

- "How do I disable DNS proxy/CDN for my domain?"
- "Why are Firebase's verification IPs (198.185.159.144/145, 198.49.23.144/145) getting 403 Forbidden?"
- "Can you check if my domain has any firewall rules blocking these IPs?"

### Option 2: Transfer DNS to Another Provider

If Squarespace DNS is problematic, consider:

- **Cloudflare** (free, excellent DNS)
- **Google Domains** (now Squarespace, but DNS management is better)
- **Route 53** (AWS, very reliable)

**How to transfer:**

1. Get nameservers from new provider
2. Update nameservers in Squarespace domain settings
3. Add DNS records in new provider
4. Wait 24-48 hours for propagation

### Option 3: Manual Verification

Firebase sometimes allows manual verification:

1. In Firebase Console, look for **"Verify manually"** option
2. Or contact Firebase Support for alternative verification

---

## 📞 Firebase Support

If nothing works:

- Firebase Support: https://firebase.google.com/support
- Include error message: "403 Forbidden from 198.185.159.144, 198.185.159.145, 198.49.23.144, 198.49.23.145"
- Mention DNS records are correct (verified via dig)

---

## ✅ Success Indicators

You'll know it's working when:

- Firebase Console shows: **"Connected"** (green checkmark)
- No more 403 errors
- SSL certificate provisioning starts
- Domain appears in "Connected domains" list

---

## 🎯 Quick Action Items

**Right now, try these in order:**

1. ✅ Verify DNS records are exactly as shown above (no extra spaces/quotes)
2. ✅ Check if domain is connected to Squarespace site → Disconnect if so
3. ✅ Look for DNS Proxy/CDN settings → Turn OFF
4. ✅ Remove any other A records (keep only Firebase's)
5. ✅ Wait 30 minutes
6. ✅ Click "Retry verification" in Firebase Console

**Most likely fix:** Disconnect domain from Squarespace site if it's connected!

---

## 📝 Current Status

- ✅ DNS Records: Correct
- ✅ Domain Resolves: Yes (199.36.158.100)
- ❌ Firebase Verification: Failing (403 Forbidden)
- 🔍 Likely Cause: Squarespace intercepting/blocking verification requests

**Next Step:** Check Squarespace domain settings for proxy/CDN/connection to site
