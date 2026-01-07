# Changelog

All notable changes to the HAKA Global project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] - 2025-01-07

### Changed
- **Stripe-Inspired UI Redesign**
  - Updated color palette for better contrast (darker backgrounds, clearer text hierarchy)
  - Increased section spacing throughout all pages for a more spacious feel
  - Reduced text density across About, Services, Investment, and Insights pages
  - Simplified service/investment cards to show only titles and icons (removed descriptions)
  - Enhanced PageHeader component with larger typography and increased padding
  - Improved Hero section with decorative elements and scroll indicator
  - Refined CTASection with gradient backgrounds and animated button effects
  - Updated ServiceGrid with cleaner card design and hover states

- **Database Configuration**
  - Switched from local Prisma dev proxy to Neon PostgreSQL cloud database
  - Added `isDatabaseConfigured()` helper to gracefully handle missing database connections
  - Pages now fallback to demo data when database is unavailable
  - Fixed Prisma connection errors that were causing page crashes

### Fixed
- **Insights page error resilience** - Restored try-catch block around `getInsights()` call to prevent page crashes on database errors
- **MarketplaceGrid import error** - Fixed `MARKETPLACE_CATEGORIES` to use correct `INVESTMENT_CATEGORIES` export
- **Turbopack cache corruption** - Cleared `.next` cache to resolve persisting build errors

### Added
- `DIRECT_URL` environment variable for Prisma migrations
- Demo data fallback for Insights and Marketplace pages when database is not configured

## [2.0.0] - 2025-01-06

### Changed
- **Complete Brand Repositioning** - Shifted from "luxury wealth management" to "strategic advisory and investment"
  - New tagline: "Pre-Shift Strike"
  - New positioning: "Strategic advisory and investment for people and companies operating where decisions take shape — before they become public."
  - Core themes: Anticipation, Affairs, Influence

- **Site Configuration** (`constants.ts`)
  - Updated site name to "HAKA Global"
  - New tagline and description
  - Navigation restructured: Home, About, Advisory, Investment, Insights, Contact
  - New locations: Madrid, Barcelona, Rome (replaced NY, London, Dubai, Singapore)
  - 7 new advisory services replacing previous 4
  - 4 new investment areas
  - Updated interest options for forms

- **Homepage**
  - Hero updated with Pre-Shift Strike messaging
  - Removed badge/stats section
  - ServiceGrid now shows "Areas of Advisory" with first 4 services
  - Added "How We Work" philosophy statement
  - CTASection changed to "Start a Conversation / Discretion starts here"

- **About Page** - Complete rewrite
  - New header: "Anticipation · Affairs · Influence"
  - Mission section: "Where Decisions Take Shape"
  - Values section with 4 core principles: Anticipation, Affairs, Influence, Pre-Shift Strike
  - New "AI as Strategic Leverage" section
  - "How We Work" section with engagement model
  - "When Clients Engage Us" criteria

- **Services Page** - Restructured as "Areas of Advisory"
  - 7 advisory areas: Strategic Advisory & Positioning, C-Level & Executive Advisory, Personal & Corporate Affairs, Non-Market Strategy, Public Reputation Trust & Consensus, AI-Driven Strategic Intelligence, Financial Advisory
  - "How We Work" section
  - "When Clients Engage Us" section
  - "Relationship Model" section explaining path to investment

- **Contact Page**
  - Header: "Start a Conversation / Discretion starts here"
  - New locations with addresses (Madrid, Barcelona, Rome)
  - Added optional Organization field to form
  - Updated copy throughout

- **Footer**
  - Updated tagline display
  - New service links reflecting advisory structure
  - New locations (Madrid, Barcelona, Rome)
  - Removed social icons except email

- **Insights Page**
  - Updated demo content to align with new brand themes (affairs, intelligence, strategy, investment)
  - Changed newsletter to CTA section

- **Marketplace Page**
  - Repositioned as "Luxury Assets & Collectibles" under HAKA Global Investment
  - Updated demo items to focus on watches, handbags, and jewelry from luxury maisons

