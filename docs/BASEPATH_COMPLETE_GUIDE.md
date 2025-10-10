# ✅ Complete BasePath Solution for GitHub Pages

## Understanding How BasePath Works

When you deploy to GitHub Pages with repository name "Tournament", your site is at:
```
https://trinhquocthinh.github.io/Tournament/
```

Next.js `basePath` and `assetPrefix` configuration handles this automatically!

## Current Configuration (Already Correct! ✅)

```javascript
// next.config.js
const basePath = isGithubActions ? `/${repoName}` : '';

const nextConfig = {
  basePath,           // ✅ Adds /Tournament to all routes
  assetPrefix: basePath, // ✅ Adds /Tournament to all _next assets
  output: 'export',   // ✅ Static export for GitHub Pages
  // ...
};
```

## What Gets Prefixed Automatically

### ✅ Automatically Prefixed (No Action Needed)

1. **All `_next` static files**
   - JavaScript bundles
   - CSS files  
   - Build artifacts
   ```html
   <script src="/Tournament/_next/static/chunks/main.js"></script>
   ```

2. **All Next.js Link components**
   ```tsx
   <Link href="/about">About</Link>
   // Becomes: /Tournament/about
   ```

3. **All route navigations**
   ```tsx
   router.push('/contact')
   // Becomes: /Tournament/contact
   ```

## What Needs Manual Handling

### ❌ NOT Automatically Prefixed

1. **`<Image>` component `src` with `unoptimized: true`**
   ```tsx
   <Image src="/assets/images/logo.svg" />
   // In HTML: src="/assets/images/logo.svg" ❌
   // Should be: src="/Tournament/assets/images/logo.svg"
   ```

2. **Direct `<link>` tags in `<head>`**
   ```tsx
   <link rel="manifest" href="/manifest.json" />
   // ❌ Missing /Tournament prefix
   ```

3. **Regular `<img>` tags**
   ```tsx
   <img src="/favicon.svg" />
   // ❌ Missing /Tournament prefix
   ```

## The Real Solution

### Option 1: GitHub Pages Serves Files Correctly Anyway! (Current Behavior)

**Important Discovery:** When Next.js copies files from `public/` to `out/`, they maintain the same structure. When you deploy to GitHub Pages, the files are actually at the correct location!

**Example:**
- Local file: `public/assets/images/logo.svg`
- After build: `out/assets/images/logo.svg`
- Deployed to: `https://trinhquocthinh.github.io/Tournament/assets/images/logo.svg`

When the HTML has:
```html
<img src="/assets/images/logo.svg" />
```

The browser makes the request relative to the page's base URL:
- Page URL: `https://trinhquocthinh.github.io/Tournament/index.html`
- Image request: `/assets/images/logo.svg`
- **Resolved to**: `https://trinhquocthinh.github.io/assets/images/logo.svg` ❌

This is the problem! The `/` makes it absolute from domain root.

### Option 2: Use Relative Paths (BEST SOLUTION)

Change image paths to be relative (remove leading `/`):

```tsx
// ❌ Before (absolute path)
<Image src="/assets/images/logo.svg" width={110} height={53} alt="Logo" />

// ✅ After (relative path)  
<Image src="assets/images/logo.svg" width={110} height={53} alt="Logo" />
```

**This works because:**
- Page at: `/Tournament/index.html`
- Image src: `assets/images/logo.svg` (relative)
- Resolves to: `/Tournament/assets/images/logo.svg` ✅

### Option 3: Use `getAssetPath` Helper (RECOMMENDED)

Use the helper function for all public assets:

```tsx
import { getAssetPath } from '@/lib/imageLoader';

<Image 
  src={getAssetPath('/assets/images/logo.svg')} 
  width={110} 
  height={53} 
  alt="Logo" 
/>
```

The helper automatically adds the basePath when deployed.

## What You Should Do

### Immediate Fix (Recommended)

Update all Image components to use relative paths or the `getAssetPath` helper:

1. **Find all Image components:**
   ```bash
   grep -r "src=\"/" src/components/ --include="*.tsx"
   ```

2. **Remove leading slash OR use getAssetPath:**
   ```tsx
   // Option A: Remove leading slash
   src="assets/images/logo.svg"
   
   // Option B: Use helper
   src={getAssetPath('/assets/images/logo.svg')}
   ```

3. **Rebuild and test:**
   ```bash
   GITHUB_ACTIONS=true GITHUB_REPOSITORY=trinhquocthinh/Tournament yarn build
   ```

## Testing Locally with BasePath

To test the site with basePath locally:

```bash
# Build with GitHub Actions environment
GITHUB_ACTIONS=true GITHUB_REPOSITORY=trinhquocthinh/Tournament yarn build

# Serve the out directory
npx serve out

# Visit: http://localhost:3000/Tournament/
```

## Files That Are Working Correctly

✅ JavaScript files (auto-prefixed by assetPrefix)  
✅ CSS files (auto-prefixed by assetPrefix)  
✅ Page routes (auto-prefixed by basePath)  
✅ Link components (auto-prefixed by basePath)  
✅ manifest.json (manually fixed in layout.tsx)  

## Files That Need Attention

⚠️ All `<Image>` components with absolute paths (`/assets/...`)  
⚠️ Any custom `<img>` tags  
⚠️ Any `<link>` tags pointing to public files  

## Next Steps

1. Run find/replace to update all image paths
2. Or use the `getAssetPath` helper throughout
3. Rebuild and verify paths in `out/index.html`
4. Deploy to GitHub Pages
5. Test all images load correctly

Would you like me to automatically update all the Image components in your codebase to use the correct paths?
