# Changelog

All notable changes to the Haka Global project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
- **Stats Section**: Reduced vertical padding for better content flow

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

