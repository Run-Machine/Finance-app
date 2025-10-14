# Vallamkonda Finance System

A static, client-side app for managing family events: expenses, contributions, activities, and photos.

## Project structure
- `index.html` — main page
- `style.css` — styles
- `app.js` — logic (localStorage persistence)
- `netlify.toml` — Netlify config (root publish, SPA fallback, caching)

## Local preview
You can use any static server. Example with Python on Windows PowerShell:

```powershell
python -m http.server 8000
```

Then open http://localhost:8000

## Deploy: GitHub + Netlify (recommended)

### 1) Initialize Git and commit
Run these in the project root (this folder):

```powershell
# Initialize repo
git init

# Add all files and commit
git add .
git commit -m "chore: initial commit"
```

If Git asks for your identity, set it (one-time):
```powershell
git config user.name "Your Name"
git config user.email "you@example.com"
```

### 2) Create a GitHub repository
- Go to https://github.com/new
- Name it (e.g., `vallamkonda-finance-app`), keep it Public or Private
- Do NOT add a README (we already have one)
- Create the repo, then copy the provided remote URL

Add the remote and push:
```powershell
# Replace with your repo URL
$REPO = "https://github.com/<you>/vallamkonda-finance-app.git"

git remote add origin $REPO
# Create main branch if needed
git branch -M main
# Push
git push -u origin main
```

### 3) Deploy to Netlify
Option A — via Netlify UI (easiest)
1. Go to https://app.netlify.com/ and log in
2. New site from Git → GitHub → pick your repo
3. Build command: (leave empty)
4. Publish directory: `.` (a single dot)
5. Deploy

Option B — via Netlify CLI (optional)
```powershell
# Install once (requires Node.js)
npm install -g netlify-cli

# Login (opens browser)
netlify login

# Deploy (choose "Create & configure a new site")
netlify deploy --prod --dir .
```

### 4) Post-deploy
- Netlify will assign a URL like `https://<random-name>.netlify.app` — customize it under Site settings → Domain management
- If you change only HTML/CSS/JS, just push to `main` — Netlify auto-deploys

### 5) Verify cross-device sync
After deploying:
1. Open the Netlify URL on your laptop browser
2. Toggle Admin and add/edit an event or expense
3. Open the same URL on your phone (wait 2-3 seconds for background sync)
4. Refresh the phone page — you should see the changes from your laptop
5. Add something on phone → it should appear on laptop after refresh

The app uses Netlify Functions + Blobs for cross-device data persistence. Changes on any device are automatically synced to the server and reflected on other devices.

## Notes
- `netlify.toml` includes a catch-all redirect to `/index.html` so client-side routing (if any) works. The app mainly uses hash links, so it's safe.
- Assets are cached aggressively; HTML is not cached to show updates immediately.
- Cross-device sync: Data is stored in Netlify Blobs with automatic background sync on page load and debounced write after changes.
- Offline support: The app works fully offline; remote sync will resume when connection is restored.

## Troubleshooting
**Problem: Changes on one device don't appear on another**
- Ensure both devices are using the same Netlify URL (not localhost)
- Wait 2-3 seconds after making changes, then refresh the other device
- Check browser console for sync messages (✓ Data synced to remote storage)
- Verify Netlify Functions deployed: visit `https://your-site.netlify.app/.netlify/functions/get-data`

**Problem: Admin password not working**
- Default password: `vallamkonda@2025`
- You can change it in Admin Panel → Settings after logging in
