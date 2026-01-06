import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  organization: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  interest: z.string().min(1, "Please select an area of interest"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const inquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
  itemId: z.string(),
});

export type InquiryFormData = z.infer<typeof inquiryFormSchema>;
