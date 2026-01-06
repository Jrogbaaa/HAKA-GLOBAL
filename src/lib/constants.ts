// Site Configuration
export const SITE_CONFIG = {
  name: "HAKA Global",
  tagline: "Pre-Shift Strike",
  description:
    "Strategic advisory and investment for people and companies operating where decisions take shape — before they become public.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://hakaglobal.com",
  email: "info@hakaglobal.com",
};

// Navigation Links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Advisory" },
  { href: "/investment", label: "Investment" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

// Office Locations
export const LOCATIONS = [
  {
    city: "Madrid",
    address: "Calle Hermosilla 7, 28001",
  },
  {
    city: "Barcelona",
    address: "Carrer de Sant Gervasi de Cassoles, 59",
  },
  {
    city: "Rome",
    address: "Via Tripoli 5, 00199",
  },
] as const;

// Advisory Services (HAKA Global Consulting)
export const SERVICES = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory & Positioning",
    shortDescription: "Defining relevance, authority, and long-term advantage",
    description:
      "Defining and refining strategic positioning where relevance, authority, and long-term advantage are built — beyond visibility or messaging.",
    features: [
      "Strategic positioning assessment",
      "Long-term advantage architecture",
      "Authority building frameworks",
      "Relevance mapping and optimization",
      "Competitive differentiation strategy",
    ],
    icon: "strategy",
  },
  {
    id: "executive-advisory",
    title: "C-Level & Executive Advisory",
    shortDescription: "Confidential counsel for high-stakes decision-makers",
    description:
      "Confidential counsel for founders, executives, and decision-makers operating under high stakes, public exposure, and institutional complexity.",
    features: [
      "Executive decision support",
      "Stakeholder alignment strategy",
      "Crisis navigation and counsel",
      "Board-level advisory",
      "Leadership positioning",
    ],
    icon: "account_circle",
  },
  {
    id: "personal-corporate-affairs",
    title: "Personal & Corporate Affairs",
    shortDescription: "Aligning reputation, relationships, and positioning",
    description:
      "Strategic advisory on personal and corporate interests, aligning reputation, relationships, and positioning within decision-making environments.",
    features: [
      "Reputation architecture",
      "Relationship strategy",
      "Interest alignment",
      "Positioning optimization",
      "Stakeholder management",
    ],
    icon: "handshake",
  },
  {
    id: "non-market-strategy",
    title: "Non-Market Strategy",
    shortDescription: "Strategy beyond traditional competitive frameworks",
    description:
      "Strategy beyond markets: institutions, regulation, public perception, and power dynamics that shape outcomes outside traditional competitive frameworks.",
    features: [
      "Institutional navigation",
      "Regulatory strategy",
      "Public perception management",
      "Power dynamics analysis",
      "Non-market environment mapping",
    ],
    icon: "balance",
  },
  {
    id: "reputation-trust",
    title: "Public Reputation, Trust & Consensus",
    shortDescription: "Building legitimacy before consensus becomes public",
    description:
      "Building, protecting, and reinforcing reputational capital, legitimacy, and trust among key stakeholders — before consensus becomes public.",
    features: [
      "Reputational capital building",
      "Trust architecture",
      "Consensus shaping",
      "Stakeholder legitimacy",
      "Pre-emptive positioning",
    ],
    icon: "verified",
  },
  {
    id: "ai-intelligence",
    title: "AI-Driven Strategic Intelligence",
    shortDescription: "Context analysis and scenario anticipation",
    description:
      "Advanced intelligence systems applied to context analysis, scenario anticipation, and decision support across personal, corporate, and non-market environments.",
    features: [
      "Contextual analysis systems",
      "Scenario anticipation",
      "Decision support frameworks",
      "Weak signal detection",
      "Environment mapping",
    ],
    icon: "psychology",
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    shortDescription: "Strategic counsel bridging advisory and investment",
    description:
      "Strategic financial counsel supporting growth, restructuring, transactions, and capital decisions — often acting as a bridge toward investment activity.",
    features: [
      "Growth strategy counsel",
      "Restructuring advisory",
      "Transaction support",
      "Capital decision frameworks",
      "Investment bridge advisory",
    ],
    icon: "trending_up",
  },
] as const;