### Added
- **Investment Page** (`/investment`) - New dedicated page for HAKA Global Investment
  - Overview section
  - Investment Philosophy (Conviction Over Volume)
  - 4 Investment Areas: Worldwide Real Estate, Private & Strategic Investments, Precious Metals, Luxury Assets & Collectibles
  - Intelligence & Timing section

- **New Constants**
  - `LOCATIONS` array with city addresses
  - `INVESTMENT_AREAS` array with 4 investment categories
  - `INVESTMENT_CATEGORIES` for filtering

- **Form Updates**
  - Optional `organization` field added to contact form schema

### Removed
- StatsSection from homepage (statistics not part of new positioning)
- Badge component from Hero
- Previous service structure (Personal Branding, Real Estate, Financial Advisory, Luxury Marketplace)

## [1.7.0] - 2025-01-02

### Changed
- **Logo Rebrand**
  - New custom SVG logo (`/public/haka-logo.svg`) replaces previous inline SVG icon + text
  - Site name simplified from "Haka Global" to "Haka"
  - Logo displayed standalone without accompanying text
  - Added CSS mask gradient effect (`.logo-fade`) for smooth edge blending with background
  - Increased logo size: Navigation `h-16`, Footer `h-14`

- **Hero Section**
  - Updated headline to "Pre Shift Strike." for marketing campaign

- **Navigation**
  - Reduced header height from `h-24` to `h-20` for tighter layout
  - Reduced horizontal padding (`px-4 lg:px-8`)
  - Fixed spacing between nav links and Contact Us button using flex gap
  - Nav link gap reduced from `gap-10` to `gap-8`

- **Design System**
  - Background color updated from `#181611` to `#1A191A` to match logo SVG background
  - All hardcoded color references updated for consistency

### Added
- `.logo-fade` CSS class for gradient mask edge blending effect
- Custom logo SVG file at `/public/haka-logo.svg`

## [1.6.0] - 2024-12-30

### Changed
- **Page Layout Overhaul - Hero Removal**
  - Hero sections now exclusive to homepage only
  - All subpages (About, Contact, Services, Marketplace, Insights) now use compact PageHeader component
  - Main page content is now immediately visible and prominent
  - Improved visual hierarchy with content-first approach

- **Navigation**
  - "Request Access" button renamed to "Contact Us" (desktop and mobile)
  - Increased spacing between nav links and CTA button (`mr-8` → `mr-12`)

- **Stats/Metrics Sections**
  - Removed decorative border lines from homepage StatsSection
  - Removed divider lines from About page Values and Stats sections
  - Cleaner, more minimal metrics presentation

- **About Page**
  - Reorganized layout with description as main focus
  - Reduced Mission section vertical padding for better content flow
  - Removed visual dividers between sections

- **Contact Page**
  - Contact form now more prominent without competing hero section
  - Improved spacing with content immediately below header

### Added
- **PageHeader Component** (`src/components/sections/PageHeader.tsx`)
  - New reusable compact header for subpages
  - Optional subtitle, title, and description props
  - Framer Motion fade-in animation
  - Consistent styling across all subpages

## [1.5.0] - 2024-12-30

