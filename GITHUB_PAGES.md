# 🚀 Quick Start: Deploy to GitHub Pages

## Step 1: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click `Settings` → `Pages`
3. Under "Build and deployment", set Source to: **GitHub Actions**

## Step 2: Push Your Code

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

## Step 3: Wait for Deployment

1. Go to the `Actions` tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. When complete (green checkmark ✅), your site is live!

## Step 4: Access Your Site

Your site will be available at:
```
https://<your-github-username>.github.io/<repository-name>/
```

For example, if:
- Username: `trinhquocthinh`
- Repository: `Tournament`

Your URL will be:
```
https://trinhquocthinh.github.io/Tournament/
```

## 🔄 Future Updates

Just push to main branch:
```bash
git add .
git commit -m "Your update message"
git push origin main
```

The site will automatically rebuild and redeploy! 🎉

---

**Need help?** See the full [Deployment Guide](./DEPLOYMENT.md)
