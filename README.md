# Haka Global

A Private Gateway to Influence, Assets, and Opportunity.

Luxury global advisory & marketplace platform built with Next.js 16, Tailwind CSS, Prisma, and PostgreSQL (Neon).

## Features

- **Personal Branding** - Executive presence and strategic positioning
- **Real Estate** - Luxury properties and global investment opportunities
- **Financial Advisory** - Strategic wealth growth and portfolio optimization
- **Luxury Marketplace** - Curated high-end assets and exclusive experiences

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: PostgreSQL via Neon
- **ORM**: Prisma
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Neon PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Jrogbaaa/HAKA-GLOBAL.git
   cd HAKA-GLOBAL
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your Neon database credentials:
   ```
   DATABASE_URL="postgresql://..."
   DIRECT_URL="postgresql://..."
   ```

4. Set up the database:
   ```bash
   npm run db:push
   npm run db:seed
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Scripts

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

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── insights/          # Articles/blog
│   ├── marketplace/       # Luxury items
│   └── services/          # Service pages
├── components/
│   ├── layout/            # Navigation, Footer
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── lib/
│   ├── actions/           # Server actions
│   ├── db.ts              # Prisma client
│   ├── constants.ts       # Site configuration
│   └── validations.ts     # Zod schemas
└── prisma/
    ├── schema.prisma      # Database schema
    └── seed.ts            # Seed data
```

## Deployment

### Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables:
   - `DATABASE_URL`
   - `DIRECT_URL`
4. Deploy

The build command automatically runs `prisma generate` before building.

## License

Private - All rights reserved © Haka Global
