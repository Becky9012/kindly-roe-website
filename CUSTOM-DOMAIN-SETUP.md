# 🌐 Custom Domain Setup Guide

Complete guide to connect `kindlyroe.com` to your Firebase Hosting site.

---

## ✅ Prerequisites (Already Done)

- ✅ **Function CORS Updated** - Added `https://kindlyroe.com` and `https://www.kindlyroe.com`
- ✅ **Function Deployed** - Updated function is live
- ✅ **Domain Ownership** - You own `kindlyroe.com`

---

## 📋 Step-by-Step Instructions

### Step 1: Add Custom Domain in Firebase Console

1. **Open Firebase Hosting:**
   - URL: <https://console.firebase.google.com/project/kindlyroe-website/hosting>
   - Or: Firebase Console → Hosting

2. **Click "Add custom domain"**

3. **Enter your domain:**

   ```text
   kindlyroe.com
   ```

4. **Choose setup option:**
   - Select: **"Quick setup (recommended)"**
   - This configures both `kindlyroe.com` and `www.kindlyroe.com`

5. **Verify domain ownership:**

   Firebase will provide a **TXT record** to add to your DNS:

   ```text
   Type: TXT
   Name: @ (or root)
   Value: [Firebase will provide this]
   ```

   **Add this record in your domain registrar's DNS settings.**

---

### Step 2: Add DNS Records (Domain Registrar)

After verifying ownership, you'll need to add these DNS records:

#### Option A: Using A Records (Recommended for apex domain)

```text
Type: A
Name: @ (or root domain)
Value: [Firebase will provide IP addresses]

Type: A
Name: www
Value: [Same IP addresses]
```

Firebase typically provides these IPs:

- `151.101.1.195`
- `151.101.65.195`

#### Option B: Using CNAME (for www only)

```text
Type: CNAME
Name: www
Value: kindlyroe-website.web.app.
```

⚠️ **Note**: Most registrars don't allow CNAME on apex domain (@), so use A records instead.

---

### Step 3: Wait for Provisioning

After adding DNS records:

1. **DNS Propagation:** Can take 24-48 hours (usually < 1 hour)
2. **SSL Certificate:** Firebase auto-provisions (usually 15-30 minutes)
3. **Status Check:** Monitor in Firebase Console → Hosting

**You'll see these statuses:**

- 🟡 Needs Setup → 🟡 Pending → ✅ Connected

---

### Step 4: Test Your Domain

Once status shows **"Connected"**:

```bash
# Test the site
curl -I https://kindlyroe.com

# Test the API
curl -X POST "https://kindlyroe.com/api/submit-interest" \
  -H "Content-Type: application/json" \
  -d '{"name":"Domain Test","email":"test@example.com","note":"Testing custom domain"}'

# Expected: {"ok":true,"id":"..."}
```

---

## 🔧 DNS Configuration Examples

### If using Cloudflare

1. Go to DNS settings
2. Add records:

   ```text
   Type: A
   Name: @
   IPv4: [Firebase IP 1]
   Proxy: Off (🌐 DNS only)

   Type: A
   Name: @
   IPv4: [Firebase IP 2]
   Proxy: Off (🌐 DNS only)

   Type: A
   Name: www
   IPv4: [Firebase IP 1]
   Proxy: Off (🌐 DNS only)

   Type: A
   Name: www
   IPv4: [Firebase IP 2]
   Proxy: Off (🌐 DNS only)
   ```

3. Click Save

**Important:** Turn OFF Cloudflare proxy initially. Enable after domain is connected.

---

### If using GoDaddy

1. Go to DNS Management
2. Add A records:

   ```text
   Type: A
   Host: @
   Points to: [Firebase IP 1]
   TTL: 1 Hour

   Type: A
   Host: @
   Points to: [Firebase IP 2]
   TTL: 1 Hour

   Type: A
   Host: www
   Points to: [Firebase IP 1]
   TTL: 1 Hour

   Type: A
   Host: www
   Points to: [Firebase IP 2]
   TTL: 1 Hour
   ```

3. Save

---

### If using Google Domains / Squarespace

1. Go to DNS settings
2. Add Custom records:

   ```text
   Host: @
   Type: A
   Data: [Firebase IP 1]

   Host: @
   Type: A
   Data: [Firebase IP 2]

   Host: www
   Type: A
   Data: [Firebase IP 1]

   Host: www
   Type: A
   Data: [Firebase IP 2]
   ```

3. Save

---

### If using Namecheap

1. Advanced DNS settings
2. Add records:

   ```text
   Type: A Record
   Host: @
   Value: [Firebase IP 1]
   TTL: Automatic

   Type: A Record
   Host: @
   Value: [Firebase IP 2]
   TTL: Automatic

   Type: A Record
   Host: www
   Value: [Firebase IP 1]
   TTL: Automatic

   Type: A Record
   Host: www
   Value: [Firebase IP 2]
   TTL: Automatic
   ```

3. Save

---

## 🔍 Verification Steps

### Check DNS Propagation

```bash
# Check A records
dig kindlyroe.com A +short
dig www.kindlyroe.com A +short

# Check from multiple locations
# Visit: <https://dnschecker.org/#A/kindlyroe.com>
```

### Check SSL Certificate

```bash
# Verify SSL
curl -vI https://kindlyroe.com 2>&1 | grep "SSL certificate"

# Check certificate details
openssl s_client -connect kindlyroe.com:443 -servername kindlyroe.com < /dev/null 2>/dev/null | openssl x509 -noout -dates
```

### Test Form Submission

