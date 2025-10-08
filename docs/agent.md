# Agent Context Document

> **Purpose**: This document provides a comprehensive overview of the project structure, architecture, conventions, and best practices. It serves as context for AI agents, new developers, and documentation purposes.

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Architecture](#project-architecture)
4. [Directory Structure](#directory-structure)
5. [Code Conventions](#code-conventions)
6. [Component Patterns](#component-patterns)
7. [Styling System](#styling-system)
8. [State Management](#state-management)
9. [Type System](#type-system)
10. [SEO & Performance](#seo--performance)
11. [Security Practices](#security-practices)
12. [Development Workflow](#development-workflow)
13. [Build & Deployment](#build--deployment)
14. [Testing Strategy](#testing-strategy)
15. [Common Tasks](#common-tasks)

---

## 📖 Project Overview

### Project Type

Modern web application built with Next.js 14 (App Router)

### Domain

Digital agency website showcasing services, projects, blog, and contact information

### Key Features

- Server-Side Rendering (SSR) for optimal performance
- Dynamic routing for blog posts and project pages
- Responsive design with mobile-first approach
- SEO optimized with metadata API
- **Image optimization** with modern formats (AVIF/WebP)
- **Form validation** with React Hook Form + Zod
- **Comprehensive security headers**
- Automated sitemap and robots.txt generation

### Target Audience

- Potential clients seeking digital services
- Blog readers interested in tech/design content
- Businesses looking for development partners

---

## 🛠 Technology Stack

### Core Framework

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling

- **SCSS/Sass** - CSS preprocessor
- **CSS Modules** - Component-scoped styling
- **Responsive Design** - Mobile-first approach

### Icons & UI

- **Ionicons** - Icon library

### Forms & Validation

- **React Hook Form** - Performant form library
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation resolvers

### SEO & Analytics

- **next-seo** - SEO metadata management
- **next-sitemap** - Automatic sitemap generation
- **Sharp** - Image optimization

### Development Tools

- **ESLint** - Code linting with multiple plugins
- **Prettier** - Code formatting
- **TypeScript Compiler** - Type checking
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

### Build & Analysis

- **@next/bundle-analyzer** - Bundle size analysis
- **SWC** - Fast compilation and minification

---

## 🏗 Project Architecture

### Architectural Pattern

**Feature-based architecture with component composition**

### Key Principles

1. **Separation of Concerns** - Clear boundaries between UI, logic, and data
2. **Component Reusability** - Small, focused components
3. **Type Safety** - TypeScript throughout
4. **Performance First** - Optimize for Core Web Vitals
5. **Accessibility** - WCAG 2.1 AA compliance
6. **Security** - Comprehensive security headers and best practices

### Data Flow

```
User Request → Next.js App Router → Server Component (SSR)
                                   ↓
                            Data Fetching (if needed)
                                   ↓
                            Client Component (interactive)
                                   ↓
                            React Hooks (state/effects)
                                   ↓
                            UI Rendering
```

### Rendering Strategy

- **Server Components** - Default for static content
- **Client Components** - Interactive features (marked with 'use client')
- **Static Generation** - For blog posts and project pages
- **Dynamic Rendering** - For pages with user-specific content

---

## 📁 Directory Structure

### Root Level

```
project-root/
├── public/                 # Static assets served directly
│   ├── assets/
│   │   └── images/        # Images, logos, icons
│   ├── favicon.svg
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # Search engine directives
│   └── sitemap.xml        # Auto-generated sitemap
├── src/                   # Source code
│   ├── app/              # Next.js 14 App Router
│   ├── components/       # React components
│   ├── config/           # Configuration files
│   ├── data/             # Static data/content
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # Global styles and utilities
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
├── docs/                 # Documentation
└── scripts/              # Build/deployment scripts
```

### Detailed Source Structure

```
src/
├── app/                           # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # Dynamic robots.txt
│   ├── sitemap.ts                # Dynamic sitemap
│   ├── [route]/                  # Feature routes
│   │   ├── page.tsx             # Route page
│   │   └── layout.tsx           # Route layout (optional)
│   └── [route]/[slug]/           # Dynamic routes
│       ├── page.tsx             # Dynamic page
│       └── not-found.tsx        # 404 page
│
├── components/                    # React components
│   ├── [Component].tsx           # Component logic
│   ├── [Component].scss          # Component styles
│   ├── index.ts                  # Component exports
│   └── sections/                 # Page sections
│       └── [feature]/            # Feature-specific sections
│           ├── [Section].tsx
│           └── [Section].scss
│
├── config/                        # Application configuration
│   └── seo.ts                    # SEO metadata config
│
├── data/                          # Static data
│   ├── blog.ts                   # Blog post data
│   └── projects.ts               # Project data
│
├── hooks/                         # Custom React hooks
│   ├── useScroll.ts              # Scroll tracking
│   ├── useAccordion.ts           # Accordion state
│   └── [useCustomHook].ts
│
├── styles/                        # Global styles
│   ├── globals.scss              # Global styles
│   ├── _variables.scss           # SCSS variables
│   └── _mixins.scss              # SCSS mixins
│
├── types/                         # TypeScript definitions
│   ├── index.ts                  # Main type definitions
│   └── [module].d.ts             # Module declarations
│
└── utils/                         # Utility functions
    └── [utility].ts              # Helper functions
```

### File Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`)
- **Styles**: PascalCase matching component (e.g., `Header.scss`)
- **Utilities**: camelCase (e.g., `motion.ts`)
- **Hooks**: camelCase with `use` prefix (e.g., `useScroll.ts`)
- **Types**: camelCase (e.g., `index.ts`)
- **Config**: camelCase (e.g., `seo.ts`)

---

## 📝 Code Conventions

### TypeScript Standards

#### Import Organization

```typescript
// 1. Type imports (separated)
import type { Metadata } from 'next';
import type { NavLink } from '@/types';

// 2. External dependencies
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 3. Internal imports (path aliased)
import { useScroll } from '@/hooks/useScroll';
import Header from '@/components/Header';

// 4. Styles (last)
import './Component.scss';
```

#### Type Definitions

```typescript
// Prefer interfaces for objects
export interface User {
  id: string;
  name: string;
  email: string;
}

// Use type for unions, intersections
export type Status = 'pending' | 'active' | 'inactive';

// Export types from centralized location
// src/types/index.ts
```

#### Function Declarations

```typescript
// Named exports preferred
export function MyComponent({ prop }: Props) {
  // Component logic
}

// Default export for pages
export default function Page() {
  return <div>Page content</div>;
}

// Arrow functions for utilities
export const formatDate = (date: string): string => {
  // Logic
};
```

### React Conventions

#### Component Structure

```typescript
'use client'; // Only if client component

import type { ComponentProps } from '@/types';
import { useState } from 'react';
import './Component.scss';

export default function Component({ prop1, prop2 }: ComponentProps) {
  // 1. Hooks
  const [state, setState] = useState();

  // 2. Derived state
  const derivedValue = useMemo(() => {}, []);

  // 3. Effects
  useEffect(() => {}, []);

  // 4. Event handlers
  const handleClick = () => {};

  // 5. Render helpers
  const renderItem = () => {};

  // 6. Return JSX
  return (
    <div className="component">
      {/* Content */}
    </div>
  );
}
```

#### Props Patterns

```typescript
// Inline type (small components)
function Button({ label, onClick }: { label: string; onClick: () => void }) {
  return <button onClick={onClick}>{label}</button>;
}

// Interface (complex components)
interface CardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

function Card({ title, description, image, onClick }: CardProps) {
  // Component logic
}
```

### SCSS Conventions

#### File Structure

```scss
// Import variables and mixins at the top of each SCSS file
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

// Component styles (BEM-like naming)
.component {
  // Base styles (mobile-first)
  padding: 20px;
  background-color: $white;
  border-radius: $radius-16;
  transition: $transition-1;

  &__element {
    // Element styles
    color: $charcoal;
    font-size: $fs-5;
  }

  &__header {
    margin-bottom: 16px;
  }

  &--modifier {
    // Modifier styles
    background-color: $violet-blue-crayola;
  }

  // Responsive - mobile-first approach
  @include mobile-up {
    padding: 24px;
  }

  @include tablet-up {
    padding: 32px;
  }

  @include laptop-up {
    padding: 40px;
  }

  @include desktop-up {
    padding: 48px;
  }
}
```

#### Using SCSS Variables (Not CSS Custom Properties)

```scss
// ✅ CORRECT: Use SCSS variables with $
$primary-color: hsla(234, 50%, 64%, 1);
$spacing-unit: 8px;
$border-radius: 12px;

.card {
  background: $primary-color;
  padding: $spacing-unit * 2;
  border-radius: $border-radius;
}

// ❌ INCORRECT: Do NOT use CSS custom properties with --
// --primary-color: hsla(234, 50%, 64%, 1);
```

#### Class Naming

```scss
// Block
.card {
}

// Element (double underscore)
.card__header {
}
.card__body {
}
.card__footer {
}

// Modifier (double dash)
.card--featured {
}
.card--large {
}

// State (is-, has-)
.card.is-active {
}
.card.has-image {
}
```

---

## 🎨 Component Patterns

### Page Component Pattern

```typescript
// src/app/[route]/page.tsx
import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import HeroSection from '@/components/sections/feature/HeroSection';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

export default function Page() {
  return (
    <Layout>
      <article>
        <HeroSection />
        {/* Other sections */}
      </article>
    </Layout>
  );
}
```

### Section Component Pattern

```typescript
// src/components/sections/feature/HeroSection.tsx
'use client';

import './HeroSection.scss';

export default function HeroSection() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="container">
        <h1>Hero Title</h1>
        {/* Section content */}
      </div>
    </section>
  );
}
```

### Custom Hook Pattern

```typescript
// src/hooks/useCustomHook.ts
'use client';

import { useState, useEffect } from 'react';

export const useCustomHook = (param: string) => {
  const [state, setState] = useState<Type>(initialValue);

  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup
    };
  }, [param]);

  return { state, setState };
};
```

### Layout Component Pattern

```typescript
// src/components/Layout.tsx
'use client';

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import type { LayoutProps } from '@/types';

export default function Layout({ children }: LayoutProps) {
  useEffect(() => {
    // Layout-level effects
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

---

## 🎨 Styling System

### SCSS Architecture

#### Variables (`_variables.scss`)

```scss
// Colors
$violet-blue-crayola: hsla(234, 50%, 64%, 1);
$dark-cornflower-blue_a7: hsla(214, 88%, 27%, 0.07);
$white: hsla(0, 0%, 100%, 1);
$white_a3: hsla(0, 0%, 100%, 0.03);
$white_a8: hsla(0, 0%, 100%, 0.08);
$white_a12: hsla(0, 0%, 100%, 0.12);
$white_a70: hsla(0, 0%, 100%, 0.7);
$cultured: hsla(220, 20%, 97%, 1);
$lavender-web: hsla(233, 52%, 94%, 1);
$cadet-blue-crayola: hsla(220, 12%, 70%, 1);
$cadet-blue-crayola_a20: hsla(222, 23%, 71%, 0.2);
$charcoal: hsla(218, 22%, 26%, 1);
$raisin-black: hsla(216, 14%, 14%, 1);
$light-gray: hsla(0, 0%, 79%, 1);
$blue-crayola: hsla(219, 72%, 56%, 1);
$pink: hsla(332, 86%, 67%, 1);
$oxford-blue: hsla(222, 45%, 18%, 1);
$black-coral: hsla(220, 12%, 43%, 1);

// Typography
$ff-manrope: 'Manrope', sans-serif;

// Font Sizes
$fs-1: calc(2.7rem + 1.38vw);
$fs-2: calc(2.6rem + 0.66vw);
$fs-3: 2.2rem;
$fs-4: 1.9rem;
$fs-5: 1.8rem;
$fs-6: 1.7rem;
$fs-7: 1.5rem;
$fs-8: 1.4rem;

// Font Weights
$fw-700: 700;

// Spacing
$section-padding: 120px;

// Box Shadow
$shadow-1: 0 0 20px hsla(216, 14%, 14%, 0.05);
$shadow-2:
  0 0 0 0.05rem hsla(214, 88%, 27%, 0.08),
  0 0 1.25rem hsla(216, 14%, 14%, 0.06);
$shadow-3: 0 0 1.25rem hsla(216, 14%, 14%, 0.04);

// Border Radius
$radius-circle: 50%;
$radius-pill: 100px;
$radius-16: 16px;
$radius-24: 24px;
$radius-32: 32px;
$radius-10: 10px;
$radius-8: 8px;
$radius-6: 6px;

// Transitions
$transition-1: 0.25s ease;
$transition-2: 0.5s ease;
$transition-3: 0.3s ease-in-out;
```

#### Mixins (`_mixins.scss`)

```scss
// Breakpoints
$mobile: 574px;
$tablet: 767px;
$laptop: 991px;
$desktop: 1199px;
$xl-desktop: 1399px;

// Mixins for responsive design
@mixin mobile-up {
  @media (min-width: #{$mobile + 1px}) {
    @content;
  }
}

@mixin tablet-up {
  @media (min-width: #{$tablet + 1px}) {
    @content;
  }
}

@mixin laptop-up {
  @media (min-width: #{$laptop + 1px}) {
    @content;
  }
}

@mixin desktop-up {
  @media (min-width: #{$desktop + 1px}) {
    @content;
  }
}

@mixin xl-desktop-up {
  @media (min-width: #{$xl-desktop + 1px}) {
    @content;
  }
}

// Button mixin
@mixin btn-style($bg-color: $violet-blue-crayola, $text-color: $white) {
  background-color: $bg-color;
  color: $text-color;
  font-weight: $fw-700;
  padding: 14px 70px;
  transition: $transition-1;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border-radius: $radius-pill;

  &:hover {
    background-color: lighten($bg-color, 10%);
    transform: translateY(-3px);
    box-shadow: $shadow-1;
  }
}

// Common mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin absolute-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@mixin img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@mixin bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@mixin button-reset {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
}

@mixin section-padding {
  padding-block: $section-padding;
}

@mixin container {
  padding-inline: 16px;
}

@mixin grid-list {
  display: grid;
  gap: 30px;
}

@mixin card-transition {
  transition: $transition-3;

  &:hover {
    transform: translateY(-6px);
  }
}

@mixin visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Responsive Design

#### Breakpoints

- **Mobile**: ≤ 574px
- **Mobile Up**: ≥ 575px
- **Tablet Up**: ≥ 768px
- **Laptop Up**: ≥ 992px
- **Desktop Up**: ≥ 1200px
- **XL Desktop Up**: ≥ 1400px

#### Mobile-First Approach

```scss
.component {
  // Mobile styles (base - default for all devices)
  padding: 16px;
  font-size: 14px;

  @include mobile-up {
    // Mobile up overrides (≥ 575px)
    padding: 18px;
  }

  @include tablet-up {
    // Tablet overrides (≥ 768px)
    padding: 24px;
    font-size: 16px;
  }

  @include laptop-up {
    // Laptop overrides (≥ 992px)
    padding: 28px;
  }

  @include desktop-up {
    // Desktop overrides (≥ 1200px)
    padding: 32px;
    font-size: 18px;
  }

  @include xl-desktop-up {
    // Extra large desktop overrides (≥ 1400px)
    padding: 40px;
  }
}
```

#### SCSS Variables Usage

```scss
// Always use $ prefix for SCSS variables
$primary-color: hsla(234, 50%, 64%, 1);
$font-size: 16px;
$spacing: 20px;

// NOT CSS custom properties (no --)
// DO NOT use: --primary-color
// DO use: $primary-color

.element {
  color: $primary-color;
  font-size: $font-size;
  margin: $spacing;
}
```

---

## 🔄 State Management

### State Management Strategy

**Local state with React hooks** - No global state library needed for this project

### State Patterns

#### Component State

```typescript
const [isOpen, setIsOpen] = useState(false);
const [data, setData] = useState<Type[]>([]);
```

#### Derived State

```typescript
const filteredItems = useMemo(() => {
  return items.filter(item => item.active);
}, [items]);
```

#### Side Effects

```typescript
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
```

#### Custom Hooks for Shared Logic

```typescript
// src/hooks/useScroll.ts
export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsAtTop(currentScrollY <= 100);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isAtTop };
};
```

---

## 📘 Type System

### Type Organization

#### Centralized Types (`src/types/index.ts`)

```typescript
// Navigation
export interface NavLink {
  href: string;
  label: string;
  isActive?: boolean;
}

// Content
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
}

// Forms
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Components
export interface LayoutProps {
  children: React.ReactNode;
}
```

#### Module Declarations (`src/types/[module].d.ts`)

```typescript
// ion-icon.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': {
      name?: string;
      class?: string;
    };
  }
}
```

### Type Patterns

#### Props Types

```typescript
// Inline for simple components
function Button({ label }: { label: string }) {}

// Interface for complex components
interface CardProps {
  title: string;
  description?: string;
  onClick?: () => void;
}
```

#### Return Types

```typescript
// Inferred (preferred)
const getUser = () => {
  return { id: '1', name: 'John' };
};

// Explicit (when needed)
const getUser = (): User => {
  return { id: '1', name: 'John' };
};
```

---

## 🎯 SEO & Performance

### SEO Configuration

#### Centralized Config (`src/config/seo.ts`)

```typescript
export const siteConfig = {
  name: 'Site Name',
  description: 'Site description',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com',
  ogImage: '/assets/images/og-image.jpg',
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    /* ... */
  },
  twitter: {
    /* ... */
  },
};
```

#### Page Metadata

```typescript
// src/app/[route]/page.tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    images: ['/path/to/image.jpg'],
  },
};
```

#### Dynamic Sitemap

```typescript
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // ... more URLs
  ];
}
```

### Performance Optimization

#### Image Optimization

```typescript
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={1200}
  height={630}
  priority // Above-fold images
  quality={85}
  placeholder="blur" // Optional blur-up effect
/>
```

#### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  {
    loading: () => <LoadingSpinner />,
    ssr: false, // Disable SSR if not needed
  }
);
```

#### Font Optimization

```typescript
// src/app/layout.tsx
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preconnect"
  href="https://fonts.gstatic.com"
  crossOrigin=""
/>
<link
  href="https://fonts.googleapis.com/css2?family=Font+Name:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

---

## 🔒 Security Practices

### Security Headers (`next.config.js`)

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline'",
        },
        // ... more headers
      ],
    },
  ];
}
```

### Input Validation

```typescript
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string().min(2, 'Name too short'),
});

type FormData = z.infer<typeof schema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // Handle validated data
  };
}
```

### Environment Variables

```bash
# .env.local (never commit)
NEXT_PUBLIC_SITE_URL=https://example.com
API_SECRET_KEY=secret_key_here

# Access in code
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL; // Client-side
const apiKey = process.env.API_SECRET_KEY; // Server-side only
```

---

## 🔧 Development Workflow

### Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "lint:fix": "next lint --fix",
  "lint:strict": "next lint --max-warnings 0",
  "type-check": "tsc --noEmit",
  "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
  "format:check": "prettier --check \"src/**/*.{js,jsx,ts,tsx,json,css,scss,md}\"",
  "analyze": "cross-env ANALYZE=true next build"
}
```

### Git Workflow

#### Commit Conventions

```bash
# Format: <type>(<scope>): <subject>

feat(blog): add blog post detail page
fix(header): resolve mobile menu toggle issue
docs(readme): update installation instructions
style(footer): adjust spacing on mobile
refactor(hooks): simplify useScroll implementation
perf(images): optimize hero image loading
test(forms): add contact form validation tests
chore(deps): update dependencies
```

#### Pre-commit Hooks (Husky + lint-staged)

```json
// package.json
{
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix --quiet", "prettier --write"],
    "src/**/*.{json,css,scss,md}": ["prettier --write"]
  }
}
```

### Code Quality Checklist

- [ ] TypeScript types defined
- [ ] ESLint passes (`yarn lint`)
- [ ] Prettier formatted (`yarn format`)
- [ ] Type check passes (`yarn type-check`)
- [ ] Component is responsive
- [ ] Accessibility attributes added
- [ ] Images optimized
- [ ] No console.logs in production code

---

## 🚀 Build & Deployment

### Build Configuration

#### Next.js Config (`next.config.js`)

```javascript
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  swcMinify: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // ... security headers, etc.
};
```

#### TypeScript Config (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "strict": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  }
}
```

### Deployment Platforms

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

#### Environment Variables

```bash
# Production
NEXT_PUBLIC_SITE_URL=https://production.com
NEXT_PUBLIC_GA_TRACKING_ID=GA-XXXXX

