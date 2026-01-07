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
    id: "c-level-advisory",
    title: "C-Level Advisory",
    shortDescription: "Confidential counsel for high-stakes decision-makers",
    description:
      "Strategic guidance for executive leadership navigating complex decisions, transitions, and high-stakes opportunities. Confidential counsel for founders, executives, and board members.",
    features: [
      "Executive decision support",
      "Stakeholder alignment strategy",
      "Crisis navigation and counsel",
      "Board-level advisory",
      "Leadership positioning",
    ],
    icon: "person_celebrate",
  },
  {
    id: "leadership-development",
    title: "Leadership Development",
    shortDescription: "Build high-performing executive teams",
    description:
      "Build and optimize high-performing executive teams with proven methodologies and frameworks. Develop leadership capability that drives organizational success.",
    features: [
      "Executive team assessment",
      "Leadership capability building",
      "Succession planning",
      "Performance optimization",
      "Team dynamics enhancement",
    ],
    icon: "groups",
  },
  {
    id: "change-advisory",
    title: "Change Advisory",
    shortDescription: "Navigate organizational transformation",
    description:
      "Navigate organizational transformation with strategic insight and operational excellence. Guide complex change initiatives from strategy through implementation.",
    features: [
      "Transformation strategy",
      "Change management",
      "Organizational design",
      "Culture alignment",
      "Implementation support",
    ],
    icon: "autorenew",
  },
  {
    id: "personal-branding",
    title: "Brand Strategy",
    shortDescription: "Position your personal and corporate brand",
    description:
      "Position your personal and corporate brand for maximum impact and market differentiation. Build authority and visibility in your domain.",
    features: [
      "Brand positioning",
      "Thought leadership development",
      "Visibility strategy",
      "Reputation architecture",
      "Stakeholder communication",
    ],
    icon: "star",
  },
  {
    id: "deal-advisory",
    title: "Deal Advisory",
    shortDescription: "Expert guidance on M&A and transactions",
    description:
      "Expert guidance through M&A transactions, negotiations, and strategic partnerships. Navigate complex deals with confidence and precision.",
    features: [
      "M&A advisory",
      "Transaction support",
      "Negotiation strategy",
      "Due diligence coordination",
      "Post-merger integration",
    ],
    icon: "handshake",
  },
  {
    id: "non-market-strategy",
    title: "Non-Market Strategy",
    shortDescription: "Navigate regulatory and political landscapes",
    description:
      "Navigate regulatory landscapes and political environments with precision and foresight. Strategy beyond markets for institutional and governmental contexts.",
    features: [
      "Regulatory strategy",
      "Government relations",
      "Policy navigation",
      "Stakeholder management",
      "Public affairs",
    ],
    icon: "policy",
  },
] as const;

// Investment Areas (HAKA Global Investment)
export const INVESTMENT_AREAS = [
  {
    id: "real-estate",
    title: "Real Estate",
    shortDescription: "Prime residential and commercial opportunities",
    description:
      "Prime residential and commercial opportunities in strategic global markets. Focus on scarcity, positioning, and long-term value creation.",
    features: [
      "Global market access",
      "Off-market opportunities",
      "Development projects",
      "Commercial assets",
      "Residential portfolios",
    ],
    highlights: ["Prime locations", "Off-market", "Global reach"],
    icon: "home_work",
  },
  {
    id: "private-equity",
    title: "Private Equity",
    shortDescription: "Direct investments in high-growth companies",
    description:
      "Direct investments in high-growth companies across diverse sectors. Focus on businesses with strong fundamentals and clear value creation paths.",
    features: [
      "Direct company investments",
      "Growth equity",
      "Buyout opportunities",
      "Sector expertise",
      "Proprietary deal flow",
    ],
    highlights: ["Growth focus", "Active management", "Sector expertise"],
    icon: "trending_up",
  },
  {
    id: "luxury-assets",
    title: "Luxury Assets",
    shortDescription: "Collectibles, art, and tangible investments",
    description:
      "Investment-grade luxury goods driven by scarcity, demand, and access. Sourcing, authentication, and management of high-value collectibles.",
    features: [
      "Watches & Jewelry",
      "Fine Art",
      "Rare collectibles",
      "Authentication services",
      "Resale and liquidity",
    ],
    highlights: ["Authenticated", "Rare pieces", "Liquid market"],
    icon: "diamond",
  },
  {
    id: "venture-capital",
    title: "Venture Capital",
    shortDescription: "Early-stage investments in innovation",
    description:
      "Early-stage investments in innovative companies shaping the future. Access to promising startups through our proprietary network.",
    features: [
      "Seed to Series A",
      "Technology focus",
      "Global network access",
      "Strategic support",
      "Follow-on capability",
    ],
    highlights: ["Early access", "Tech focus", "Network advantage"],
    icon: "rocket_launch",
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
