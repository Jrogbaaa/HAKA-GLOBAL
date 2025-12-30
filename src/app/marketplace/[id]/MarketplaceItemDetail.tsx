"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { inquiryFormSchema, type InquiryFormData } from "@/lib/validations";
import { submitMarketplaceInquiry } from "@/lib/actions/marketplace";

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number | null;
  featured: boolean;
  available: boolean;
}

interface MarketplaceItemDetailProps {
  item: MarketplaceItem;
}

export const MarketplaceItemDetail = ({ item }: MarketplaceItemDetailProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormData>({
    resolver: zodResolver(inquiryFormSchema),
    defaultValues: {
      itemId: item.id,
    },
  });

  const formatPrice = (price: number | null) => {
    if (price === null) return "Price on Request";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    if (isSubmitted) {
      setIsSubmitted(false);
      reset();
    }
  };

  const handleFormSubmit = async (data: InquiryFormData) => {
    const result = await submitMarketplaceInquiry(data);
    if (result.success) {
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <section className="pt-32 pb-24 lg:pb-32 bg-[var(--background)]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
              tabIndex={0}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Marketplace
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-[var(--surface)]"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="flex gap-2 mb-4">
                <Badge variant="gold">{item.category}</Badge>
                {item.featured && <Badge variant="default">Featured</Badge>}
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--foreground)]">
                {item.title}
              </h1>

              <p className="mt-4 text-2xl font-medium text-[var(--accent)]">
                {formatPrice(item.price)}
              </p>

              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-muted)] mb-4">
                  Description
                </h2>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-[var(--border)]">
                <h2 className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-muted)] mb-4">
                  Availability
                </h2>
                <p className="text-[var(--text-secondary)]">
                  {item.available
                    ? "Available for immediate inquiry"
                    : "Currently unavailable"}
                </p>
              </div>

              <div className="mt-auto pt-8">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleOpenModal}
                  disabled={!item.available}
                  className="w-full sm:w-auto"
                >
                  Request Details
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inquiry Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={isSubmitted ? "Thank You" : "Request Details"}
      >
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--accent-muted)] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[var(--accent)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-[var(--foreground)] mb-2">
              Inquiry Submitted
            </h3>
            <p className="text-[var(--text-secondary)]">
              A member of our team will be in touch within 24 hours.
            </p>
            <Button
              variant="secondary"
              onClick={handleCloseModal}
              className="mt-6"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
            <p className="text-[var(--text-secondary)] mb-6">
              Interested in <span className="text-[var(--foreground)]">{item.title}</span>?
              Submit your details and we&apos;ll connect you with our specialist.
            </p>

            <input type="hidden" {...register("itemId")} />

            <Input
              label="Name"
              placeholder="Your full name"
              {...register("name")}
              error={errors.name?.message}
            />

            <Input
              label="Email"
              type="email"
              placeholder="your@email.com"
              {...register("email")}
              error={errors.email?.message}
            />

            <Input
              label="Phone (Optional)"
              type="tel"
              placeholder="+1 (555) 000-0000"
              {...register("phone")}
              error={errors.phone?.message}
            />

            <Textarea
              label="Message (Optional)"
              placeholder="Any specific questions or requirements..."
              {...register("message")}
              error={errors.message?.message}
            />

            <Button
              type="submit"
              variant="primary"
              isLoading={isSubmitting}
              className="w-full"
            >
              Submit Inquiry
            </Button>
          </form>
        )}
      </Modal>
    </>
  );
};

