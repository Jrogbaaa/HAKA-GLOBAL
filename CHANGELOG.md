# Changelog

All notable changes to the HAKA Global project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.5.0] - 2026-01-16

### Added
- **Spanish Localization** - Site now defaults to Spanish with full bilingual support
  - `/src/messages/en.json` and `/src/messages/es.json` for all content
  - Geolocation-based locale detection via middleware
  - LocaleContext for client-side locale management
  - Spanish translations for all pages

### Changed
- **Navigation Header**
  - HAKA logo size increased from `h-14 md:h-20` to `h-16 md:h-24 lg:h-28`
  - Added "pre-shift strike." tagline directly under logo (reduced vertical spacing)
  - Added "Home" (Inicio) link to dropdown menu
  - Removed language toggle buttons from header and menu

- **Homepage Reorganization**
  - Cards (Consulting/Investment) moved to TOP of page
  - Intro text paragraphs moved BELOW the cards
  - Removed duplicate logo (now only in header)
  - Removed Twitter/LinkedIn social icons from footer

- **Gold Icons Site-Wide**
  - All Material Symbols icons now use gold (#B39750) instead of random colors
  - About page: Anticipation items, How We Operate cards, AI cards
  - Advisory page: Engagement cards
  - Investment page: Investment area icons, timeline icons
  - Contact page: Office location icons

- **Investment Page Cards**
  - All 4 investment areas now display as full-width cards (stacked vertically)
  - Fixes asymmetrical layout from mixed full-width/grid display
  - Consistent card sizing regardless of text length

- **About Page**
  - Hero title changed to "Nosotros" (Spanish)
  - "Anticipación, Asuntos · Influencia" moved from hero to bold gold heading below

## [3.4.0] - 2026-01-14

### Changed
- **Gold Theme Implementation** - Changed primary color from blue (`#1754cf`) to gold (`#B39750`)
  - All icons, accents, buttons, and highlights now use gold matching the HAKA logo
  - Consistent brand identity across the entire site

- **Logo Size Increase** - Navigation logo increased from `h-14` to `h-20`
  - 43% larger for better brand visibility and presence

- **Mobile Menu Selection Indicator** - Added visual indicator for active page in hamburger menu
  - Gold left border (`border-l-4 border-primary`) on selected page
  - Background tint (`bg-primary/10`) for active menu items
  - Arrow icon also changes to gold when page is selected

- **Standardized CTA Buttons** - All floating CTA buttons now use "Schedule Consultation"
  - About page: "Get in Touch" → "Schedule Consultation"
  - Investment page: "Request Consultation" → "Schedule Consultation"
  - Consistent user experience across all pages

- **Removed Periods from Titles** - Cleaner, more consistent typography
  - Homepage: "pre-shift strike." → "pre-shift strike"
  - About page: "Anticipation." → "Anticipation"
  - About page: "Affairs. Influence." → "Affairs Influence"
  - CTASection: "Discretion starts here." → "Discretion starts here"

- **Consulting Page Hero Redesign** - Restyled to match Investment page
  - Removed "Advisory Services" blue badge
  - Changed title color from dark/blue to white
  - Added rounded corners (`rounded-xl`) with shadow
  - Proper image fade with gradient overlay
  - Hover scale animation on image
  - Content positioned at bottom of card (matching Investment page)

## [3.3.0] - 2026-01-09

### Changed
- **Advisory Page Hero** - Added background image with gradient fade effect
  - Uses `/images/advisory/hero.jpg` as hero background
  - Gradient overlay fades from bottom to top (matching Investment page style)
  - Improved visual consistency between Advisory and Investment pages

- **Investment Page Hero** - Removed incorrect "GLOBAL CONSULTING FIRM" label
  - Previously showed blue text above "HAKA Global Investment" title
  - Hero now correctly displays only the Investment branding

- **Navigation Logo** - Increased HAKA logo size from `h-10` to `h-14`
  - 40% larger for better visibility and brand presence
  - Consistent across all pages

- **Home Page Animation** - Replaced static triangle icon with animated network graphic
  - New pulsing network nodes design representing strategic connections
  - Orbital rings spinning in opposite directions
  - Central node with 4 orbiting satellite nodes
  - Staggered pulse animations for dynamic effect
  - CSS-only animation (no external dependencies)
  - Same square form factor as original design

## [3.2.0] - 2026-01-09

### Changed
- **Navigation Logo** - Replaced text "HAKA" with gold SVG logo (`haka-logo-gold.svg`)
  - Logo is now centered and larger for better visibility
  - Consistent branding with footer logo

- **Text Color Refinement** - Changed white text to softer gray (`dark:text-gray-200`)
  - Improved readability across all pages
  - Better contrast without harsh white-on-dark

- **Complete Brand Content Update** - All placeholder text replaced with official HAKA brand copy
  
  **Homepage:**
  - Hero description: "We support Personal and Corporate Affairs with anticipation, strategic clarity, access and long-term vision."
  - Card badges: "Strategic Advisory" and "Access & Conviction"
  - Newsletter CTA: "Discretion starts here."

  **About Page:**
  - Hero: "Anticipation. Affairs. Influence."
  - Intro: "HAKA operates where decisions take shape, before they become public or formalized."
  - Sections renamed: "How We Operate", "Anticipation", "AI as Strategic Leverage"
  - Cards: Selectivity, Discretion, "Before narratives settle", "Before consensus becomes public", "Before the shift occurs"
  - AI cards: "Contextual Analysis", "Decision Support"

  **Advisory Page:**
  - Hero: "HAKA Global Consulting" - "Strategic advisory for people and companies operating where decisions take shape."
  - Accordions updated with official service descriptions
  - How We Work: "We work selectively", "Advisory is not execution support", "Confidential by default"
  - When Clients Engage Us: Visibility, Influence, No improvisation, Context matters
  - Relationship Model: "Mandate-based. Bespoke. Confidential."

  **Investment Page:**
  - Hero: "HAKA Global Investment" - "Strategic investments shaped by access, timing and conviction."
  - Overview: "HAKA Global Investment operates where information asymmetry, scarcity and strategic access generate long-term value."
  - Philosophy: "We do not chase trends. We position capital before they form."
  - Areas: Updated descriptions for Real Estate, Private & Strategic, Precious Metals, Luxury Assets
  - How We Operate: Direct investments, Discretion, Intelligence, "Pre-Shift Strike"

- **Contact Page Email Fix** - Changed from `contact@haka.com` to `info@hakaglobal.com`

### Technical
- No layout or design changes - all updates are text-only swaps within existing components
- Consistent email address across entire site

## [3.1.0] - 2026-01-09

### Changed
- **Complete Page Redesign** - All 4 inner pages converted from new HTML designs to React/Next.js
  - Mobile-first design with `max-w-md` centered container
  - Consistent styling across all pages with new design system
  - External image URLs for hero sections (Google hosted)

- **About Page** (`/about`)
  - New hero section with parallax background image and gradient overlay
  - "Global Vision, Local Impact." headline
  - Philosophy section with 2 feature cards (Long-term Value, Transparency)
  - Strategic Approach section with 3 items (Data-Driven, Agile, Holistic)
  - Client Engagement section with 2 grid cards (Partnership, Feedback Loops)
  - Gradient floating CTA button

- **Advisory/Consulting Page** (`/advisory`)
  - Hero section with decorative glow effect and "Advisory Services" badge
  - "Global Consulting" headline with description
  - "What We Do" section with custom accordion components (Strategic Advisory, C-Level Advisory, Personal & Corporate Affairs)
  - "How We Work" vertical timeline with 3 numbered steps (Assessment, Strategy Formulation, Execution & Oversight)
  - "When Clients Engage Us" section with 4 scenario cards in different colors (M&A, Crisis, Global Expansion, Restructuring)
  - "Relationship Model" section with Tailored Engagement info (Retainer Based, Project Based)
  - Fixed bottom CTA with backdrop blur

- **Investment Page** (`/investment`)
  - Hero section with background image and "Global Consulting Firm" badge
  - "Global Investment - Preserving Wealth across Borders" headline
  - Sticky tab navigation (Overview, Philosophy, Areas, Operate)
  - Investment Philosophy section with SVG donut chart visualization
  - "Prudence. Patience. Precision." philosophy statement
  - Focus Areas section with 4 cards (Worldwide Real Estate, Private & Strategic, Precious Metals, Luxury Assets)
  - Image cards with hover effects and icon badges
  - "How We Operate" vertical timeline with 4 icon steps (Discovery, Strategy, Execution, Management)
  - Fixed bottom CTA

- **Contact Page** (`/contact`)
  - "Let's discuss how we can help your business grow." headline
  - Form with 4 fields (Name, Organization, Contact Details, Message)
  - Form validation and submission handling preserved
  - Focus states with primary color highlighting
  - Locations section with 3 offices (Madrid, Barcelona, Roma) with updated addresses
  - Email link with copyright footer
  - Removed fixed bottom CTA (form submit button inline)

### Technical
- Inline accordion component in Advisory page (no external dependency)
- Tab navigation state management in Investment page
- All pages use direct Tailwind classes instead of CSS variables
- Consistent `shadow-2xl` on main containers for depth
- Material Symbols icons throughout
- Proper accessibility attributes (tabIndex, aria-labels, roles)

## [3.0.0] - 2026-01-09

### Changed
- **Complete Mobile-First UI Redesign** - Rebuilt the entire application with a mobile-first approach
  - New design system based on Google Stitch mobile mockups
  - Blue primary color (#1754cf) replacing gold accent
  - Mobile-optimized layouts (max-w-md centered container)
  - Dark theme by default with clean, modern aesthetic

- **Homepage Overhaul**
  - New animated logo representation with Material icon
  - "pre-shift strike." hero tagline (italic, light weight)
  - Navigation cards with image backgrounds and gradient overlays
  - Newsletter subscription section with email input
  - Minimal footer with social links

- **Navigation Redesign**
  - Sticky header with backdrop blur
  - "HAKA" text logo (centered, bold, letter-spaced)
  - Hamburger menu with dropdown navigation
  - Clean dropdown menu with arrow icons

- **Design System Updates**
  - Font: Manrope (weights 200-800)
  - Colors: Primary blue, dark backgrounds, surface colors
  - Material Symbols Outlined icons
  - Card-based UI with shadows and hover effects
  - Smooth transitions and animations

- **CSS Architecture**
  - Tailwind CSS v4 with @theme directive
  - CSS custom properties for theming
  - Custom scrollbar styling
  - Removed legacy gold/luxury theme styles

### Removed
- Insights page and marketplace pages (no longer needed)
- Services page (merged into Advisory)
- Gold/luxury color scheme
- Cormorant Garamond and Inter fonts
- Legacy section components

## [2.7.0] - 2026-01-09

### Changed
- **Site-wide Gold Titles** - All h1, h2, h3 headings now use gold color (`var(--gold)`) for consistent brand identity
- **Hamburger Menu Refinements**
  - Reduced line size from `w-7 md:w-8 h-[3px]` to `w-5 md:w-6 h-[2px]` for a more refined look
  - Reduced gap between lines for tighter appearance
  - Aligned hamburger position with top of HAKA logo on desktop
- **Home Page Updates**
  - First sentence "We support Personal and Corporate Affairs..." now gold and larger (`text-xl md:text-2xl lg:text-3xl`)
  - Split description into two paragraphs with spacing after first gold sentence
  - CONSULTING/INVESTING card titles reduced from `clamp(2rem, 8vw, 6rem)` to `clamp(1.75rem, 6vw, 4.5rem)`
  - Added background images to CONSULTING and INVESTING cards with dark overlay and hover effects
- **Navigation/Branding**
  - "pre-shift strike." tagline now visible on mobile (was hidden)
  - Reduced header height and moved logo/tagline up for tighter layout
- **Bold Text → Bold + Gold** - All bold/emphasized text across the site now displays in gold color
  - About page: 12 instances updated
  - Advisory page: Key terms now gold
  - Investment page: 6 instances updated
  - Home page: "Pre-Shift Strike" now gold
- **Text Alignment** - Changed from centered to left-aligned text across all pages
- **Reduced Section Spacing** - Decreased vertical padding/margins between sections by ~25-30% site-wide
- **Title Size Reductions**
  - HAKA GLOBAL CONSULTING: `text-3xl md:text-4xl lg:text-5xl` → `text-2xl md:text-3xl lg:text-4xl`
  - HAKA GLOBAL INVESTMENT: `text-3xl md:text-4xl lg:text-5xl` → `text-2xl md:text-3xl lg:text-4xl`

## [2.6.1] - 2026-01-09

### Fixed
- **E2E Test Updates** - Updated all Playwright tests to match current site structure
  - `about.spec.ts` - Fixed selectors to scope within article element, added hero image test
  - `contact.spec.ts` - Updated form field selectors to use aria-labels, fixed title check, added location test
  - `navigation.spec.ts` - Updated to use hamburger menu for all navigation tests (removed desktop nav assumption), scoped home page content tests to main element
  - All 115 tests now pass across Chromium, Firefox, WebKit, Mobile Chrome, and Mobile Safari

## [2.6.0] - 2026-01-08

### Added
- **Strategic Imagery Across Pages** - Professional images added to enhance visual appeal while maintaining the dark, minimal aesthetic
  - **About Page**: Hero image (modern architecture) after title, AI section accent image alongside "AI as Strategic Leverage" content
  - **Investment Page**: Full-width hero banner image (city skyline) between title and Overview section
  - **Advisory Page**: Full-width hero banner image (corporate interior) for visual consistency with Investment page
  - All images use `opacity-40`/`opacity-50` with gradient overlays to blend seamlessly with the dark theme
  - Images sourced from Unsplash with professional, muted tones matching HAKA brand aesthetic

- **Image Directory Structure** - New organized structure for page-specific images
  ```
  public/images/
  ├── about/
  │   ├── hero.jpg
  │   └── ai-section.jpg
  ├── investment/
  │   └── hero.jpg
  └── advisory/
      └── hero.jpg
  ```

### Changed
- **Home Page Spacing Fix** - Added vertical spacer (`h-12 md:h-16 lg:h-20`) between CONSULTING/INVESTING card grid and description text for improved visual separation

## [2.5.0] - 2026-01-08

### Changed
- **Contact Page Complete Redesign** - "Start a Conversation" page updated with new design spec
  - New layout with exact text: "START A CONVERSATION", "Discretion starts here.", full description
  - Contact section with Madrid, Barcelona, Roma locations (city names now larger at 1.375rem)
  - "Initiate a Conversation" form section with field list indicator
  - Closing statement: "Not every conversation leads to engagement. But every engagement starts with the right conversation."
  - Improved section spacing with larger margins between sections (my-14 dividers)
  
- **Contact Form Updates**
  - New form fields: Name, Organization (optional), Contact details (email or phone), Context/Message
  - Simplified input styling with border focus states
  - Uppercase "SUBMIT" button matching site styling
  
- **Email Integration (Resend API)**
  - Notification emails sent to info@hakaglobal.com on form submission
  - Confirmation emails sent to users (if contact details is an email)
  - Professional HTML email templates with HAKA Global branding
  - Graceful fallback if email service unavailable

- **Location Name Update**
  - Changed "Rome" to "Roma" across the site for consistency with Italian naming

## [2.4.3] - 2026-01-08

### Changed
- **Navigation Dropdown Menu Redesign**
  - Menu items reordered: About → Investing → Consulting → Start a Conversation
  - Significantly larger dropdown menu buttons with increased padding (py-6 md:py-7)
  - Bold uppercase text styling with wider letter-spacing (tracking-wider)
  - Larger font sizes (text-xl md:text-2xl) for better readability
  - Wider dropdown container (340px mobile / 420px desktop)
  - Larger hamburger menu button (w-14 h-14 md:w-16 md:h-16)
  - Thicker hamburger lines (3px) with gold color
  - "Start a Conversation" visually separated with border divider
  - Hover animation slides menu items slightly right

- **Navigation Header Sizing** (user adjustments)
  - Increased header height (h-24 md:h-32 lg:h-40)
  - Larger HAKA logo (h-20 md:h-28 lg:h-36)
  - Adjusted tagline positioning to match larger logo

## [2.4.2] - 2026-01-08

### Changed
- **Investment Page Redesign** - Updated to match consulting page style
  - New minimalist document-style layout with centered content (max-w-3xl)
  - Title "HAKA GLOBAL INVESTMENT" centered at top
  - Content organized into logical sections: Overview, Investment Philosophy, Investment Areas, Intelligence & Timing, How We Operate
  - Numbered list format for 4 Investment Areas matching consulting page style
  - Bold emphasis on key terms (information asymmetry, startups/early-stage opportunities, investment-grade assets, AI-driven strategic intelligence)
  - Added link to HAKA Global Consulting in Overview section
  - Closing statement with "Pre-Shift Strike." tagline
  - Email subscription form at bottom
  - Consistent footer with consulting page

### Fixed
- Typo correction: "nsight comes before opportunity" → "Insight comes before opportunity"

## [2.4.1] - 2026-01-08

### Fixed
- **Navigation Tagline Alignment** - "pre-shift strike." text now properly aligned with the HAKA logo
  - Fixed horizontal alignment using CSS transform (`-translate-x-2`)
  - Fixed vertical positioning using CSS transform (`-translate-y-7`) to sit closer to logo
  - Resolved issue where margin-based positioning wasn't working due to flex container constraints

## [2.4.0] - 2026-01-08

### Changed
- **About Page Complete Redesign**
  - New minimalist document-style layout with centered content
  - Title "ABOUT HAKA" centered at top
  - Bold tagline "Anticipation · Affairs · Influence"
  - Content organized into logical sections with double-spacing
  - Simplified bullet points for key messaging
  - Email input field (no subscribe button) at bottom
  - Footer with "© 2026. All rights reserved", "Privacy Policy", "Legal Notice" links

- **Homepage Updates**
  - Kept Subscribe button for email subscription
  - Footer retains "Confidential by default." messaging

- **E2E Tests Updated**
  - `about.spec.ts` - Updated to match new About page structure
  - `navigation.spec.ts` - Updated for current page elements
  - `contact.spec.ts` - Simplified to essential form tests

### Fixed
- Scroll issues on About page resolved with proper flex container structure
- Text centering on About page
- Consistent font sizes across About page body text

## [2.3.0] - 2026-01-08

### Changed
- **Homepage Layout Refinements**
  - CONSULTING and INVESTING cards now have pure black backgrounds (`bg-black`) for stronger contrast
  - Description/tagline section is now properly centered using `flex justify-center`
  - Email subscription section moved to center of page with increased top spacing (`pt-32 md:pt-40 lg:pt-48`)
  - All text content properly centered on the page

- **Navigation & Branding**
  - HAKA logo increased in size (`h-16 md:h-20`)
  - "pre-shift strike." tagline now centered under the logo
  - Header height increased to `h-28 md:h-32` to accommodate larger logo

- **Full-Width Layout Fixes**
  - Added `max-w-full` and `overflow-x: hidden` to html, body, header, main, and footer
  - Ensures page content extends properly to all edges without cutoff
  - Fixed body background to use `var(--background)` instead of white

### Fixed
- Description text not appearing centered on page
- Email subscription section misaligned to the left
- Page content being cut off on the right side
- "pre-shift strike." text not centered under HAKA logo

## [2.2.0] - 2026-01-07

### Changed
- **Complete Minimalist UI Redesign**
  - Redesigned homepage with two-column hero layout
  - Larger HAKA logo in navigation (h-14)
  - "Pre-Shift Strike." now includes period for emphasis
  - Increased max-width to 1400px for better page fill
  - Updated padding and spacing throughout for balanced layout

- **Content Integration from Brand Guidelines**
  - Homepage: Updated tagline "Strategic advisory and investment for people and companies operating where decisions take shape — before they become public."
  - Homepage: Added philosophy quote "Knowing when to move, where to stand, and who needs to be in the room — before the shift happens."
  - Homepage: Added "We advise with clarity. We invest with conviction. We act with access."
  - Homepage: Added office locations (Madrid, Barcelona, Rome) in contact section
  - Homepage: Added "Discretion starts here" messaging

- **About Page Overhaul**
  - New hero: "Anticipation · Affairs · Influence"
  - Personal & Corporate Affairs section with detailed content
  - Anticipation section with "before narratives settle...", "before consensus becomes public...", "before the shift occurs."
  - Principle section with "Pre-Shift Strike is not a slogan..." quote
  - Values section: Selectivity, Discretion, Judgment

- **Advisory Page Restructure**
  - New hero: "Strategic advisory at decision level"
  - 6 Areas of Advisory with updated descriptions from brand guidelines
  - "When Clients Engage Us" section with contextual triggers
  - "Relationship Model" section: "Mandate-based. Bespoke. Confidential."
  - Added "Not every conversation leads to engagement. But every engagement starts with the right conversation."

- **Investment Page Updates**
  - New hero: "Capital deployed with conviction"
  - Investment Philosophy: "We do not chase trends. We position before they form."
  - 4 Investment Areas: Worldwide Real Estate, Private & Strategic Investments, Precious Metals, Luxury Assets & Collectibles
  - "AI as strategic leverage" section with "Capital follows insight. Insight comes before opportunity."
  - "How We Operate" section: "Direct investments. No open vehicles."

- **Marketplace Page Updates**
  - New hero: "Access defines value"
  - 6 luxury categories with detailed descriptions
  - Maisons section listing premium brands (Patek Philippe, Audemars Piguet, Rolex, Hermès, Chanel, Goyard, Cartier, Van Cleef & Arpels)
  - Process section with discretion emphasis

- **Global Updates**
  - Standardized contact email to info@hakaglobal.com across all pages
  - Navigation header height increased to h-20 for larger logo
  - Consistent "Confidential by default." footer messaging

### Fixed
- Homepage layout too far left - now properly centered with two-column layout
- Navigation mobile menu email updated to info@hakaglobal.com

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
