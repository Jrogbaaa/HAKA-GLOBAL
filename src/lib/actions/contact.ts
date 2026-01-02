"use server";

import { db } from "@/lib/db";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Use verified domain email in production, or your personal email for testing
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@hakaglobal.com";

// Format interest for display
const formatInterest = (interest: string): string => {
  const interestMap: Record<string, string> = {
    "personal-branding": "Personal Branding",
    "real-estate": "Real Estate",
    investments: "Financial Investments",
    marketplace: "Luxury Marketplace",
    general: "General Inquiry",
  };
  return interestMap[interest] || interest;
};

// Send notification email to team
const sendNotificationEmail = async (data: {
  name: string;
  email: string;
  interest: string;
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
      replyTo: data.email,
      subject: `New Contact Form Submission - ${formatInterest(data.interest)}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1A191A; color: #eebd2b; padding: 24px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { padding: 24px; background: #f9f9f9; }
              .field { margin-bottom: 16px; }
              .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
              .value { margin-top: 4px; padding: 12px; background: white; border-left: 3px solid #eebd2b; }
              .message { white-space: pre-wrap; }
              .footer { padding: 16px 24px; text-align: center; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Area of Interest</div>
                  <div class="value">${formatInterest(data.interest)}</div>
                </div>
                <div class="field">
                  <div class="label">Message</div>
                  <div class="value message">${data.message}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the ${SITE_CONFIG.name} website contact form.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Area of Interest: ${formatInterest(data.interest)}

Message:
${data.message}

---
This email was sent from the ${SITE_CONFIG.name} website contact form.
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

// Send confirmation email to user
const sendConfirmationEmail = async (data: {
  name: string;
  email: string;
}) => {
  if (!resend) {
    return { success: false, error: "Email service not configured" };
  }

  try {
    const result = await resend.emails.send({
      from: `${SITE_CONFIG.name} <noreply@hakaglobal.com>`,
      to: [data.email],
      subject: `Thank you for contacting ${SITE_CONFIG.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1A191A; color: #eebd2b; padding: 32px; text-align: center; }
              .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
              .content { padding: 32px; background: #ffffff; }
              .content p { margin: 0 0 16px; }
              .highlight { color: #eebd2b; font-weight: 600; }
              .footer { padding: 24px; text-align: center; font-size: 12px; color: #999; background: #f9f9f9; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Haka Global</h1>
              </div>
              <div class="content">
                <p>Dear ${data.name},</p>
                <p>Thank you for reaching out to <span class="highlight">Haka Global</span>.</p>
                <p>We have received your inquiry and a member of our team will review your message and respond within <strong>24 hours</strong>.</p>
                <p>In the meantime, feel free to explore our services and insights on our website.</p>
                <p>Best regards,<br><strong>The Haka Global Team</strong></p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Haka Global. All rights reserved.</p>
                <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Dear ${data.name},

Thank you for reaching out to Haka Global.

We have received your inquiry and a member of our team will review your message and respond within 24 hours.

In the meantime, feel free to explore our services and insights on our website.

Best regards,
The Haka Global Team

---
© ${new Date().getFullYear()} Haka Global. All rights reserved.
This is an automated confirmation email. Please do not reply directly to this message.
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
  email: string;
  interest: string;
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
    console.warn("✗ Failed to send notification email:", notificationResult.error);
  }

  // 2. Send confirmation email to user
  const confirmationResult = await sendConfirmationEmail({
    name: data.name,
    email: data.email,
  });
  if (confirmationResult.success) {
    confirmationSent = true;
    console.log("✓ Confirmation email sent to", data.email);
  } else {
    console.warn("✗ Failed to send confirmation email:", confirmationResult.error);
  }

  // 3. Try to save to database (non-blocking)
  try {
    await db.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        interest: data.interest,
        message: data.message,
      },
    });
    dbSaveSuccess = true;
    console.log("✓ Contact submission saved to database");
  } catch (error) {
    console.warn("✗ Failed to save to database (will retry later):", error);
    // Don't fail the form submission if database is unavailable
    // The email notification ensures the team still receives the inquiry
  }

  // Success if at least one email was sent OR database was saved
  const emailSent = notificationSent || confirmationSent;
  
  if (emailSent || dbSaveSuccess) {
    return { 
      success: true, 
      data: { 
        notificationSent,
        confirmationSent,
        dbSaved: dbSaveSuccess 
      } 
    };
  }

  // Only fail if ALL methods failed
  return { 
    success: false, 
    error: "Failed to submit form. Please try again or contact us directly at info@hakaglobal.com" 
  };
};

