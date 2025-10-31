# 📊 Monitoring & Alerts Setup Guide

Complete guide to set up monitoring, alerts, and observability for your Kindly Roe form.

---

## 1. Uptime Check Setup

### Create HTTP Uptime Check

1. **Open Cloud Monitoring**
   - URL: https://console.cloud.google.com/monitoring/uptime?project=kindlyroe-website
   - Or: Console → Monitoring → Uptime checks

2. **Click "Create Uptime Check"**

3. **Configure Check:**

   ```
   Protocol:       HTTPS
   Resource Type:  URL

   Target:
   - Hostname:     kindlyroe-website.web.app
   - Path:         /api/submit-interest

   Check frequency: 5 minutes

   Regions:        Select 3 regions:
                   - USA (recommended: us-east1)
                   - Europe (recommended: europe-west1)
                   - Asia (recommended: asia-southeast1)

   Request Method: POST

   Request Body:
   Content-Type:   application/json
   Body:           {"name":"Uptime Check","email":"monitor@test.com","note":""}

   Response:
   Status Code:    200
   Response Content: Contains "ok":true
   ```

4. **Click "Test" to verify**
   - Should return: `{"ok":true,"id":"..."}`
   - If test passes, click "Create"

5. **Name your check:** `submitInterest-uptime`

---

## 2. Create Alerting Policy for Uptime

1. **In the uptime check you just created:**
   - Click on the check name
   - Click "Create Alert"

2. **Configure Alert:**

   ```
   Condition:      Uptime check fails

   Duration:       Any location failure
                   (or "2 locations" for less noise)

   Notifications:
   - Add notification channel (see below)
   - Choose: Email
   - Enter your email: [your-email]

   Documentation:
   "The submitInterest API is failing. Check:
    1. Firebase Hosting status
    2. Cloud Function logs
    3. Firestore connectivity

    Logs: firebase functions:log --only submitInterest"

   Policy Name:    submitInterest-uptime-alert
   ```

3. **Save the alert**

---

## 3. Set Up Notification Channels

### Email Notification

1. **Go to Notification Channels:**
   https://console.cloud.google.com/monitoring/alerting/notifications?project=kindlyroe-website

2. **Click "Add New"**

3. **Select "Email"**

   ```
   Display Name:   Kindly Roe Alerts
   Email Address:  becky.cole@kindlyroe.com
   ```

4. **Save and verify email**

### Optional: Slack/SMS

- **Slack**: Requires webhook URL
- **SMS**: Requires verified phone number
- **PagerDuty**: For 24/7 on-call

---

## 4. Create Log-Based Metric for Errors

### Function Error Metric

1. **Open Logs Explorer:**
   https://console.cloud.google.com/logs/query?project=kindlyroe-website

2. **Enter this query:**

   ```
   resource.type="cloud_function"
   resource.labels.function_name="submitInterest"
   severity>=ERROR
   ```

3. **Click "Create metric"** (button in top-right)

4. **Configure metric:**

   ```
   Metric Type:     Counter

   Log-based metric details:
   - Metric name:   submitInterest_errors
   - Description:   Count of errors in submitInterest function
   - Units:         1 (count)

   Filter:          [Already filled from query above]

   Labels:          [Optional] Add these for better filtering:
   - severity:      severity
   - status:        httpRequest.status
   ```

5. **Click "Create Metric"**

---

## 5. Create Alert for Function Errors

1. **Go to Alerting:**
   https://console.cloud.google.com/monitoring/alerting/policies/create?project=kindlyroe-website

2. **Click "Create Policy"**

3. **Select Metric:**

   ```
   Resource Type:   Cloud Function
   Metric:          logging/user/submitInterest_errors
                    (or search for your custom metric)
   ```

4. **Configure Threshold:**

   ```
   Condition:       Threshold

   Threshold value: > 5
   For:             5 minutes

   This means:      Alert if more than 5 errors in 5 minutes
   ```

5. **Configure Notification:**

   ```
   Notification Channels:  [Your email notification channel]

   Incident autoclose:     30 minutes

   Documentation:
   "The submitInterest function is experiencing errors.

   Quick checks:
   1. View logs: firebase functions:log --only submitInterest
   2. Check Firestore status
   3. Verify CORS configuration
   4. Check recent deployments

   Recent error logs:
   https://console.cloud.google.com/logs/query?project=kindlyroe-website&query=resource.type%3D%22cloud_function%22%0Aresource.labels.function_name%3D%22submitInterest%22%0Aseverity%3E%3DERROR"

   Policy Name:    submitInterest-error-rate
   ```

6. **Click "Create Policy"**

---

## 6. Create Dashboard (Optional)

### Custom Monitoring Dashboard

1. **Go to Dashboards:**
   https://console.cloud.google.com/monitoring/dashboards?project=kindlyroe-website

2. **Click "Create Dashboard"**

3. **Name:** `Kindly Roe - submitInterest`

4. **Add Charts:**

   **Chart 1: Function Invocations**

   ```
   Chart Type:      Line
   Resource Type:   Cloud Function
   Metric:          Function executions
   Function Name:   submitInterest
   Aggregation:     Sum
   Period:          1 minute
   ```

   **Chart 2: Error Rate**

   ```
   Chart Type:      Line
   Resource Type:   Cloud Function
   Metric:          logging/user/submitInterest_errors
   Aggregation:     Rate
   Period:          1 minute
   ```

   **Chart 3: Execution Time**

   ```
   Chart Type:      Line
   Resource Type:   Cloud Function
   Metric:          Function execution times
   Function Name:   submitInterest
   Percentile:      50th, 95th, 99th
   ```

   **Chart 4: Active Instances**

   ```
   Chart Type:      Line
   Resource Type:   Cloud Function
   Metric:          Active instances
   Function Name:   submitInterest
   ```

