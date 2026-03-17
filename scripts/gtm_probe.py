from google.oauth2 import service_account
from googleapiclient.discovery import build
import json

SCOPES = ['https://www.googleapis.com/auth/tagmanager.edit.containers', 'https://www.googleapis.com/auth/tagmanager.publish', 'https://www.googleapis.com/auth/tagmanager.manage.users']
creds = service_account.Credentials.from_service_account_file('cloudflare/gtm-key.json', scopes=SCOPES)
service = build('tagmanager', 'v2', credentials=creds)

accounts = service.accounts().list().execute()
for acc in accounts.get('account', []):
    print("Account:", acc['path'])
    conts = service.accounts().containers().list(parent=acc['path']).execute()
    for cont in conts.get('container', []):
        if cont.get('publicId') == 'GTM-TLZV3F9Q':
            print("Found container:", cont['path'])
            workspaces = service.accounts().containers().workspaces().list(parent=cont['path']).execute()
            for ws in workspaces.get('workspace', []):
                print(f"Workspace: {ws['name']} | ID: {ws['workspaceId']} | Path: {ws['path']}")
                
                # List triggers to see if All Pages exists
                triggers = service.accounts().containers().workspaces().triggers().list(parent=ws['path']).execute()
                print("Triggers:")
                for t in triggers.get('trigger', []):
                    print(t)
