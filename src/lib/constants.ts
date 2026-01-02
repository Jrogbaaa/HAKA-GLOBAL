// Site Configuration
export const SITE_CONFIG = {
  name: "Haka",
  tagline: "A Private Gateway to Influence, Assets, and Opportunity",
  description:
    "Personal Branding. Global Real Estate. Strategic Investments. Luxury Access.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://hakaglobal.com",
  email: "info@hakaglobal.com",
};

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

// Services
export const SERVICES = [
  {
    id: "personal-branding",
    title: "Personal Branding",
    shortDescription: "Executive presence, influence, and strategic positioning",
    description:
      "Craft a distinctive personal brand that commands attention and opens doors. We help executives and entrepreneurs develop authentic narratives, build thought leadership, and position themselves as authorities in their industries.",
    features: [
      "Executive positioning strategy",
      "Thought leadership development",
      "Media presence optimization",
      "Speaking engagement preparation",
      "Digital presence architecture",
    ],
    icon: "crown",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    shortDescription: "Luxury properties and global investment opportunities",
    description:
      "Access exclusive real estate opportunities across global markets. From prestigious residential estates to high-yield commercial investments, we provide discreet acquisition services and strategic portfolio management.",
    features: [
      "Off-market property access",
      "International market intelligence",
      "Investment analysis & due diligence",
      "Portfolio diversification strategy",
      "Concierge acquisition services",
    ],
    icon: "building",
  },
  {
    id: "financial-advisory",
    title: "Financial Investment Advisory",
    shortDescription: "Strategic wealth growth and portfolio optimization",
    description:
      "Navigate complex financial landscapes with confidence. Our advisory services encompass alternative investments, wealth preservation strategies, and bespoke financial structuring for sophisticated investors.",
    features: [
      "Alternative investment access",
      "Wealth preservation planning",
      "Tax-efficient structuring",
      "Risk management strategy",
      "Family office services",
    ],
    icon: "trending-up",
  },
  {
    id: "luxury-marketplace",
    title: "Luxury Marketplace",
    shortDescription: "Curated high-end assets and exclusive experiences",
    description:
      "Discover a curated collection of exceptional assets and experiences. From rare timepieces and fine art to luxury vehicles and bespoke travel, we connect discerning clients with extraordinary opportunities.",
    features: [
      "Authenticated luxury goods",
      "Rare collectibles & art",
      "Luxury vehicle acquisition",
      "Bespoke travel experiences",
      "Private sale access",
    ],
    icon: "diamond",
  },
] as const;

// Service interest options for forms
export const INTEREST_OPTIONS = [
  { value: "personal-branding", label: "Personal Branding" },
  { value: "real-estate", label: "Real Estate" },
  { value: "investments", label: "Financial Investments" },
  { value: "marketplace", label: "Luxury Marketplace" },
  { value: "general", label: "General Inquiry" },
] as const;

// Marketplace categories
export const MARKETPLACE_CATEGORIES = [
  { value: "all", label: "All Categories" },
  { value: "watches", label: "Watches" },
  { value: "vehicles", label: "Vehicles" },
  { value: "art", label: "Art" },
  { value: "property", label: "Property" },
  { value: "experiences", label: "Experiences" },
  { value: "jewelry", label: "Jewelry" },
] as const;

// Insights categories
export const INSIGHTS_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "strategy", label: "Strategy" },
  { value: "market-trends", label: "Market Trends" },
  { value: "lifestyle", label: "Lifestyle" },
  { value: "investments", label: "Investments" },
] as const;

