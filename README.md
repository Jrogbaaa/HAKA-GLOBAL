# HAKA Global

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000)

**Pre-Shift Strike.**

Strategic advisory and investment for people and companies operating where decisions take shape — before they become public.

## ✨ Overview

HAKA Global operates where decisions take shape, before they become public or formalized. We work within complex personal, corporate, and institutional environments, supporting individuals and organizations whose outcomes depend on context, alignment, and timing.

### Language

The site is in **English** only:
- All content stored in `/src/messages/en.json`

### HAKA Global Consulting
Strategic advisory across seven areas: Strategic Advisory & Positioning, C-Level & Executive Advisory, Personal & Corporate Affairs, Non-Market Strategy, Public Reputation & Trust, AI-Driven Strategic Intelligence, and Financial Advisory.

### HAKA Global Investment
Selective, opportunity-driven investment across: Worldwide Real Estate, Private & Strategic Investments, Precious Metals, and Luxury Assets & Collectibles.

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.1.1 (App Router, Turbopack) |
| **Database** | PostgreSQL via Neon |
| **ORM** | Prisma 6.19 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Material Symbols Outlined |
| **Fonts** | Manrope (200-800 weights) |
| **Deployment** | Vercel |

## 🎨 Design System

### Typography
- **Font**: Manrope (Google Fonts)
- **Weights**: 200 (ExtraLight) to 800 (ExtraBold)

### Color Palette (Dark Theme)

| Variable | Value | Usage |
|----------|-------|-------|
| `--color-primary` | `#B39750` | Primary gold accent |
| `--color-background-light` | `#f6f6f8` | Light mode background |
| `--color-background-dark` | `#0a0a0a` | Dark mode background (true black) |
| `--color-surface-dark` | `#141414` | Elevated surfaces, cards |

