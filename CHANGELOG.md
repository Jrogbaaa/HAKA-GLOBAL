# Changelog

All notable changes to the Haka Global project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2024-12-30

### Added
- New `--accent` and `--accent-muted` CSS variables (aliased to primary gold color)
- Consistent `flex justify-center` centering pattern across all page sections
- Material Symbols icons support throughout the site

### Changed
- **Contact email** updated from `contact@hakaglobal.com` to `info@hakaglobal.com`
- **Spacing/Padding improvements** across all pages for better visual consistency:
  - `AboutContent.tsx` - Mission, Values, and Stats sections
  - `ContactForm.tsx` - Contact form section  
  - `MarketplaceGrid.tsx` - Marketplace items grid
  - `Navigation.tsx` - Header navigation centering
  - `Services page.tsx` - Service sections
  - `Insights page.tsx` - Newsletter section
  - `InsightsGrid.tsx` - Filter bar, featured article, articles grid
  - `StatsSection.tsx` - Homepage stats bar
  - `ServiceGrid.tsx` - Homepage services section
  - `CTASection.tsx` - Call-to-action sections
  - `Footer.tsx` - Site footer

### Fixed
- Content alignment issues on wider viewports (1440px+)
- Missing CSS variable `--accent` causing styling issues on About page
- Inconsistent horizontal padding across different page sections

## [1.1.0] - 2024-12-30

### Added
- Premium dark theme redesign with luxury gold accent (#eebd2b)
- New homepage design with:
  - Full-bleed hero section with background image and gradient overlay
  - "Global Membership Open" badge with pulse animation
  - Trust/stats bar showing key metrics
  - "Core Four" service cards with images and icons
  - Newsletter subscription CTA section
- Redesigned Services page with:
  - Detailed sections for each service (Personal Branding, Real Estate, Financial Advisory, Luxury Marketplace)
  - Alternating image layouts
  - Feature lists and statistics
- Redesigned Insights page with:
  - "The Journal" hero section
  - Sticky category filter bar
  - Featured article highlight
  - Article grid with category badges
  - Newsletter subscription section
- New `StatsSection` component for homepage
- Updated Navigation with diamond logo icon and gold CTA button
- Updated Footer with multi-column layout and location indicators

### Changed
- Color scheme updated to premium dark theme:
  - Background: `#181611`
  - Surface: `#232018`
  - Primary/Accent: `#eebd2b` (gold)
  - Text secondary: `#b9b29d`
- Typography updated with Playfair Display for headings, Inter for body
- Button variants updated to match new design system
- Card components updated with new hover effects and borders
- Input components updated with dark theme styling

### Fixed
- Mobile menu overflow issue
- Hero section responsive layout

## [1.0.0] - 2024-12-29

### Added
- Initial release of Haka Global platform
- Next.js 16.1.1 with App Router and Turbopack
- Tailwind CSS v4 styling
- Prisma ORM with PostgreSQL (Neon) database
- Core pages: Home, About, Services, Marketplace, Insights, Contact
- Dynamic routing for services, marketplace items, and insights
- Contact form with Zod validation
- Responsive design for mobile and desktop
- SEO metadata configuration
- Vercel deployment configuration

