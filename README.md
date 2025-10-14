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

## Notes
- `netlify.toml` includes a catch-all redirect to `/index.html` so client-side routing (if any) works. The app mainly uses hash links, so it’s safe.
- Assets are cached aggressively; HTML is not cached to show updates immediately.
