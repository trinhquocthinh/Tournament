# GitHub Pages Public Files Fix

## Problem
After deploying to GitHub Pages, files in the `public` folder (like `manifest.json`, `favicon.svg`, etc.) were returning 404 errors when accessed directly.

### Example of the issue:
- ❌ `https://trinhquocthinh.github.io/manifest.json` → 404 Not Found
- ✅ `https://trinhquocthinh.github.io/Tournament/manifest.json` → Works

## Root Cause
When deploying to GitHub Pages with a repository name (not a user/org page), Next.js uses a `basePath` configuration. This prepends the repository name to all routes and assets.

However, the Next.js Metadata API's `manifest` property doesn't automatically apply the `basePath`, causing the manifest link to be generated without the `/Tournament` prefix.

## Solution

### 1. Updated `next.config.js`
- Set repository name default to `'Tournament'` (capital T to match GitHub repo)
- Exposed `basePath` as `NEXT_PUBLIC_BASE_PATH` environment variable
- Configured `output: 'export'` for static export
- Set `images.unoptimized: true` for GitHub Pages compatibility

### 2. Updated `src/config/seo.ts`
- Removed `manifest: '/manifest.json'` from metadata (it wasn't applying basePath correctly)
- Updated default site URL to GitHub Pages URL

### 3. Updated `src/app/layout.tsx`
- Added manual `<link rel="manifest">` tag with dynamic basePath
- Used `process.env.NEXT_PUBLIC_BASE_PATH` to construct the correct path
- This ensures the manifest link includes `/Tournament` prefix in production

### 4. Added `.nojekyll` file
- Created `public/.nojekyll` to prevent GitHub Pages from ignoring `_next` folder

## Files Modified

```
next.config.js           - Added basePath configuration
src/config/seo.ts        - Removed manifest from metadata, updated default URL
src/app/layout.tsx       - Added manual manifest link with basePath
public/.nojekyll         - Prevent Jekyll processing
```

## How It Works

### Local Development (no basePath)
```html
<link rel="manifest" href="/manifest.json" />
```
Manifest accessible at: `http://localhost:3000/manifest.json`

### GitHub Pages (with basePath = /Tournament)
```html
<link rel="manifest" href="/Tournament/manifest.json" />
```
Manifest accessible at: `https://trinhquocthinh.github.io/Tournament/manifest.json`

## Verification

After deploying, verify these URLs work:

- ✅ `https://trinhquocthinh.github.io/Tournament/` - Home page
- ✅ `https://trinhquocthinh.github.io/Tournament/manifest.json` - PWA manifest
- ✅ `https://trinhquocthinh.github.io/Tournament/favicon.svg` - Favicon
- ✅ `https://trinhquocthinh.github.io/Tournament/robots.txt` - Robots file
- ✅ `https://trinhquocthinh.github.io/Tournament/sitemap.xml` - Sitemap
- ✅ `https://trinhquocthinh.github.io/Tournament/assets/images/logo.svg` - Images

## Important Notes

1. **All public files are accessible via the repository name prefix**
   - Use `/Tournament/filename` not `/filename`

2. **Next.js automatically handles basePath for:**
   - Page routes
   - Image components
   - Link components
   - Most metadata fields

3. **Manual basePath handling needed for:**
   - Custom `<link>` tags in `<head>`
   - External references to public files
   - Meta tags with URLs (already handled via metadataBase)

## Testing Locally with BasePath

To test locally with the basePath enabled:

```bash
GITHUB_ACTIONS=true GITHUB_REPOSITORY=trinhquocthinh/Tournament yarn build
yarn start
```

Then visit: `http://localhost:3000/Tournament/`

## Deploy to GitHub Pages

Just push to main branch:

```bash
git add .
git commit -m "Fix public files basePath for GitHub Pages"
git push origin main
```

GitHub Actions will automatically build and deploy with the correct basePath.