# Staging
NEXT_PUBLIC_SITE_URL=https://staging.com
```

### Build Optimization

#### Bundle Analysis

```bash
yarn analyze
```

#### Performance Checklist

- [ ] Images in AVIF/WebP format
- [ ] Unused dependencies removed
- [ ] Code splitting implemented
- [ ] Critical CSS inlined
- [ ] Third-party scripts optimized
- [ ] Bundle size < 200KB (initial)
- [ ] Lighthouse score > 90

---

## 🧪 Testing Strategy

### Testing Levels

#### Unit Testing (Recommended: Jest + React Testing Library)

```typescript
// Component.test.tsx
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

#### Integration Testing

```typescript
// Form.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Form', () => {
  it('submits with valid data', async () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });

    fireEvent.click(screen.getByText('Submit'));

    // Assert submission
  });
});
```

#### E2E Testing (Recommended: Playwright)

```typescript
// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toContainText('Welcome');
});
```

### Manual Testing Checklist

- [ ] All pages render correctly
- [ ] Forms validate properly
- [ ] Navigation works on all devices
- [ ] Images load and display correctly
- [ ] No console errors
- [ ] Accessibility with screen reader
- [ ] Cross-browser compatibility

---

## 📋 Common Tasks

### Adding a New Page

1. **Create page file**

