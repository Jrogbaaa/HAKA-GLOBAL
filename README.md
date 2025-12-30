# Haka Global

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Neon-4169E1)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000)

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
| **Icons** | Lucide React |
| **Deployment** | Vercel |

## 🎨 Design System

### Typography
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

### Color Palette
- **Background**: `#0a0a0a` (near black)
- **Foreground**: `#ededed` (off-white)
- **Accent**: `#c9a55c` (gold)

### Design Principles
- Dark mode first
- Max width: 1200-1400px
- Large hero sections (80-100vh)
- Smooth scroll and subtle animations
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
│   ├── contact/                # Contact form & Private Access
│   ├── insights/               # Articles & thought leadership
│   │   └── [slug]/             # Dynamic article pages
│   ├── marketplace/            # Luxury marketplace
│   │   └── [id]/               # Individual item pages
│   ├── services/               # Service hub
│   │   └── [slug]/             # Individual service pages
│   ├── globals.css             # Global styles & Tailwind
│   ├── layout.tsx              # Root layout
│   ├── not-found.tsx           # 404 page
│   └── page.tsx                # Homepage
├── components/
│   ├── layout/                 # Navigation, Footer
│   ├── sections/               # Hero, ServiceGrid, CTA, FeaturedMarketplace
│   └── ui/                     # Button, Card, Input, Modal, Badge
├── generated/
│   └── prisma/                 # Generated Prisma client
└── lib/
    ├── actions/                # Server actions (contact, insights, marketplace)
    ├── constants.ts            # Site configuration & navigation
    ├── db.ts                   # Prisma client singleton
    └── validations.ts          # Zod validation schemas

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

4. **Deploy**
   - Vercel automatically deploys on every push to `main`
   - Build command runs `prisma generate` automatically

### Automatic Deployments

Every push to the `main` branch triggers a new deployment:
- Vercel detects changes via GitHub webhook
- Runs build process with `prisma generate`
- Deploys to production

## ✅ Testing Checklist

### Mobile (375px) ✓
- [x] Responsive navigation with hamburger menu
- [x] Hero section with stacked content
- [x] Service grid single column layout
- [x] Marketplace items responsive
- [x] Contact form full-width inputs
- [x] Modal system works correctly
- [x] Form validation displays errors
- [x] Success states display properly

### Desktop (1440px) ✓
- [x] Horizontal navigation bar
- [x] Multi-column service grid
- [x] Marketplace filter/sort controls
- [x] Inquiry modal centered overlay
- [x] Footer multi-column layout

### Functionality ✓
- [x] Database connection (Neon PostgreSQL)
- [x] Form submissions save to database
- [x] Dynamic routing for items/articles
- [x] Image optimization with Next.js
- [x] SEO meta tags configured

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, featured items |
| `/about` | Company mission, values, approach |
| `/services` | Service hub with all offerings |
| `/services/[slug]` | Individual service detail pages |
| `/marketplace` | Filterable luxury item listings |
| `/marketplace/[id]` | Item detail with inquiry modal |
| `/insights` | Article/blog listing |
| `/insights/[slug]` | Individual article pages |
| `/contact` | Contact form and information |

## 🔒 Security Notes

- Environment variables are never committed to git
- Database credentials stored securely in Vercel
- Form validation on both client and server
- HTTPS enforced in production

## 📝 License

Private - All rights reserved © 2025 Haka Global
