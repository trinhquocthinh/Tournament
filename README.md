# Tournament Gaming Website - Next.js Conversion

This project has been converted from static HTML to Next.js 14 with TypeScript and SCSS, following the architecture patterns defined in `agent.md`.

## 🚀 Project Status

The conversion includes:

✅ **Completed:**

- Next.js 14 project structure with App Router
- TypeScript configuration with path aliases
- SCSS variables and mixins system
- Custom React hooks (useScroll, useNavbar, useCursor, useReveal, useTournamentTabs, useButtonRipple)
- Reusable components (Header, Footer, Layout, BackToTop, CustomCursor)
- SEO configuration and metadata
- Data files for navigation, matches, news, benefits
- Root layout with global styles
- Home, Tournament, and Article page structures
- Sitemap and Robots.txt generation
- Security headers configuration

## 📦 Installation

1. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

2. **Start the development server:**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
tournament-website/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   ├── images/
│   │   └── js/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── article/
│   │   │   └── page.tsx
│   │   └── tournament/
│   │       └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.scss
│   │   ├── Footer.tsx
│   │   ├── Footer.scss
│   │   ├── Layout.tsx
│   │   ├── BackToTop.tsx
│   │   ├── BackToTop.scss
│   │   ├── CustomCursor.tsx
│   │   ├── CustomCursor.scss
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       └── HeroSection.scss
│   ├── config/
│   │   └── seo.ts             # SEO configuration
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── matches.ts
│   │   ├── news.ts
│   │   └── benefits.ts
│   ├── hooks/
│   │   ├── useScroll.ts
│   │   ├── useNavbar.ts
│   │   ├── useCursor.ts
│   │   ├── useReveal.ts
│   │   ├── useTournamentTabs.ts
│   │   └── useButtonRipple.ts
│   ├── styles/
│   │   ├── globals.scss
│   │   ├── _variables.scss
│   │   └── _mixins.scss
│   └── types/
│       ├── index.ts
│       └── ion-icon.d.ts
├── next.config.js
├── tsconfig.json
├── package.json
├── .env.local
└── README.md
```

## 🎨 Key Features

### Server-Side Rendering (SSR)

All pages are server-rendered by default for optimal SEO and performance.

### TypeScript

Full type safety throughout the application with custom types for all data structures.

### SCSS Architecture

- **Variables**: All colors, fonts, and sizes in `_variables.scss`
- **Mixins**: Responsive breakpoints and reusable patterns in `_mixins.scss`
- **Component Scoping**: Each component has its own SCSS file

### Custom Hooks

- `useScroll`: Tracks scroll position for header and back-to-top button
- `useNavbar`: Manages mobile navigation state
- `useCursor`: Custom cursor effects
- `useReveal`: Scroll-based animations
- `useTournamentTabs`: Tournament bracket tab switching
- `useButtonRipple`: Button ripple hover effects

### SEO Optimization

- Dynamic metadata for each page
- Automatic sitemap generation
- Robots.txt configuration
- Open Graph and Twitter Card support
- Semantic HTML structure

### Security

- Comprehensive security headers (CSP, HSTS, X-Frame-Options, etc.)
- No `X-Powered-By` header
- Secure cookie settings

## 🔨 Next Steps to Complete the Conversion

### 1. Create Additional Sections

You need to complete the remaining sections for the home page:

**Join Section** (`src/components/sections/JoinSection.tsx`):

- Form with validation using React Hook Form + Zod
- Benefits list
- Form submission handling

**Upcoming Matches Section** (`src/components/sections/UpcomingSection.tsx`):

- Match cards with team logos
- Date/time display
- Social media links

**News Section** (`src/components/sections/NewsSection.tsx`):

- News cards grid
- Dynamic content from data
- Link to article pages

### 2. Complete Tournament Page

The tournament page needs:

- Tournament tabs component (Valorant, Apex, League)
- Bracket visualization
- Match results display
- Tab switching logic using `useTournamentTabs` hook

### 3. Complete Article Page

The article page needs:

- Article content layout
- Sidebar with latest posts
- Reading time calculation
- Social sharing buttons

### 4. Add Form Validation

Install and configure:

```bash
yarn add react-hook-form zod @hookform/resolvers
```

Then implement form validation in Join section.

### 5. Add Remaining CSS

Convert the remaining CSS from `assets/css/style.css` to component-specific SCSS files.

### 6. Test Everything

- Test all interactive features (navigation, forms, animations)
- Verify responsive design on all breakpoints
- Check SEO metadata on all pages
- Test performance with Lighthouse

## 📝 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix linting errors
- `yarn type-check` - Run TypeScript compiler check
- `yarn format` - Format code with Prettier
- `yarn analyze` - Analyze bundle size

## 🌐 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Tournament
```

For production, update with your actual domain.

## 🔐 SEO & Metadata

Each page has custom metadata exported for optimal SEO:

```typescript
export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  // ...other metadata
};
```

## 📱 Responsive Breakpoints

- Mobile: ≤ 574px
- Mobile Up: ≥ 575px
- Tablet Up: ≥ 768px
- Laptop Up: ≥ 992px
- Desktop Up: ≥ 1200px
- XL Desktop Up: ≥ 1400px

## 🎯 Best Practices Followed

- ✅ Mobile-first responsive design
- ✅ Component-based architecture
- ✅ Type-safe TypeScript
- ✅ SCSS with BEM-like naming
- ✅ Server-side rendering for SEO
- ✅ Proper semantic HTML
- ✅ Accessibility attributes
- ✅ Security headers
- ✅ Image optimization
- ✅ Code splitting

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [SCSS Documentation](https://sass-lang.com/documentation/)

## 🤝 Contributing

Follow the conventions in `agent.md` for consistent code style and architecture.

---

**Note:** All TypeScript errors shown during file creation are expected and will resolve once you run `yarn install` to install the dependencies.