### Design Principles
- **Responsive design** - Mobile-first with full desktop support (max-w-md on mobile, max-w-4xl on desktop)
- **Dark mode by default** - Clean, modern dark aesthetic with true black background for optimal contrast
- **Gold theme branding** - Consistent gold (#B39750) across logo, icons, and accents
- **Gold primary accent** - Gold (#B39750) matching logo for CTAs and highlights
- **Card-based UI** - Cards with shadows, borders, and hover effects
- **Sticky navigation** - Backdrop blur header with HAKA logo + "pre-shift strike." tagline
- **Material icons** - Google Material Symbols Outlined (all in gold theme)
- **Smooth transitions** - Hover effects and subtle animations
- **Floating CTAs** - Fixed bottom action buttons with "Schedule Consultation" CTA
- **English only** - Site content in English

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage - "pre-shift strike" hero, Consulting & Investment cards, newsletter CTA |
| `/about` | Anticipation, Affairs, Influence - How We Operate, Anticipation timeline, AI as Strategic Leverage |
| `/advisory` | HAKA Global Consulting - Advisory areas, engagement principles, relationship model |
| `/investment` | HAKA Global Investment - Philosophy, focus areas (Real Estate, Private, Metals, Luxury), operation model |
| `/contact` | Start a Conversation - Inquiry form with Madrid, Barcelona, Roma office locations |
| `/privacy` | Privacy Policy - Data collection, usage, cookies, user rights |
| `/terms` | Terms of Service - Service terms, intellectual property, liability, governing law |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Neon PostgreSQL database account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jrogbaaa/HAKA-GLOBAL.git
   cd HAKA-GLOBAL
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   
   Create a `.env` file in the root directory:
   ```env
   # Neon PostgreSQL - Pooled connection (for queries)
   DATABASE_URL="postgresql://neondb_owner:YOUR_PASSWORD@ep-YOUR-ENDPOINT-pooler.REGION.aws.neon.tech/neondb?sslmode=require"
   
   # Neon PostgreSQL - Direct connection (for migrations)
   DIRECT_URL="postgresql://neondb_owner:YOUR_PASSWORD@ep-YOUR-ENDPOINT.REGION.aws.neon.tech/neondb?sslmode=require"
   
   # Application URL
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   
   # Email notifications (Resend)
   RESEND_API_KEY="re_your_api_key"
   ```

4. **Set up the database:**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with initial data
   npm run db:seed
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Playwright E2E tests |
| `npm run test:ui` | Run E2E tests with UI |
| `npm run test:headed` | Run E2E tests in headed mode |
| `npm run test:report` | View Playwright test report |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push schema to database |
| `npm run db:migrate` | Run database migrations |
| `npm run db:seed` | Seed database with initial data |
| `npm run db:studio` | Open Prisma Studio |

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── about/                  # About HAKA - Philosophy, Strategic approach
│   │   └── page.tsx
│   ├── advisory/               # HAKA Global Consulting - Accordions, timeline
│   │   └── page.tsx
│   ├── contact/                # Start a Conversation
│   │   ├── ContactForm.tsx     # Inquiry form with validation
│   │   └── page.tsx
│   ├── investment/             # HAKA Global Investment - Tabs, areas, timeline
│   │   └── page.tsx
│   ├── privacy/                # Privacy Policy
│   │   └── page.tsx
│   ├── terms/                  # Terms of Service
│   │   └── page.tsx
│   ├── api/
│   │   └── newsletter/         # Newsletter subscription API
│   │       └── route.ts        # Sends welcome email to subscriber + notification to team
│   ├── globals.css             # Global styles & CSS variables
│   ├── layout.tsx              # Root layout with fonts, navigation & footer
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Homepage with cards & newsletter
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Sticky header with logo + tagline
│   │   └── Footer.tsx          # Footer component
│   ├── sections/               # Page section components
│   └── ui/                     # Reusable UI components
│       ├── Accordion.tsx       # Collapsible sections
│       ├── Timeline.tsx        # Step-by-step timeline
│       ├── FloatingCTA.tsx     # Sticky bottom CTA
│       └── ...
├── i18n/                       # Language configuration
│   ├── config.ts               # Locale configuration
│   ├── LocaleContext.tsx       # Client-side locale context
│   └── index.ts                # Exports
├── messages/                   # Content files
│   └── en.json                 # English content
└── lib/
    ├── actions/                # Server actions
    │   └── contact.ts          # Form submission
    ├── constants.ts            # Site config, services, locations
    ├── db.ts                   # Prisma client singleton
    └── validations.ts          # Zod schemas

prisma/
├── schema.prisma               # Database schema
└── seed.ts                     # Seed data script

public/
├── images/
│   ├── about/                  # About page imagery
│   │   ├── hero.jpg
│   │   └── ai-section.jpg
│   ├── investment/             # Investment page imagery
│   │   └── hero.jpg
│   └── advisory/               # Advisory page imagery
│       └── hero.jpg
└── *.svg                       # Logo and icon assets
```

## 🗃 Database Schema

### Models

**ContactInquiry**
- Conversation initiation requests
- Fields: name, organization, email, interest, message

## 🌐 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Configure Environment Variables**
   
   In Vercel Dashboard → Project → Settings → Environment Variables:
   
   | Variable | Value |
   |----------|-------|
   | `DATABASE_URL` | `postgresql://neondb_owner:PASSWORD@ep-xxx-pooler.region.aws.neon.tech/neondb?sslmode=require` |
   | `DIRECT_URL` | `postgresql://neondb_owner:PASSWORD@ep-xxx.region.aws.neon.tech/neondb?sslmode=require` |
   | `NEXT_PUBLIC_APP_URL` | `https://your-domain.vercel.app` |
   | `RESEND_API_KEY` | `re_your_api_key` |

4. **Deploy**
   - Vercel automatically deploys on every push to `main`
   - Build command runs `prisma generate` automatically

## 📧 Contact

For inquiries: **info@hakaglobal.com**

### Locations
- **Madrid** - Calle de Velázquez 34, 28001 Madrid, Spain
- **Barcelona** - Passeig de Gràcia 56, 08007 Barcelona, Spain
- **Roma** - Via Veneto 112, 00187 Roma, Italy

## 🔒 Security Notes

- Environment variables are never committed to git
- Database credentials stored securely in Vercel
- Form validation on both client and server
- HTTPS enforced in production
- All inquiries treated with discretion
- **Honeypot spam protection** on all forms (newsletter + contact)
  - Hidden fields catch automated bot submissions
  - Bots are silently rejected without alerting them

## 📝 License

Private - All rights reserved © 2026 HAKA Global