// Investment Areas (HAKA Global Investment)
export const INVESTMENT_AREAS = [
  {
    id: "real-estate",
    title: "Worldwide Real Estate",
    shortDescription: "Scarcity, positioning, and long-term relevance",
    description:
      "Strategic real estate investments across key global locations, focused on scarcity, positioning, and long-term relevance rather than short-term cycles.",
    features: [
      "Global market access",
      "Scarcity-driven selection",
      "Long-term positioning",
      "Strategic location analysis",
      "Off-market opportunities",
    ],
    icon: "apartment",
  },
  {
    id: "private-investments",
    title: "Private & Strategic Investments",
    shortDescription: "Direct investments with aligned governance and vision",
    description:
      "Direct investments in companies and structures where governance, strategy, and long-term vision are aligned. Includes access to startups and early-stage opportunities typically unavailable to the broader market, sourced through private networks and proprietary intelligence.",
    features: [
      "Direct company investments",
      "Early-stage access",
      "Private network sourcing",
      "Governance alignment",
      "Proprietary deal flow",
    ],
    icon: "rocket_launch",
  },
  {
    id: "precious-metals",
    title: "Precious Metals",
    shortDescription: "Capital preservation and portfolio balance",
    description:
      "Targeted exposure to precious metals as instruments of capital preservation, optionality, and portfolio balance — approached with strategic timing and discipline.",
    features: [
      "Capital preservation strategy",
      "Portfolio balancing",
      "Strategic timing",
      "Optionality positioning",
      "Disciplined allocation",
    ],
    icon: "diamond",
  },
  {
    id: "luxury-assets",
    title: "Luxury Assets & Collectibles",
    shortDescription: "Access defines value",
    description:
      "Luxury goods treated as investment-grade assets, driven by scarcity, demand, and access. We provide sourcing, access, and resale of highly sought-after and often inaccessible pieces.",
    features: [
      "Patek Philippe, Audemars Piguet, Rolex",
      "Hermès, Chanel, Goyard",
      "Fine jewelry and accessories",
      "Authentication and provenance",
      "Resale and liquidity services",
    ],
    icon: "watch",
  },
] as const;

// Service interest options for forms
export const INTEREST_OPTIONS = [
  { value: "strategic-advisory", label: "Strategic Advisory & Positioning" },
  { value: "executive-advisory", label: "C-Level & Executive Advisory" },
  { value: "personal-corporate-affairs", label: "Personal & Corporate Affairs" },
  { value: "non-market-strategy", label: "Non-Market Strategy" },
  { value: "reputation-trust", label: "Public Reputation & Trust" },
  { value: "ai-intelligence", label: "AI-Driven Strategic Intelligence" },
  { value: "financial-advisory", label: "Financial Advisory" },
  { value: "investment", label: "Investment Opportunities" },
  { value: "general", label: "General Inquiry" },
] as const;

// Investment categories for marketplace/investment pages
export const INVESTMENT_CATEGORIES = [
  { value: "all", label: "All Categories" },
  { value: "real-estate", label: "Real Estate" },
  { value: "private-investments", label: "Private Investments" },
  { value: "precious-metals", label: "Precious Metals" },
  { value: "luxury-assets", label: "Luxury Assets" },
] as const;

// Insights categories
export const INSIGHTS_CATEGORIES = [
  { value: "all", label: "All" },
  { value: "strategy", label: "Strategy" },
  { value: "affairs", label: "Affairs" },
  { value: "intelligence", label: "Intelligence" },
  { value: "investment", label: "Investment" },
] as const;