```typescript
// src/app/new-page/page.tsx
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'New Page',
  description: 'Description',
};

export default function NewPage() {
  return (
    <Layout>
      <article>
        <h1>New Page</h1>
      </article>
    </Layout>
  );
}
```

2. **Add to navigation**

```typescript
// src/components/Header.tsx
const navLinks = [
  // ...
  { href: '/new-page', label: 'New Page' },
];
```

3. **Add to sitemap**

```typescript
// src/app/sitemap.ts
export default function sitemap() {
  return [
    // ...
    {
      url: `${baseUrl}/new-page`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
```

### Creating a New Component

1. **Create component files**

```bash
src/components/NewComponent.tsx
src/components/NewComponent.scss
```

2. **Implement component**

```typescript
// NewComponent.tsx
'use client'; // If interactive

import './NewComponent.scss';

interface NewComponentProps {
  title: string;
}

export default function NewComponent({ title }: NewComponentProps) {
  return (
    <div className="new-component">
      <h2>{title}</h2>
    </div>
  );
}
```

3. **Add styles**

```scss
// NewComponent.scss
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.new-component {
  // Base styles (mobile)
  padding: 16px;
  background-color: $white;
  border-radius: $radius-16;

  h2 {
    color: $charcoal;
    font-size: $fs-3;
    margin-bottom: 12px;
  }

  // Responsive breakpoints
  @include mobile-up {
    padding: 20px;
  }

  @include tablet-up {
    padding: 32px;

    h2 {
      font-size: $fs-2;
    }
  }

  @include desktop-up {
    padding: 40px;
  }
}
```

