"use server";

import { db } from "@/lib/db";

// Submit contact form
export const submitContactForm = async (data: {
  name: string;
  email: string;
  interest: string;
  message: string;
}) => {
  try {
    const submission = await db.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        interest: data.interest,
        message: data.message,
      },
    });

    // Optional: Send email notification using Resend
    // if (process.env.RESEND_API_KEY) {
    //   // Send notification email
    // }

    return { success: true, data: submission };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "Failed to submit form" };
  }
};

