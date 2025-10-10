import type { ImageLoaderProps } from 'next/image';

/**
 * Custom image loader for GitHub Pages deployment
 * Adds basePath to image sources when deployed
 */
export default function imageLoader({ src }: ImageLoaderProps) {
  // Get the base path from environment variable
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // If src already starts with http/https, return as is (external image)
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }

  // If src already includes basePath, return as is
  if (basePath && src.startsWith(basePath)) {
    return src;
  }

  // Add basePath to the image src
  const path = `${basePath}${src}`;

  // For unoptimized images, just return the path
  return path;
}

/**
 * Helper function to get the correct asset path with basePath
 * Use this for any public assets (images, fonts, etc.)
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // If no basePath or already includes it, return as is
  if (!basePath || cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  // Add basePath
  return `${basePath}${cleanPath}`;
}