### Changed
- **Logo Rebrand**
  - "Haka Global" text now displayed in gold (#eebd2b) with uppercase styling
  - New luxury Cinzel font for logo text (Roman-inspired display font)
  - Replaced diamond icon with custom SVG globe logo (concentric circles design)
  - Updated both Navigation and Footer with new branding

### Added
- Cinzel Google Font for display/branding text
- New `--font-display` CSS variable for logo typography

### Fixed
- GitHub Actions workflow: Added fallback DATABASE_URL for `prisma generate` step to prevent CI failures when secret is not configured

## [1.4.0] - 2024-12-30

### Changed
- **Major Spacing & Layout Overhaul**
  - Button component: Increased padding across all sizes (sm/md/lg), added `whitespace-nowrap` to prevent text wrapping, reduced hover scale effect
  - Hero section: Larger CTA buttons with better padding (`h-14 px-10`), added spacing between elements
  - Navigation: Increased header button height (`h-11`) with improved padding
  - StatsSection: Moved border inside with proper inner padding (`py-10 lg:py-12`), responsive border separators
  - ServiceGrid: Increased section padding (`py-24 lg:py-32`), better gap between header and cards (`gap-12 lg:gap-16`)
  - Footer: Top border now inside with proper padding (`pt-16 lg:pt-20`), bottom bar separated with `pt-10`
  - AboutContent: Complete spacing overhaul with dividers
    - Mission section: `py-32 lg:py-48` for generous breathing room
    - Values section: Horizontal divider with `py-16 lg:py-24` padding above/below, bottom padding `pb-20 lg:pb-28`, larger card padding (`p-10 lg:p-12`)
    - Stats section: Horizontal divider with `py-16 lg:py-24` padding, bottom padding `pb-16 lg:pb-24`, larger stat text
  - CTASection: Horizontal divider with `py-16 lg:py-24` padding above/below, bottom padding `pb-20 lg:pb-28`
  - Services page: Increased section padding (`py-24 md:py-36`), better button sizing
  - FeaturedMarketplace: More generous section padding, better card content spacing
  - Card component: Increased content padding
  - Badge component: Added padding and `whitespace-nowrap`

### Fixed
- Buttons not fitting text properly - now have proper padding and prevent wrapping
- Crowded section layouts - all sections now have generous vertical padding
- Text appearing directly under border lines - dividers now have generous padding both above and below
- Inconsistent spacing between sections across all pages

## [1.3.0] - 2024-12-30

### Added
- **E2E Testing with Playwright**
  - Navigation and routing tests
  - Contact form validation tests
  - About page content verification
  - Mobile responsive tests
- **GitHub Actions CI/CD**
  - E2E tests run automatically on push/PR to main, master, develop branches
  - Test artifacts uploaded (reports on failure)
- **Email Notifications (Resend)**
  - Contact form submissions now send notification email to `info@hakaglobal.com`
  - Automatic confirmation email sent to users who submit the contact form
  - Professional HTML email templates with Haka Global branding

### Changed
- **Navigation**: Request Access button restyled with bordered outline style for better visual hierarchy
- **About Page Values Section**: 
  - Cards now have left gold accent border instead of full border
  - Improved spacing and padding
  - Hover effect on card border

### Fixed
- Navigation button spacing issues
- Values section card alignment and spacing
- Inconsistent padding between sections on About page

## [1.2.0] - 2024-12-30

### Added
- New `--accent` and `--accent-muted` CSS variables (aliased to primary gold color)
- Consistent `flex justify-center` centering pattern across all page sections
- Material Symbols icons support throughout the site

### Changed
- **Contact email** updated from `contact@hakaglobal.com` to `info@hakaglobal.com`
- **Spacing/Padding improvements** across all pages for better visual consistency

### Fixed
- Content alignment issues on wider viewports (1440px+)
- Missing CSS variable `--accent` causing styling issues on About page
- Inconsistent horizontal padding across different page sections

## [1.1.0] - 2024-12-30

### Added
- Premium dark theme redesign with luxury gold accent (#eebd2b)
- New homepage design with full-bleed hero, stats bar, service cards, newsletter CTA
- Redesigned Services page with detailed sections
- Redesigned Insights page with "The Journal" hero and category filters
- New `StatsSection` component for homepage
- Updated Navigation with diamond logo icon and gold CTA button
- Updated Footer with multi-column layout and location indicators

### Changed
- Color scheme updated to premium dark theme
- Typography updated with Playfair Display for headings, Inter for body
- Button variants updated to match new design system
- Card components updated with new hover effects and borders
- Input components updated with dark theme styling

### Fixed
- Mobile menu overflow issue
- Hero section responsive layout

## [1.0.0] - 2024-12-29

### Added
- Initial release of HAKA Global platform
- Next.js 16.1.1 with App Router and Turbopack
- Tailwind CSS v4 styling
- Prisma ORM with PostgreSQL (Neon) database
- Core pages: Home, About, Services, Marketplace, Insights, Contact
- Dynamic routing for services, marketplace items, and insights
- Contact form with Zod validation
- Responsive design for mobile and desktop
- SEO metadata configuration
- Vercel deployment configuration
