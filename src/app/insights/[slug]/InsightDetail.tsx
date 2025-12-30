"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import { INSIGHTS_CATEGORIES } from "@/lib/constants";

interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  publishedAt: Date;
}

interface InsightDetailProps {
  insight: Insight;
}

export const InsightDetail = ({ insight }: InsightDetailProps) => {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getCategoryLabel = (value: string) => {
    const category = INSIGHTS_CATEGORIES.find((c) => c.value === value);
    return category?.label || value;
  };

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("## ")) {
        return (
          <h2
            key={index}
            className="font-serif text-2xl font-medium text-[var(--foreground)] mt-10 mb-4"
          >
            {line.replace("## ", "")}
          </h2>
        );
      }
      if (line.startsWith("### ")) {
        return (
          <h3
            key={index}
            className="font-serif text-xl font-medium text-[var(--foreground)] mt-8 mb-3"
          >
            {line.replace("### ", "")}
          </h3>
        );
      }
      if (line.startsWith("- **")) {
        const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={index} className="ml-6 mb-2 text-[var(--text-secondary)]">
              <span className="font-medium text-[var(--foreground)]">
                {match[1]}:
              </span>{" "}
              {match[2]}
            </li>
          );
        }
      }
      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-6 mb-2 text-[var(--text-secondary)]">
            {line.replace("- ", "")}
          </li>
        );
      }
      if (line.match(/^\d+\. \*\*/)) {
        const match = line.match(/^\d+\. \*\*(.+?)\*\*: (.+)/);
        if (match) {
          return (
            <li key={index} className="ml-6 mb-2 text-[var(--text-secondary)] list-decimal">
              <span className="font-medium text-[var(--foreground)]">
                {match[1]}:
              </span>{" "}
              {match[2]}
            </li>
          );
        }
      }
      if (line.trim() === "") {
        return <div key={index} className="h-4" />;
      }
      return (
        <p key={index} className="text-[var(--text-secondary)] leading-relaxed mb-4">
          {line}
        </p>
      );
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[var(--background)]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
              tabIndex={0}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="gold" className="mb-6">
              {getCategoryLabel(insight.category)}
            </Badge>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)] leading-tight">
              {insight.title}
            </h1>

            <div className="mt-6 flex items-center gap-4 text-sm text-[var(--text-muted)]">
              <span>{insight.author}</span>
              <span>•</span>
              <span>{formatDate(insight.publishedAt)}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {insight.imageUrl && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pb-16"
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={insight.imageUrl}
                alt={insight.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.section>
      )}

      {/* Content */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="pb-24"
      >
        <div className="max-w-[700px] mx-auto px-6 lg:px-8">
          <div className="prose-custom">{renderContent(insight.content)}</div>
        </div>
      </motion.section>

      <CTASection
        title="Continue the Conversation"
        description="Interested in discussing these insights further? Connect with our advisory team."
      />
    </>
  );
};

