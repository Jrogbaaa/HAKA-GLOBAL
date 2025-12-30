import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our Expertise - Personal Branding, Global Real Estate, Financial Advisory, and Luxury Marketplace access.",
};

const services = [
  {
    id: "personal-branding",
    category: "Reputation Management",
    icon: "person",
    title: "Defining the Narrative",
    description:
      "We craft bespoke personal branding strategies for executives and public figures. In a world of noise, we ensure your reputation precedes you with elegance, authority, and clarity.",
    features: [
      "Digital Presence Optimization",
      "Crisis Management & PR",
      "Thought Leadership Development",
    ],
    cta: "Start Your Journey",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjVntMkMHHMNY3TOWGwCKXSuE52G2u46LPYjVH0C4M1pZTArGVtIex0jPirzuJTZYUqDonXtfmpTicPq__1HwUSVGmCnCjmkZgEso-xHqY_LjCPvf5sUKH6wwkLRH1uuU60hPS966wOmSnX_P4AYMsjtY24A1BdI1wBNpbM6Z6KISYrUw1jAVCkv4B67uN3Lp1zo1ux2WgFz9aunSXm7z_Ta5IiY4wJ760oPnjn-5ulEdKUe9so-DISVdK9ua0Gbv8nlt8zLQzbO8",
    imageAlt: "Executive portrait in modern office",
    reverse: false,
    bgDark: true,
  },
  {
    id: "real-estate",
    category: "Real Estate",
    icon: "villa",
    title: "Global Sanctuaries",
    description:
      "Exclusive access to off-market real estate and luxury estates worldwide. From urban penthouses in New York to secluded island retreats in the Mediterranean, we find the exceptional.",
    stats: [
      { value: "40+", label: "Countries" },
      { value: "$2B+", label: "Portfolio Value" },
    ],
    cta: "View Portfolio",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAADPByCw6acvB4Qx5xtuFP-dvN7EeIHq1yyOgTalG6yY23KYZkHv8vBGQkwoXgzDtlRZnVIkoSya0bEKYEAjeyWPb9wp-SdHYBQ9OdR8zDbUZzrdkEyACzgzwuXVgt0JkqItX8Yoy6bwD-X7Qz0KQ3IERuM1m7lwpS8-Rx4tow_b-u6qyNd5LPEkq-jqsEWjw2qiT29atsJ4klKzwkSlHuug6th6viuYBHyqJax6Ii8D2PCH_yDZtYbr11Xf_Ar49Ya4OBDqtzrgE",
    imageAlt: "Modern luxury penthouse interior",
    reverse: true,
    bgDark: false,
  },
  {
    id: "financial-advisory",
    category: "Wealth Architecture",
    icon: "account_balance",
    title: "Advisory & Investment",
    description:
      "Strategic asset allocation and multigenerational planning designed for ultra-high-net-worth individuals. We don't just manage wealth; we engineer its future through private equity, venture capital, and traditional markets.",
    cta: "Consult an Advisor",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTrgbpv6xb2b1bI8hRrdOmjsd35EJzCL-KiI2_h09cMl8D_Dx89YrpCvQPeRFzwMCZSjMfllLSBH9cU3j5uGCmC_OYFGRIVkiGN342AQMj95YotHloh7ZIdK9PtdaVD-EXvmkhzTRQ6HLsQa9beMXY5-fbBQVpeMdtsmkRoyEfH3XLkSUGradjbB9Zzp-p9GUWommuqMP5qlhhxHDMr03nvOoDXuCD9EDjWNVBuTIk1PvUcuhmYl7pZyna27G6WHtTs3Itv6XBBCw",
    imageAlt: "Golden topographic map symbolizing wealth growth",
    reverse: false,
    bgDark: true,
    overlay: true,
  },
  {
    id: "luxury-marketplace",
    category: "Marketplace",
    icon: "diamond",
    title: "Curated Excellence",
    description:
      "Access a vetted selection of rare assets. From fine art and horology to classic automobiles and yachts, our marketplace connects discerning buyers with timeless masterpieces.",
    tags: ["Fine Art", "Horology", "Automotive"],
    cta: "Request Access",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDJS9hkR03JjBvCKU3EQEae7ROhxUgMrHEQXZe6Kl1XD3hjT8eQaBxYDlEJ_m4J8vYFpFSvBSOFU98jPdTuuFc-pjODHPhflEB4huFk8u7gk4rbeJ7VAuEVh4LNx8ORHLlPQPUOoth6JAlw2rOIJ97mFJbVszt4w7a9zh7_xKFgd98PLNEzjvKv7k22DzYoBHCvnJMWyOFlfYQxSDd9jgbYDulvCGbYv6MuuIAorzGulNWm3iTQl4iooz7PgkLE7WmPbUqdPOJHGjw",
    imageAlt: "Luxury mechanical watch movement",
    reverse: true,
    bgDark: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(24, 22, 17, 0.7) 0%, rgba(24, 22, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnxEkcjhjYkzHjwFSLLW7Q21i9AEgnDVvMNGGUvmQxyqweUJJz93duzjL5OF3GairMOe0uUzrdAriPyzx9k-xRMCxJkSTyid5Ivl7HA3rrZijT20XZTLGyxeSXGfnCW0LdG05csu_3cMbXdaMxwk8LRkVqkv7jsU7XOeS1Mzer6nzdTFCbtdya1N0MYu9Qmx4JyQT6UbnJgm3Sea5Da-shxnvY2uWo6diNoMrNwgvy6CLKBaw3zG0h-AcNX7hGlanLkzLzlcX7Smw")`,
          }}
          role="img"
          aria-label="Abstract dark luxury texture with gold dust particles"
        />
        <div className="relative z-10 flex flex-col gap-6 text-center max-w-4xl mx-auto fade-up">
          <h1 className="text-white text-5xl md:text-7xl font-black font-serif leading-tight tracking-tight">
            Our Expertise
          </h1>
          <h2 className="text-[var(--text-secondary)] text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Elevating life and legacy through global excellence. We provide a
            sanctuary for your wealth, reputation, and lifestyle.
          </h2>
          <div className="pt-4 flex justify-center">
            <button
              className="group flex items-center gap-2 cursor-pointer justify-center overflow-hidden rounded-full h-12 px-8 bg-[var(--primary)] text-[var(--background)] text-base font-bold leading-normal tracking-wide hover:bg-white transition-all duration-300"
              tabIndex={0}
              aria-label="Explore Offerings"
            >
              <span>Explore Offerings</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-y-1 transition-transform">
                arrow_downward
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          className={`w-full flex justify-center py-20 md:py-32 ${
            service.bgDark
              ? "bg-[var(--surface)]"
              : "bg-[var(--background)]"
          } ${index === services.length - 1 ? "relative overflow-hidden" : ""}`}
        >
          {/* Decorative gradient for last section */}
          {index === services.length - 1 && (
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--primary)]/5 to-transparent pointer-events-none" />
          )}

          <div className="w-full max-w-[1280px] px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              {/* Image Side */}
              <div
                className={`${
                  service.reverse ? "md:order-2" : "order-2 md:order-1"
                } relative group`}
              >
                <div className="absolute -inset-2 bg-[var(--primary)]/20 rounded-lg blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                <div
                  className={`relative ${
                    service.id === "real-estate"
                      ? "aspect-[16/10]"
                      : service.id === "luxury-marketplace"
                      ? "aspect-[16/9]"
                      : "aspect-[4/5]"
                  } w-full overflow-hidden rounded-lg`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url("${service.imageUrl}")` }}
                    role="img"
                    aria-label={service.imageAlt}
                  />

                  {/* Overlay for Financial Advisory */}
                  {service.overlay && (
                    <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex gap-4 items-center">
                        <div className="size-12 rounded-full bg-[var(--primary)]/20 flex items-center justify-center backdrop-blur-sm border border-[var(--primary)]/30">
                          <span className="material-symbols-outlined text-[var(--primary)]">
                            trending_up
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            Sustainable Growth
                          </p>
                          <p className="text-xs text-[var(--text-secondary)]">
                            Long-term vision
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div
                className={`${
                  service.reverse ? "md:order-1" : "order-1 md:order-2"
                } flex flex-col gap-6 md:gap-8`}
              >
                <div className="flex items-center gap-3 text-[var(--primary)]/80">
                  <span className="material-symbols-outlined">
                    {service.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {service.category}
                  </span>
                </div>

                <h2 className="text-white text-3xl md:text-5xl font-serif font-bold leading-tight">
                  {service.title}
                </h2>

                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Features List */}
                {service.features && (
                  <ul className="flex flex-col gap-3 text-gray-300">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--primary)] text-sm">
                          check_circle
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Stats Grid */}
                {service.stats && (
                  <div className="grid grid-cols-2 gap-4 text-gray-300 pt-2">
                    {service.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-[var(--surface)] p-4 rounded border border-white/5"
                      >
                        <span className="block text-2xl font-serif text-white mb-1">
                          {stat.value}
                        </span>
                        <span className="text-xs text-[var(--text-muted)] uppercase">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                {service.tags && (
                  <div className="flex gap-4 mt-2">
                    {service.tags.map((tag) => (
                      <div
                        key={tag}
                        className="px-4 py-2 bg-[var(--surface)] rounded-full border border-white/10 text-xs text-gray-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4">
                  <Link href={`/services/${service.id}`} tabIndex={0}>
                    <button
                      className="flex w-fit cursor-pointer items-center justify-center rounded-full h-12 px-8 border border-white/20 hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] transition-all duration-300 text-sm font-bold tracking-wider uppercase"
                      tabIndex={-1}
                    >
                      {service.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
