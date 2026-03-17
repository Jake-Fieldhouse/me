from google.oauth2 import service_account
from googleapiclient.discovery import build

SCOPES = ['https://www.googleapis.com/auth/tagmanager.edit.containers', 'https://www.googleapis.com/auth/tagmanager.publish', 'https://www.googleapis.com/auth/tagmanager.manage.users']
creds = service_account.Credentials.from_service_account_file('cloudflare/gtm-key.json', scopes=SCOPES)
service = build('tagmanager', 'v2', credentials=creds)

WORKSPACE_PATH = 'accounts/6340339764/containers/244162481/workspaces/2'

print("1. Creating 'All Pages' trigger...")
trigger_body = {
    "name": "Fire on All Pages (Auto)",
    "type": "pageview"
}
trigger = service.accounts().containers().workspaces().triggers().create(parent=WORKSPACE_PATH, body=trigger_body).execute()
trigger_id = trigger['triggerId']

print("2. Creating GA4 Tag...")
ga4_html = """<script async src="https://www.googletagmanager.com/gtag/js?id=G-S5QEQ38Y9M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-S5QEQ38Y9M', {
    'anonymize_ip': true,
    'transport_type': 'beacon'
  });
</script>"""

ga4_tag = {
    "name": "GA4 Base Configuration",
    "type": "html",
    "parameter": [
        {"type": "template", "key": "html", "value": ga4_html}
    ],
    "firingTriggerId": [trigger_id]
}
service.accounts().containers().workspaces().tags().create(parent=WORKSPACE_PATH, body=ga4_tag).execute()

print("3. Creating Microsoft Clarity Tag...")
clarity_html = """<script>
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vjco5wzg5x");
    window.clarity('set', 'gaId', 'G-S5QEQ38Y9M');
</script>"""

clarity_tag = {
    "name": "Microsoft Clarity (with GA4 Link)",
    "type": "html",
    "parameter": [
        {"type": "template", "key": "html", "value": clarity_html}
    ],
    "firingTriggerId": [trigger_id]
}
service.accounts().containers().workspaces().tags().create(parent=WORKSPACE_PATH, body=clarity_tag).execute()

print("4. Creating Version and Publishing...")
try:
    version = service.accounts().containers().workspaces().create_version(
        path=WORKSPACE_PATH, 
        body={"name": "Zero-Touch Analytics Deployment", "notes": "Automated deployment of GA4 and Clarity tags via Service Account API."}
    ).execute()
    
    version_path = version['containerVersion']['path']
    service.accounts().containers().versions().publish(path=version_path).execute()
    print("Deployment Successful! Workspace is live.")
except Exception as e:
    print(f"Failed to publish: {e}")