5. **Save Dashboard**

---

## 7. Firestore Monitoring

### Document Write Tracking

1. **Open Firestore in Console:**
   https://console.firebase.google.com/project/kindlyroe-website/firestore

2. **Monitor `interest` collection:**
   - Check document count daily
   - Look for unusual spikes (potential spam)
   - Verify `createdAt` timestamps are recent

### Set Up Firestore Metrics Alert

1. **Go to Monitoring → Alerting**

2. **Create Policy for High Write Rate:**

   ```
   Resource Type:   Firestore Database
   Metric:          Document writes

   Condition:       > 100 writes per minute
   Duration:        5 minutes

   This catches:    Spam or bot attacks
   ```

---

## 8. Security Monitoring

### Track Suspicious Activity

**Create log-based metric for honeypot triggers:**

1. **Logs Explorer query:**

   ```
   resource.type="cloud_function"
   resource.labels.function_name="submitInterest"
   jsonPayload.message=~"Honeypot triggered"
   ```

2. **Create metric:** `submitInterest_honeypot_blocks`

3. **Alert if:** `> 10 in 1 hour` (potential bot attack)

**Create metric for rapid submissions:**

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
jsonPayload.message=~"Submission too fast"
```

---

## 9. Cost Monitoring

### Set Budget Alert

1. **Go to Billing:**
   https://console.cloud.google.com/billing?project=kindlyroe-website

2. **Set up budget:**

   ```
   Budget Name:     Kindly Roe Monthly
   Amount:          $10/month (adjust as needed)

   Alert at:        50%, 75%, 90%, 100%

   Email:           [Your email]
   ```

---

## 10. Health Check Script

Create a simple script to test all components:

```bash
#!/bin/bash
# health-check.sh

echo "🏥 Kindly Roe Health Check"
echo "=========================="

# 1. Test API endpoint
echo "📡 Testing API..."
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" \
  -X POST "https://kindlyroe-website.web.app/api/submit-interest" \
  -H "Content-Type: application/json" \
  -d '{"name":"Health Check","email":"test@example.com"}')

if [ "$RESPONSE" = "200" ]; then
  echo "✅ API is responding (200 OK)"
else
  echo "❌ API failed (HTTP $RESPONSE)"
fi

# 2. Test hosting
echo ""
echo "🌐 Testing Hosting..."
HOSTING=$(curl -s -o /dev/null -w "%{http_code}" https://kindlyroe-website.web.app)

if [ "$HOSTING" = "200" ]; then
  echo "✅ Hosting is up (200 OK)"
else
  echo "❌ Hosting failed (HTTP $HOSTING)"
fi

# 3. Check function logs for errors
echo ""
echo "📋 Recent errors in last hour..."
gcloud functions logs read submitInterest \
  --region=europe-west2 \
  --limit=10 \
  --filter="severity>=ERROR AND timestamp>=\"$(date -u -d '1 hour ago' +%Y-%m-%dT%H:%M:%S)\"" \
  --project=kindlyroe-website 2>/dev/null | wc -l | xargs echo "Error count:"

echo ""
echo "✅ Health check complete"
```

Save as `scripts/health-check.sh` and run periodically.

---

## 11. Useful Log Queries

### Recent Successful Submissions

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
httpRequest.status=200
timestamp>="[TIMESTAMP]"
```

### Failed Submissions

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
httpRequest.status>=400
```

### Slow Requests (> 2 seconds)

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
httpRequest.latency>"2s"
```

### CORS Errors

```
resource.type="cloud_function"
resource.labels.function_name="submitInterest"
jsonPayload.message=~"CORS"
```

---

## 12. Weekly Review Checklist

**Every Monday, check:**

- [ ] Total submissions this week (Firestore count)
- [ ] Error rate (should be < 1%)
- [ ] Average response time (should be < 1s)
- [ ] Uptime percentage (should be > 99.9%)
- [ ] Budget usage (Cloud Billing)
- [ ] Spam blocks (honeypot + timestamp metrics)

---

## 13. Alert Triage Guide

### When You Get an Alert

**1. Uptime Check Failed**

```bash
# Check function status
firebase functions:log --only submitInterest

# Check hosting status
curl -I https://kindlyroe-website.web.app

# Check Firestore status
gcloud firestore operations list --project=kindlyroe-website
```

**2. High Error Rate**

```bash
# View recent errors
firebase functions:log --only submitInterest --limit 50

# Check for patterns
gcloud logging read "resource.type=\"cloud_function\" AND severity>=ERROR" \
  --limit=20 --project=kindlyroe-website
```

**3. High Latency**

- Check Cloud Function metrics in console
- Look for cold start issues
- Verify Firestore connection

**4. Budget Alert**

- Check Cloud Billing for breakdown
- Look for unexpected usage spikes
- Verify no spam attacks

---

## ✅ Monitoring Setup Checklist

- [ ] Uptime check created and tested
- [ ] Uptime alert configured
- [ ] Email notification channel set up
- [ ] Log-based metric for errors created
- [ ] Error rate alert configured
- [ ] Dashboard created (optional)
- [ ] Firestore monitoring enabled
- [ ] Budget alert set up
- [ ] Health check script created
- [ ] Weekly review scheduled

---

## 📊 Expected Baseline Metrics

**Normal operation:**

- Uptime: > 99.9%
- Error rate: < 0.1%
- Avg response time: 300-800ms
- P95 response time: < 2s
- Submissions per day: 0-50 (adjust based on traffic)
- Cost per month: $0-5 (well within free tier)

**Status:** 🎯 Monitoring Complete!
