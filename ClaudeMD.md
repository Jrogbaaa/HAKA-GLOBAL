# ClaudeMD - AI Context for Haka Global

This document provides context for AI assistants working on the Haka Global codebase.

## Project Overview

**Haka Global** is a luxury advisory and marketplace platform targeting high-net-worth individuals. The site offers services in Personal Branding, Real Estate, Financial Advisory, and a curated Luxury Marketplace.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 with CSS variables
- **Database**: PostgreSQL via Neon (Prisma ORM)
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React + Material Symbols
- **Fonts**: Inter (body), Playfair Display (headings)

## Design System

### Color Variables (defined in `globals.css`)

```css
--background: #181611       /* Page background */
--surface: #232018          /* Cards, elevated surfaces */
--surface-elevated: #1a1812 /* Modal backgrounds */
--border: #393528           /* Borders */
--foreground: #ffffff       /* Primary text */
--text-secondary: #b9b29d   /* Secondary text */
--text-muted: #737368       /* Muted text */
--primary: #eebd2b          /* Gold accent */
--accent: #eebd2b           /* Alias for primary */
```

### Layout Pattern

All page sections follow this consistent pattern for centering:

```jsx
<section className="w-full flex justify-center [other-styles]">
  <div className="w-full max-w-[1280px] px-6 lg:px-10">
    {/* Content */}
  </div>
</section>
```

### Key Components

| Component | Location | Purpose |
|-----------|----------|---------|
| `Navigation` | `components/layout/` | Sticky header with logo, nav links, gold CTA |
| `Footer` | `components/layout/` | Multi-column footer with links |
| `Hero` | `components/sections/` | Full-bleed hero with background image |
| `StatsSection` | `components/sections/` | Trust bar with key metrics |
| `ServiceGrid` | `components/sections/` | "Core Four" service cards |
| `CTASection` | `components/sections/` | Newsletter subscription |
| `Button` | `components/ui/` | Primary/secondary/ghost/outline variants |
| `Card` | `components/ui/` | Item cards with hover effects |
| `Input` | `components/ui/` | Form inputs with validation states |

## Site Configuration

Located in `src/lib/constants.ts`:

```typescript
SITE_CONFIG = {
  name: "Haka Global",
  tagline: "A Private Gateway to Influence, Assets, and Opportunity",
  email: "info@hakaglobal.com",
  url: "https://hakaglobal.com"
}
```

## Database Models

- **MarketplaceItem**: Luxury items (watches, vehicles, art, property, experiences)
- **Insight**: Blog articles with categories
- **ContactInquiry**: Form submissions

## Page Structure

| Route | Page File | Key Components |
|-------|-----------|----------------|
| `/` | `app/page.tsx` | Hero, StatsSection, ServiceGrid, CTASection |
| `/about` | `app/about/page.tsx` | Hero, AboutContent (Mission, Values, Stats), CTASection |
| `/services` | `app/services/page.tsx` | Custom hero, service detail sections |
| `/marketplace` | `app/marketplace/page.tsx` | Hero, MarketplaceGrid |
| `/insights` | `app/insights/page.tsx` | Custom hero, InsightsGrid, Newsletter |
| `/contact` | `app/contact/page.tsx` | Hero, ContactForm |

## Common Patterns

### Server Actions
Located in `src/lib/actions/`:
- `contact.ts` - Form submission handling
- `insights.ts` - Fetch insights with category filter
- `marketplace.ts` - Fetch marketplace items with category filter

### Form Validation
Using Zod schemas in `src/lib/validations.ts`

### Demo Data
Pages include demo data arrays that display when database is unavailable.

## Recent Changes (v1.2.0)

1. Contact email changed to `info@hakaglobal.com`
2. Added `--accent` CSS variable
3. Consistent spacing/padding across all pages using `flex justify-center` pattern
4. Max content width standardized to 1280px
5. Horizontal padding: 24px (mobile), 40px (desktop)

## Development Notes

- Run `npm run dev` for development server
- Prisma errors for marketplace/insights are expected without database - demo data displays instead
- Material Symbols font is loaded from Google Fonts
- All interactive elements should have `tabIndex={0}` and proper `aria-*` attributes

