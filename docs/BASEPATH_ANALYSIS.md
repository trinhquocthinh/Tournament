# BasePath Issue Analysis and Solutions

## Current Situation

After building with `GITHUB_ACTIONS=true`, the HTML contains:

### JavaScript Files (✅ Correct)
```html
<script src="/Tournament/_next/static/chunks/polyfills.js"></script>
```
**Result:** `https://trinhquocthinh.github.io/Tournament/_next/static/chunks/polyfills.js` ✅

### Images (❌ Incorrect)
```html
<img src="/assets/images/logo.svg" />
```
**Result:** `https://trinhquocthinh.github.io/assets/images/logo.svg` ❌  
**Should be:** `https://trinhquocthinh.github.io/Tournament/assets/images/logo.svg`

## Why This Happens

1. **Next.js Script tags**: Automatically prefixed with `basePath` ✅
2. **Next.js Image component with `unoptimized: true`**: Does NOT prefix with `basePath` in static export ❌
3. **Public folder files**: Copied to `out/` but paths not adjusted ❌

## Solutions

### Option 1: Use Relative Paths (Simplest - Current Issue)
Change all image paths from `/assets/images/...` to `./assets/images/...` or just `assets/images/...`

**Pros:** Works immediately, no build changes needed  
**Cons:** Need to update all image references manually

### Option 2: Custom Image Component (Recommended)
Create a wrapper around Next.js Image that adds basePath automatically

### Option 3: Post-build Script
Run a script after build to modify all image paths in HTML files

### Option 4: Use CDN or Absolute URLs
Host images externally and use full URLs

## Recommended Solution: Custom Image Component

Let me implement this...
