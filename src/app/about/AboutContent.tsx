"use client";

import { motion } from "framer-motion";
import { Eye, Users, Brain, Target } from "lucide-react";

const values = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Anticipation",
    description:
      "By combining contextual judgment with AI-driven strategic intelligence, we analyze decision-making environments, identify early signals, and anticipate scenarios before they become visible.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Affairs",
    description:
      "The management of positioning, relationships, and credibility in environments where power, interests, and perception converge.",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Influence",
    description:
      "We help navigate groups of influence, shape alignment among key actors, and build consensus before positions harden. Influence, for us, is not pressure — it is strategic alignment achieved early.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Pre-Shift Strike",
    description:
      "Knowing when to move, where to stand, and who needs to be in the room — before the shift happens. This is how we operate.",
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
                HAKA Global Consulting
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)] leading-tight">
                Where Decisions Take Shape
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
                We support personal and corporate affairs with anticipation,
                strategic clarity, access, and long-term vision. We operate
                where decisions take shape, before they become public.
              </p>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                We read context, influence outcomes, and position people and
                companies where it matters most. Strategy, reputation, and
                capital move together.
              </p>
              <div className="pt-4 space-y-3 text-[var(--foreground)]">
                <p>We create opinions and build consensus.</p>
                <p>We advise with clarity.</p>
                <p>We invest with conviction.</p>
                <p>We act with access.</p>
              </div>
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
              Our Approach
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)]">
              How We Create Advantage
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

      {/* AI Section */}
      <section className="w-full flex justify-center bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 pt-16 lg:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
                AI as Strategic Leverage
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)] leading-tight">
                Clarity, Not Automation
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
                At HAKA, artificial intelligence is not a product, a toolset, or
                a standalone service. It is a{" "}
                <span className="text-[var(--foreground)]">
                  strategic leverage layer
                </span>{" "}
                embedded into our judgment and advisory processes.
              </p>
              <div className="space-y-4">
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  We use AI to:
                </p>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)]">•</span>
                    Enhance contextual analysis
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)]">•</span>
                    Map complex decision-making environments
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)]">•</span>
                    Detect weak signals
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--accent)]">•</span>
                    Simulate scenarios before they materialize
                  </li>
                </ul>
              </div>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                The objective is not automation, but clarity: reducing
                uncertainty, improving timing, and supporting higher-quality
                decisions at critical moments.
              </p>
              <p className="text-[var(--foreground)] font-medium">
                AI amplifies human judgment. It does not replace it.
              </p>
            </motion.div>
          </div>

          {/* Bottom spacing */}
          <div className="pb-16 lg:pb-24" />
        </div>
      </section>

      {/* How We Work Section */}
      <section className="w-full flex justify-center bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              Engagement Model
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)]">
              How We Work
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-[var(--background)] border border-[var(--border)]"
            >
              <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-4">
                We work selectively
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Mandate-based engagements with clients where our capabilities
                align with their needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-[var(--background)] border border-[var(--border)]"
            >
              <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-4">
                We operate with discretion
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Confidential by default. We do not seek visibility. We operate
                where relevance is decided.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 bg-[var(--background)] border border-[var(--border)]"
            >
              <h3 className="font-serif text-xl font-medium text-[var(--foreground)] mb-4">
                We prioritize judgment
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Advisory is not execution support. It is strategic clarity under
                complexity.
              </p>
            </motion.div>
          </div>

          {/* When Clients Engage Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 mb-8 lg:mb-12 p-10 lg:p-12 border border-[var(--border)] bg-[var(--background)]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              When Clients Engage Us
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-[var(--accent)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When visibility, access, and timing matter
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--accent)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When influence is necessary
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--accent)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When decisions cannot be improvised
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--accent)]">•</span>
                <p className="text-[var(--text-secondary)]">
                  When context is as important as capital
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
