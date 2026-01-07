# HAKA Global

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000)

**Pre-Shift Strike.**

Strategic advisory and investment for people and companies operating where decisions take shape — before they become public.

## ✨ Overview

HAKA Global operates where decisions take shape, before they become public or formalized. We work within complex personal, corporate, and institutional environments, supporting individuals and organizations whose outcomes depend on context, alignment, and timing.

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
| **Animations** | Framer Motion |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React, Material Symbols |
| **Fonts** | Inter (body), Cormorant Garamond (headings) |
| **Deployment** | Vercel |

## 🎨 Design System

### Typography
- **Headings**: Cormorant Garamond (elegant serif)
- **Body**: Inter (clean sans-serif)

### Color Palette (Premium Dark Theme)

| Variable | Value | Usage |
|----------|-------|-------|
| `--background` | `#1A191A` | Page background |
| `--surface` | `#232018` | Cards, elevated surfaces |
| `--surface-elevated` | `#1a1812` | Modal backgrounds |
| `--border` | `#393528` | Borders |
| `--foreground` | `#ffffff` | Primary text |
| `--text-secondary` | `#b9b29d` | Secondary text |
| `--text-muted` | `#737368` | Muted text |
| `--primary` / `--accent` | `#eebd2b` | Gold accent color |

### Design Principles
- Dark mode first with luxury gold accent
- Max content width: 1400px
- Consistent padding: 24px mobile, 40px desktop
- Full-width sections with centered content (`flex justify-center`)
- Hero section on homepage only; compact PageHeader on subpages
- Content-first layout approach on all pages
- Smooth scroll and subtle animations (Framer Motion)
- Minimal borders, spacing-based hierarchy
- Hover states for all interactive elements

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
│   ├── about/                  # About HAKA - Anticipation, Affairs, Influence
│   │   ├── AboutContent.tsx    # Mission, AI Leverage, Values, How We Work
│   │   └── page.tsx
│   ├── contact/                # Start a Conversation
│   │   ├── ContactForm.tsx     # Inquiry form with locations
│   │   └── page.tsx
│   ├── insights/               # Strategic perspectives
│   │   ├── InsightsGrid.tsx    # Filterable article grid
│   │   ├── [slug]/             # Dynamic article pages
│   │   └── page.tsx
│   ├── investment/             # HAKA Global Investment
│   │   └── page.tsx            # Investment areas & philosophy
│   ├── marketplace/            # Luxury Assets & Collectibles
│   │   ├── MarketplaceGrid.tsx # Category filter & items
│   │   ├── [id]/               # Individual item pages
│   │   └── page.tsx
│   ├── services/               # Areas of Advisory
│   │   ├── [slug]/             # Individual advisory area pages
│   │   └── page.tsx            # Advisory overview
│   ├── globals.css             # Global styles & CSS variables
│   ├── layout.tsx              # Root layout with fonts
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Homepage
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx      # Sticky header with gold CTA
│   │   └── Footer.tsx          # Multi-column footer
│   ├── sections/
│   │   ├── Hero.tsx            # Full-bleed hero (homepage only)
│   │   ├── PageHeader.tsx      # Compact header for subpages
│   │   ├── ServiceGrid.tsx     # Advisory areas cards
│   │   ├── StatsSection.tsx    # Trust/stats bar
│   │   ├── CTASection.tsx      # Start a Conversation CTA
│   │   └── FeaturedMarketplace.tsx
│   └── ui/
│       ├── Button.tsx          # Primary/secondary/ghost variants
│       ├── Card.tsx            # Item cards with hover effects
│       ├── Input.tsx           # Form inputs with validation
│       ├── Badge.tsx           # Category badges
│       └── Modal.tsx           # Overlay modals
└── lib/
    ├── actions/                # Server actions
    │   ├── contact.ts          # Form submission
    │   ├── insights.ts         # Article fetching
    │   └── marketplace.ts      # Item fetching
    ├── constants.ts            # Site config, services, investment areas
    ├── db.ts                   # Prisma client singleton
    └── validations.ts          # Zod schemas

prisma/
├── schema.prisma               # Database schema
└── seed.ts                     # Seed data script
```

## 🗃 Database Schema

### Models

**MarketplaceItem**
- Luxury assets for investment (watches, jewelry, handbags, accessories)
- Fields: title, description, category, imageUrl, price, featured, available

**Insight**
- Strategic perspectives and analysis
- Fields: title, slug, category, imageUrl, content, author, publishedAt

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
- **Madrid** - Calle Hermosilla 7, 28001
- **Barcelona** - Carrer de Sant Gervasi de Cassoles, 59
- **Rome** - Via Tripoli 5, 00199

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, advisory areas, CTA |
| `/about` | Anticipation, Affairs, Influence - AI as Strategic Leverage |
| `/services` | Areas of Advisory with engagement model |
| `/services/[slug]` | Individual advisory area detail pages |
| `/investment` | HAKA Global Investment philosophy & areas |
| `/marketplace` | Luxury Assets & Collectibles |
| `/marketplace/[id]` | Item detail with inquiry modal |
| `/insights` | Strategic perspectives and analysis |
| `/insights/[slug]` | Individual article pages |
| `/contact` | Start a Conversation - inquiry form |

## 🔒 Security Notes

- Environment variables are never committed to git
- Database credentials stored securely in Vercel
- Form validation on both client and server
- HTTPS enforced in production
- All inquiries treated with discretion

## 📝 License

Private - All rights reserved © 2025 HAKA Global
