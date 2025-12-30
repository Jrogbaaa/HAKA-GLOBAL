"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Users, Award } from "lucide-react";

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Discretion",
    description:
      "Complete confidentiality in every interaction. Your privacy is not just protected—it's paramount.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Reach",
    description:
      "Access to opportunities across continents, with local expertise and international perspective.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Personalization",
    description:
      "Bespoke solutions tailored to your unique position, goals, and vision for the future.",
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Excellence",
    description:
      "Uncompromising standards in everything we do, from advisory services to asset curation.",
  },
];

export const AboutContent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      {/* Mission Section */}
      <section className="w-full flex justify-center py-16 lg:py-24 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
                Our Mission
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)] leading-tight">
                Empowering Extraordinary Lives
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Haka Global was founded on a singular belief: that exceptional
                individuals deserve exceptional guidance. We serve as trusted
                advisors to entrepreneurs, executives, and visionaries who are
                shaping the world.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                Our approach combines deep expertise with genuine discretion,
                offering access to opportunities that remain invisible to the
                ordinary eye. From building influential personal brands to
                acquiring rare assets, we handle the extraordinary with the care
                it deserves.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full flex justify-center bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 pt-16 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 lg:mb-24"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              Our Values
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)]">
              Principles That Guide Us
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="flex flex-col p-10 lg:p-12 bg-[var(--background)] border-l-2 border-[var(--accent)]/30 hover:border-[var(--accent)] transition-colors duration-300"
              >
                <div className="mb-8 text-[var(--accent)]">{value.icon}</div>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-[var(--foreground)] mb-5">
                  {value.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm lg:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom spacing */}
          <div className="pb-20 lg:pb-28" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full flex justify-center bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 pt-16 lg:pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
          >
            {[
              { value: "$2B+", label: "Assets Managed" },
              { value: "40+", label: "Countries Served" },
              { value: "500+", label: "Elite Clients" },
              { value: "15+", label: "Years of Excellence" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-serif text-4xl lg:text-5xl font-medium text-[var(--accent)]">
                  {stat.value}
                </p>
                <p className="mt-4 text-xs lg:text-sm uppercase tracking-wider text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Bottom spacing */}
          <div className="pb-16 lg:pb-24" />
        </div>
      </section>
    </>
  );
};