4. **Export from index** (if in a group)

```typescript
// src/components/index.ts
export { default as NewComponent } from './NewComponent';
```

### Adding a Custom Hook

```typescript
// src/hooks/useCustomHook.ts
'use client';

import { useState, useEffect } from 'react';

export const useCustomHook = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Effect logic
  }, [initialValue]);

  return { value, setValue };
};
```

### Adding Type Definitions

```typescript
// src/types/index.ts
export interface NewType {
  id: string;
  name: string;
  // ...
}

// Use in component
import type { NewType } from '@/types';
```

### Optimizing Images

1. **Place image in `public/assets/images/`**
2. **Use Next.js Image component**

```typescript
import Image from 'next/image';

<Image
  src="/assets/images/image.jpg"
  alt="Description"
  width={800}
  height={600}
  quality={85}
/>
```

### Adding Environment Variables

1. **Add to `.env.local`**

```bash
NEXT_PUBLIC_NEW_VAR=value
```

2. **Use in code**

```typescript
const newVar = process.env.NEXT_PUBLIC_NEW_VAR;
```

3. **Add to Vercel/deployment platform**

---

## 📚 Additional Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation/)

### Tools & Libraries

- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [Ionicons](https://ionic.io/ionicons)

### Best Practices

- [Web.dev](https://web.dev/) - Performance & best practices
- [MDN Web Docs](https://developer.mozilla.org/) - Web standards
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility
- [OWASP](https://owasp.org/) - Security practices

---

## 🤝 Contributing

### Getting Started

1. Clone the repository
2. Install dependencies: `yarn install`
3. Create feature branch: `git checkout -b feature/name`
4. Make changes following conventions
5. Run quality checks: `yarn lint && yarn type-check`
6. Commit with conventional format
7. Push and create pull request

### Pull Request Process

1. Update documentation if needed
2. Ensure all checks pass
3. Request review from maintainers
4. Address feedback
5. Merge after approval

---

## 📞 Support & Contact

### Project Maintainer

- **Name**: [Your Name/Team]
- **Email**: [contact@example.com]
- **GitHub**: [@username](https://github.com/username)

### Issue Reporting

- Bug reports: [GitHub Issues](https://github.com/username/repo/issues)
- Feature requests: [GitHub Discussions](https://github.com/username/repo/discussions)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Last Updated**: 2025-10-08  
**Version**: 1.0.10  
**Agent Context Version**: 1.0
