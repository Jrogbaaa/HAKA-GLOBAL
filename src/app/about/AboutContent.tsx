"use client";

import { motion } from "framer-motion";
import { Eye, Users, Brain, Target } from "lucide-react";

const values = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Anticipation",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Affairs",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Influence",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Pre-Shift Strike",
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
      <section className="w-full flex justify-center py-24 lg:py-32 bg-[var(--background)]">
        <div className="w-full max-w-[1280px] px-6 lg:px-10">
          <div className="flex flex-col items-center text-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
                HAKA Global Consulting
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-tight">
                Where Decisions Take Shape
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[var(--text-secondary)] max-w-2xl"
            >
              We operate before decisions become public.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full flex justify-center bg-[var(--surface)]">
        <div className="w-full max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--accent)] mb-6">
              Our Approach
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)]">
              How We Create Advantage
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 lg:p-8"
              >
                <div className="mb-6 text-[var(--accent)]">{value.icon}</div>
                <h3 className="font-serif text-lg lg:text-xl font-medium text-[var(--foreground)]">
                  {value.title}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};