1. Visit: <https://kindlyroe.com>
2. Fill out the interest form
3. Submit
4. Should see: "Thanks! We'll be in touch soon."
5. Verify in Firestore: <https://console.firebase.google.com/project/kindlyroe-website/firestore>

---

## 🚨 Troubleshooting

### Domain shows "Needs Setup"

**Cause:** DNS records not added or not propagated  
**Fix:**

1. Verify DNS records are correct
2. Wait 1-24 hours for propagation
3. Check DNS propagation: <https://dnschecker.org>

### "SSL certificate provisioning failed"

**Cause:** Domain not pointing to Firebase yet  
**Fix:**

1. Ensure A records point to Firebase IPs
2. Wait for DNS propagation
3. Firebase will auto-retry SSL provisioning

### Form submission fails with CORS error

**Cause:** Function not deployed or browser cache  
**Fix:**

```bash
# Verify function CORS includes your domain
gcloud functions describe submitInterest \
  --region=europe-west2 \
  --project=kindlyroe-website

# Clear browser cache and hard refresh
# Chrome/Firefox: Cmd+Shift+R (Mac) or Ctrl+Shift+F5 (Windows)
```

### "www" works but apex domain doesn't (or vice versa)

**Cause:** Missing DNS records  
**Fix:**

- Ensure BOTH `@` and `www` have A records
- Both should point to same Firebase IPs

---

## 📊 Post-Setup Checklist

Once domain is connected:

- [ ] Visit <https://kindlyroe.com> - Site loads
- [ ] Visit <https://www.kindlyroe.com> - Redirects or loads
- [ ] Test form submission on custom domain
- [ ] Verify Firestore document created
- [ ] Check SSL certificate (green padlock in browser)
- [ ] Test API: `curl https://kindlyroe.com/api/submit-interest`
- [ ] Update any hardcoded URLs in code (if any)
- [ ] Update social media links
- [ ] Update documentation

---

## 🎯 Update Monitoring

After domain is connected, update uptime check:

```bash
# You may want to update the uptime check to use the custom domain
# Current check uses: kindlyroe-website.web.app
# Keep it as-is or add another check for kindlyroe.com
```

**Option 1:** Keep existing check (monitors Firebase hosting)  
**Option 2:** Update to custom domain (monitors end-user experience)

To add second uptime check for custom domain:

1. Go to: <https://console.cloud.google.com/monitoring/uptime?project=kindlyroe-website>
2. Create new check for `kindlyroe.com`
3. Same settings as existing check

---

## 🔄 Domain Migration Checklist

If migrating from another host:

- [ ] Export any existing content/data
- [ ] Test thoroughly on Firebase subdomain first
- [ ] Update DNS records (don't delete old ones yet)
- [ ] Wait for DNS propagation
- [ ] Verify new site works on custom domain
- [ ] Update any external links
- [ ] Monitor old domain for 1-2 weeks
- [ ] Remove old hosting after confirming migration

---

## 📝 Updating Links

Once domain is live, update these (if applicable):

**In your site:**

- Any hardcoded URLs
- Social share URLs
- Canonical tags
- Sitemap

**External:**

- Social media profiles (Twitter, LinkedIn, etc.)
- Email signatures
- Business cards
- Marketing materials

---

## 🌐 SEO Considerations

### Set Preferred Domain

Firebase Hosting automatically handles:

- ✅ HTTPS redirect (HTTP → HTTPS)
- ✅ www redirect (if configured)
- ✅ SSL certificate

### Update sitemap (if you have one)

```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://kindlyroe.com/</loc>
    <lastmod>2025-10-30</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Submit to search engines

- Google Search Console: <https://search.google.com/search-console>
- Bing Webmaster Tools: <https://www.bing.com/webmasters>

---

## 💡 Pro Tips

1. **Lower TTL first:** Set DNS TTL to 300s (5 min) before making changes
2. **Test on subdomain:** Firebase creates `kindlyroe.com` and `www.kindlyroe.com` automatically
3. **Monitor logs:** Watch for any errors after domain switch
4. **Keep old domain:** Don't delete Firebase subdomain - useful for debugging
5. **SSL takes time:** Be patient, it can take 24-48 hours in rare cases

---

## 📞 Need Help?

### Firebase Support Docs

- Custom Domains: <https://firebase.google.com/docs/hosting/custom-domain>
- Troubleshooting: <https://firebase.google.com/docs/hosting/troubleshooting>

### Check Status

- Firebase Status: <https://status.firebase.google.com>
- Google Cloud Status: <https://status.cloud.google.com>

### Common Issues

- DNS Checker: <https://dnschecker.org>
- SSL Checker: <https://www.ssllabs.com/ssltest/>

---

## ✅ Success Checklist

Your domain is fully set up when:

- [✅] Domain shows "Connected" in Firebase Console
- [✅] <https://kindlyroe.com> loads your site
- [✅] <https://www.kindlyroe.com> works
- [✅] Green padlock (SSL) shows in browser
- [✅] Form submission works
- [✅] API responds: <https://kindlyroe.com/api/submit-interest>
- [✅] No CORS errors in browser console

---

## 🎉 Next Steps After Domain is Live

1. **Test thoroughly** - All pages, form, links
2. **Update marketing materials** - Use new domain
3. **Monitor for 24-48 hours** - Check for any issues
4. **Celebrate!** 🎊 Your professional domain is live!

---

**Current Status**: ✅ CORS Updated & Function Deployed  
**Next Step**: Add domain in Firebase Console  
**Estimated Time**: 1-24 hours for full propagation

**Start here**: <https://console.firebase.google.com/project/kindlyroe-website/hosting>
