import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "info@hakaglobal.com";

// Send notification to team about new subscriber
const sendTeamNotification = async (subscriberEmail: string) => {
  if (!resend) return { success: false };

  try {
    const result = await resend.emails.send({
      from: `${SITE_CONFIG.name} <noreply@hakaglobal.com>`,
      to: [NOTIFICATION_EMAIL],
      subject: `New Newsletter Subscriber: ${subscriberEmail}`,
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
              .email-box { padding: 16px; background: white; border-left: 3px solid #D4A84B; margin: 16px 0; font-size: 18px; }
              .footer { padding: 16px 24px; text-align: center; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Newsletter Subscription</h1>
              </div>
              <div class="content">
                <p>A new user has subscribed to the HAKA Global newsletter:</p>
                <div class="email-box">${subscriberEmail}</div>
                <p>This subscriber has been sent a welcome email automatically.</p>
              </div>
              <div class="footer">
                <p>This notification was sent from the ${SITE_CONFIG.name} website.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Newsletter Subscription

A new user has subscribed to the HAKA Global newsletter:

${subscriberEmail}

This subscriber has been sent a welcome email automatically.

---
This notification was sent from the ${SITE_CONFIG.name} website.
      `.trim(),
    });

    if (result.error) {
      console.error("Failed to send team notification:", result.error);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending team notification:", error);
    return { success: false };
  }
};

export async function POST(request: NextRequest) {
  try {
    const { email, company } = await request.json();

    // Honeypot check - if "company" field is filled, it's a bot
    if (company) {
      console.log("Bot detected via honeypot - blocking submission");
      // Return success to not alert the bot, but don't process
      return NextResponse.json({ success: true });
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!resend) {
      console.log("Resend not configured - newsletter signup received:", email);
      // Still return success in development
      return NextResponse.json({ success: true });
    }

    // Send notification to team about new subscriber
    const notificationResult = await sendTeamNotification(email);
    if (notificationResult.success) {
      console.log("✓ Team notification sent for new subscriber:", email);
    } else {
      console.warn("✗ Failed to send team notification for:", email);
    }

    // Send welcome email to subscriber
    const result = await resend.emails.send({
      from: `${SITE_CONFIG.name} <noreply@hakaglobal.com>`,
      to: [email],
      subject: `Welcome to ${SITE_CONFIG.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #C8C8C8; background: #111621; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #1c222e; color: #D4A84B; padding: 32px; text-align: center; border-radius: 12px 12px 0 0; }
              .header h1 { margin: 0; font-size: 28px; font-weight: 700; letter-spacing: 0.1em; }
              .content { padding: 32px; background: #1c222e; border-radius: 0 0 12px 12px; }
              .content p { margin: 0 0 16px; color: #C8C8C8; }
              .highlight { color: #1754cf; font-weight: 600; }
              .footer { padding: 24px; text-align: center; font-size: 12px; color: #8a8a8a; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>HAKA</h1>
              </div>
              <div class="content">
                <p>Thank you for subscribing to <span class="highlight">HAKA Global</span>.</p>
                <p>You'll receive exclusive strategic insights and updates on our advisory and investment activities.</p>
                <p>Welcome to the shift.</p>
                <p><strong>The HAKA Global Team</strong></p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} HAKA Global. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
Thank you for subscribing to HAKA Global.

You'll receive exclusive strategic insights and updates on our advisory and investment activities.

Welcome to the shift.

The HAKA Global Team

---
© ${new Date().getFullYear()} HAKA Global. All rights reserved.
      `.trim(),
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
