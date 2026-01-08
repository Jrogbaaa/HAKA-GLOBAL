"use server";

import { db } from "@/lib/db";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/lib/constants";

// Check if database is properly configured
const isDatabaseConfigured = () => {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl || dbUrl.length === 0) return false;
  if (dbUrl.includes("placeholder")) return false;
  // Skip local Prisma dev proxy URLs that aren't running
  if (dbUrl.includes("prisma+postgres://localhost")) return false;
  return true;
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Use verified domain email in production, or your personal email for testing
const NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "info@hakaglobal.com";

// Send notification email to team
const sendNotificationEmail = async (data: {
  name: string;
  organization: string;
  contactDetails: string;
  message: string;
}) => {
  if (!resend) {
    console.log("Resend not configured - skipping email notification");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const result = await resend.emails.send({
      from: `${SITE_CONFIG.name} <noreply@hakaglobal.com>`,
      to: [NOTIFICATION_EMAIL],
      replyTo: data.contactDetails.includes("@") ? data.contactDetails : undefined,
      subject: `New Inquiry from ${data.name}${data.organization ? ` - ${data.organization}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1A191A; color: #D4A84B; padding: 24px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 500; }
              .content { padding: 24px; background: #f9f9f9; }
              .field { margin-bottom: 16px; }
              .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { margin-top: 4px; padding: 12px; background: white; border-left: 3px solid #D4A84B; }
              .message { white-space: pre-wrap; }
              .footer { padding: 16px 24px; text-align: center; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Conversation Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${data.name}</div>
                </div>
                ${
                  data.organization
                    ? `
                <div class="field">
                  <div class="label">Organization</div>
                  <div class="value">${data.organization}</div>
                </div>
                `
                    : ""
                }
                <div class="field">
                  <div class="label">Contact Details</div>
                  <div class="value">${data.contactDetails}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value message">${data.message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This inquiry was submitted via the ${SITE_CONFIG.name} website.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Conversation Request

Name: ${data.name}
${data.organization ? `Organization: ${data.organization}\n` : ""}Contact Details: ${data.contactDetails}

Message:
${data.message}

---
This inquiry was submitted via the ${SITE_CONFIG.name} website.
      `.trim(),
    });

    // Check if Resend returned an error
    if (result.error) {
      console.error("Resend API error:", result.error);
      return { success: false, error: result.error.message };
    }

    console.log("Email notification sent successfully:", result.data);
    return { success: true, data: result.data };
  } catch (error) {
    console.error("Error sending notification email:", error);
    return { success: false, error: "Failed to send email notification" };
  }
};

// Send confirmation email to user (only if contact details is an email)
const sendConfirmationEmail = async (data: { name: string; email: string }) => {
  if (!resend) {
    return { success: false, error: "Email service not configured" };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, error: "Contact details is not an email address" };
  }

  try {
    const result = await resend.emails.send({
      from: `${SITE_CONFIG.name} <noreply@hakaglobal.com>`,
      to: [data.email],
      subject: `Thank you for reaching out - ${SITE_CONFIG.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1A191A; color: #D4A84B; padding: 32px; text-align: center; }
              .header h1 { margin: 0; font-size: 28px; font-weight: 500; }
              .content { padding: 32px; background: #ffffff; }
              .content p { margin: 0 0 16px; }
              .highlight { color: #D4A84B; font-weight: 600; }
              .footer { padding: 24px; text-align: center; font-size: 12px; color: #999; background: #f9f9f9; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>HAKA Global</h1>
              </div>
              <div class="content">
                <p>Dear ${data.name},</p>
                <p>Thank you for reaching out to <span class="highlight">HAKA Global</span>.</p>
                <p>We have received your inquiry and a member of our team will review your message and respond within <strong>48 hours</strong>.</p>
                <p>All conversations are treated with discretion.</p>
                <p>Best regards,<br><strong>The HAKA Global Team</strong></p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} HAKA Global. All rights reserved.</p>
                <p>This is an automated confirmation. Please do not reply directly to this message.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Dear ${data.name},

Thank you for reaching out to HAKA Global.

We have received your inquiry and a member of our team will review your message and respond within 48 hours.

All conversations are treated with discretion.

Best regards,
The HAKA Global Team

---
© ${new Date().getFullYear()} HAKA Global. All rights reserved.
This is an automated confirmation. Please do not reply directly to this message.
      `.trim(),
    });

    // Check if Resend returned an error
    if (result.error) {
      console.error("Resend API error (confirmation):", result.error);
      return { success: false, error: result.error.message };
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return { success: false, error: "Failed to send confirmation email" };
  }
};

// Submit contact form
export const submitContactForm = async (data: {
  name: string;
  organization: string;
  contactDetails: string;
  message: string;
}) => {
  let dbSaveSuccess = false;
  let notificationSent = false;
  let confirmationSent = false;

  // 1. Send notification email to team FIRST (most important)
  const notificationResult = await sendNotificationEmail(data);
  if (notificationResult.success) {
    notificationSent = true;
    console.log("✓ Notification email sent to", NOTIFICATION_EMAIL);
  } else {
    console.warn(
      "✗ Failed to send notification email:",
      notificationResult.error
    );
  }

  // 2. Send confirmation email to user (if contact details is an email)
  const confirmationResult = await sendConfirmationEmail({
    name: data.name,
    email: data.contactDetails,
  });
  if (confirmationResult.success) {
    confirmationSent = true;
    console.log("✓ Confirmation email sent to", data.contactDetails);
  } else {
    console.warn(
      "✗ Failed to send confirmation email:",
      confirmationResult.error
    );
  }

  // 3. Try to save to database (non-blocking)
  if (isDatabaseConfigured()) {
    try {
      await db.contactSubmission.create({
        data: {
          name: data.name,
          email: data.contactDetails,
          interest: data.organization || "N/A",
          message: data.message,
        },
      });
      dbSaveSuccess = true;
      console.log("✓ Contact submission saved to database");
    } catch {
      // Don't fail the form submission if database is unavailable
      // The email notification ensures the team still receives the inquiry
    }
  }

  // Success if at least one email was sent OR database was saved
  const emailSent = notificationSent || confirmationSent;

  if (emailSent || dbSaveSuccess) {
    return {
      success: true,
      data: {
        notificationSent,
        confirmationSent,
        dbSaved: dbSaveSuccess,
      },
    };
  }

  // Only fail if ALL methods failed
  return {
    success: false,
    error:
      "Failed to submit form. Please try again or contact us directly at info@hakaglobal.com",
  };
};
