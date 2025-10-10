# GitHub Pages Deployment Guide

This guide will help you deploy your Tournament website to GitHub Pages.

## 🚀 Automatic Deployment (Recommended)

### Prerequisites
1. Your code is pushed to a GitHub repository
2. You have admin access to the repository

### Setup Steps

1. **Enable GitHub Pages in your repository:**
   - Go to your GitHub repository
   - Navigate to `Settings` → `Pages`
   - Under "Build and deployment":
     - Source: Select `GitHub Actions`

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the `Actions` tab in your GitHub repository
   - Watch the deployment workflow run
   - Once complete, your site will be live at:
     ```
     https://<your-username>.github.io/<repository-name>/
     ```

### How it works
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) runs automatically on every push to `main`
- It builds your Next.js site as a static export
- Deploys the built files to GitHub Pages
- Updates your live site

## 📦 Manual Deployment (Alternative)

If you prefer to deploy manually:

### One-time Setup
```bash
# Create gh-pages branch
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initialize gh-pages branch"
git push origin gh-pages
git checkout main
```

### Deploy Steps
```bash
# Build and export the site
yarn export

# Deploy to GitHub Pages
yarn deploy
```

Or manually:
```bash
# Build the site
yarn build

# The static files will be in the 'out' folder
# You can then manually upload these to GitHub Pages
```

## 🔧 Configuration Files

### next.config.js
- `output: 'export'` - Enables static HTML export
- `basePath` - Sets the base path for GitHub Pages (repository name)
- `assetPrefix` - Ensures assets load correctly
- `images.unoptimized: true` - Required for static export

### .nojekyll
- Prevents GitHub Pages from ignoring files starting with `_`
- Located in `public/` folder (copied to `out/` during build)

### GitHub Actions Workflow
- Located at `.github/workflows/deploy.yml`
- Triggers on push to `main` branch
- Automatically builds and deploys

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. Create a file `public/CNAME` with your domain:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add CNAME record pointing to `<username>.github.io`
   - Or A records to GitHub Pages IPs

3. Enable HTTPS in repository settings

## 🐛 Troubleshooting

### Build fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Run `yarn build` locally to test

### Assets not loading
- Verify `basePath` in `next.config.js`
- Check browser console for 404 errors
- Ensure paths don't have hardcoded `/` prefix

### Images not showing
- Make sure images are in `public/` folder
- Use `Image` component from `next/image`
- Verify `images.unoptimized: true` is set

### 404 on routes
- GitHub Pages doesn't support SPA routing
- All routes are exported as static HTML during build
- Dynamic routes need `generateStaticParams`

## 📝 Environment Variables

For GitHub Actions deployment, set environment variables in:
- Repository Settings → Secrets and variables → Actions

Example:
```yaml
- name: Build with Next.js
  env:
    NEXT_PUBLIC_API_URL: ${{ secrets.API_URL }}
  run: yarn build
```

## ✅ Verification

After deployment, verify:
- [ ] Site loads at GitHub Pages URL
- [ ] All pages are accessible
- [ ] Images and assets load correctly
- [ ] Links work properly
- [ ] CSS styles are applied
- [ ] JavaScript functionality works

## 🔄 Updates

To update your live site:
```bash
git add .
git commit -m "Update site"
git push origin main
```

The GitHub Actions workflow will automatically rebuild and redeploy.

## 📚 Additional Resources

- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
