# Haka

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000)

**Pre Shift Strike.**

A Private Gateway to Influence, Assets, and Opportunity.

Luxury global advisory & marketplace platform built with Next.js 16, Tailwind CSS, Prisma, and PostgreSQL (Neon).

## ✨ Features

- **Personal Branding** - Executive presence and strategic positioning
- **Real Estate** - Luxury properties and global investment opportunities
- **Financial Advisory** - Strategic wealth growth and portfolio optimization
- **Luxury Marketplace** - Curated high-end assets and exclusive experiences
- **Insights** - Thought leadership articles and industry perspectives
- **Private Access** - Confidential inquiry and consultation system

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
| **Fonts** | Inter (body), Playfair Display (headings), Cinzel (logo/display) |
| **Deployment** | Vercel |

## 🎨 Design System

### Typography
- **Logo/Display**: Cinzel (Roman-inspired luxury font)
- **Headings**: Playfair Display (elegant serif)
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
- Max content width: 1280px
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
│   ├── about/                  # About Haka Global
│   │   ├── AboutContent.tsx    # Mission, Values, Stats sections
│   │   └── page.tsx
│   ├── contact/                # Contact form & Private Access
│   │   ├── ContactForm.tsx
│   │   └── page.tsx
│   ├── insights/               # Articles & thought leadership
│   │   ├── InsightsGrid.tsx    # Filterable article grid
│   │   ├── [slug]/             # Dynamic article pages
│   │   └── page.tsx
│   ├── marketplace/            # Luxury marketplace
│   │   ├── MarketplaceGrid.tsx # Category filter & items
│   │   ├── [id]/               # Individual item pages
│   │   └── page.tsx
│   ├── services/               # Service hub
│   │   ├── [slug]/             # Individual service pages
│   │   └── page.tsx            # Services overview with sections
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
│   │   ├── ServiceGrid.tsx     # "Core Four" service cards
│   │   ├── StatsSection.tsx    # Trust/stats bar
│   │   ├── CTASection.tsx      # Newsletter subscription
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
    ├── constants.ts            # Site config & navigation
    ├── db.ts                   # Prisma client singleton
    └── validations.ts          # Zod schemas

prisma/
├── schema.prisma               # Database schema
└── seed.ts                     # Seed data script
```

## 🗃 Database Schema

### Models

**MarketplaceItem**
- Luxury items for sale (watches, vehicles, properties, art, experiences)
- Fields: title, description, category, imageUrl, price, featured, available

**Insight**
- Thought leadership articles
- Fields: title, slug, category, imageUrl, content, author, publishedAt

**ContactInquiry**
- Form submissions from users
- Fields: name, email, phone, interest, message

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

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, services, newsletter |
| `/about` | Company mission, values, stats |
| `/services` | Service hub with detailed sections |
| `/services/[slug]` | Individual service detail pages |
| `/marketplace` | Filterable luxury item listings |
| `/marketplace/[id]` | Item detail with inquiry modal |
| `/insights` | Filterable article listing with featured |
| `/insights/[slug]` | Individual article pages |
| `/contact` | Contact form and information |

## 🔒 Security Notes

- Environment variables are never committed to git
- Database credentials stored securely in Vercel
- Form validation on both client and server
- HTTPS enforced in production

## 📝 License

Private - All rights reserved © 2025 Haka Global
