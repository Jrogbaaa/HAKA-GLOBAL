"use client";

import Link from "next/link";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
  imageAlt: string;
}

interface ServiceGridProps {
  services?: ServiceCard[];
  sectionTitle?: string;
  sectionDescription?: string;
}

const defaultServices: ServiceCard[] = [
  {
    id: "personal-branding",
    title: "Personal Branding",
    description:
      "Curating the narrative of the world's most influential leaders and visionaries.",
    icon: "campaign",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAWPNP3XOpTg_r6MeDT2GC1XNVl8dMnoR_uP4YAGBR4LWkEYZYE4jJz3_R6962pH6eF2M816DtGOtR797lBYrn4CYQHbjqamWCUv_4j0DMJwT2i_y9-qyi-ujoggMQC81AbjR1VNabjHa5IiUkDEfoJPEy1w5gJoGJuxoj0ZHPuGmyWfs6Wa0kVHedEc74eh5w8CbeL3yb5rmOFaFW9HB7fLl2vTR8gpU8bRJ2aegeuihtZj2z-zTxH3v-dE7dLODLSPuhH6vX2-Vs",
    imageAlt: "Confident executive giving a presentation in a modern office",
  },
  {
    id: "real-estate",
    title: "Global Real Estate",
    description:
      "Acquisition, management, and development of prime global assets.",
    icon: "apartment",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAyeotCyPoodTDrhk_achk3y70LFOeLrHfnwvt60zUS2pMh77xL44YaP7b84kd5VjaDJfU5MzH0LF6zB7dRTiXe7kYGGE87PtUkDZMkaoNEj3R26n3ZyyvbBdp0Q3JZ08uG60nTUlqj0STPoDk9x3r24Ns4muAS0KDgHDksTEe8lejEwKmIFp5m4K3qtQCGmbQlgss2Kbkj5CAB6nQQYBUUfEWfM2wdvILTxqSd0EB7gpWj9WdAFOhFnywrzkrvKMWvYY3-Ro0szCA",
    imageAlt: "Luxury modern real estate interior with floor to ceiling windows",
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    description:
      "Strategic wealth preservation and aggressive growth portfolios.",
    icon: "monitoring",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4jyFkWNqHUPEUn9mp3nOFGjKPALTWZjWx88V-8zz1VwRSL2uyFYqkB1lg5N6oZQutgweNr3fMmVmuh1ussjKv7n2f0t7ATnZwhqHU5l9GXWrL_tj5CeHE-0J7Vgo-j93WBDY6dQ_Nsn8wJ_6kbKfvyqpXiiBeluUEQmP2xuBMQeWiHB2LRQZXP3M0EFE0Xhoi5ZFFJl8_dTMSfN4tflRFH_VZPLBo6UdbMtXB5vzdKy-ALpXk42MV2lMFuJwrzigHAOXaGVsMT7U",
    imageAlt: "Abstract financial data visualization graphs on dark background",
  },
  {
    id: "luxury-marketplace",
    title: "Luxury Marketplace",
    description:
      "Sourcing the unobtainable for the discerning few. From art to aviation.",
    icon: "diamond",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXX8u70ZCCy1qkfoq8z4uDGcfmDrpiujdpCkm8BEcBzFsRcATqXdXotrABN0CbZW9IHhaNOmqY5eV_Ogt9QrtxcHlVCS-bc8tLQKA_mLdAy6iP4uG5Qb5T0J2IQ5T5sm9j5sdakwPwnZfwpD7bMK7m36bIb6GjztcBxOGtLpnHGHbl9PLEjNCv_YsIUYVMfMuziwQ3XNbpS4Jw7ETDrYy4jqzjs0iXwSVdXEhd4VzVtouGN_5oLnP281w-KHRZk_fImyTEAms3MHc",
    imageAlt: "Luxury watch and premium leather accessories",
  },
];

export const ServiceGrid = ({
  services = defaultServices,
  sectionTitle = "The Core Four",
  sectionDescription = "We bridge the gap between capital and lifestyle. Haka Global is the architect of your international footprint.",
}: ServiceGridProps) => {
  return (
    <section className="w-full flex justify-center bg-[var(--background)] py-24">
      <div className="w-full flex max-w-[1280px] flex-col gap-16 px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
              {sectionTitle}
            </h2>
            <p className="mt-4 text-lg text-white/70">{sectionDescription}</p>
          </div>
          <Link
            href="/services"
            className="group flex items-center gap-2 text-[var(--primary)] transition-opacity hover:opacity-80"
            tabIndex={0}
            aria-label="View all services"
          >
            <span className="text-sm font-bold uppercase tracking-wider">
              View All Services
            </span>
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative flex flex-col gap-4 overflow-hidden rounded-xl border border-white/10 bg-[var(--surface)] p-2 transition-all hover:border-[var(--primary)]/50 hover:bg-[var(--border-subtle)]"
              tabIndex={0}
              aria-label={`Learn more about ${service.title}`}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 z-10" />
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url("${service.imageUrl}")` }}
                  role="img"
                  aria-label={service.imageAlt}
                />
                {/* Icon */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="material-symbols-outlined text-white mb-2 text-3xl">
                    {service.icon}
                  </span>
                </div>
              </div>

              {/* Text Content */}
              <div className="px-3 pb-4">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
