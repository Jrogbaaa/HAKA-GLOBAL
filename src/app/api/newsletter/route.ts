import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { SITE_CONFIG } from "@/lib/constants";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const NOTIFICATION_EMAIL =
  process.env.NOTIFICATION_EMAIL || "info@hakaglobal.com";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://hakaglobal.com";

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
    console.log("Attempting to send welcome email to:", email);
    
    const currentYear = new Date().getFullYear();
    
    const result = await resend.emails.send({
      from: `HAKA Global <noreply@hakaglobal.com>`,
      to: [email],
      subject: `Welcome to HAKA Global`,
      headers: {
        "List-Unsubscribe": `<mailto:info@hakaglobal.com?subject=Unsubscribe>`,
      },
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to HAKA Global</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0a0a0a;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 520px; background-color: #141414; border-radius: 16px; overflow: hidden;">
          
          <!-- Logo Header -->
          <tr>
            <td align="center" style="padding: 48px 40px 32px 40px; background-color: #141414;">
              <img src="${SITE_URL}/haka-logo-gold.svg" alt="HAKA Global" width="180" height="auto" style="display: block; max-width: 180px; height: auto;" />
            </td>
          </tr>
          
          <!-- Gold Accent Line -->
          <tr>
            <td align="center" style="padding: 0 40px;">
              <table role="presentation" width="60" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="height: 3px; background-color: #B39750; border-radius: 2px;"></td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 32px 40px 40px 40px;">
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.7; color: #e5e5e5; text-align: center;">
                Thank you for subscribing to <span style="color: #B39750; font-weight: 600;">HAKA Global</span>.
              </p>
              <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.7; color: #a3a3a3; text-align: center;">
                You'll receive exclusive strategic insights and updates on our advisory and investment activities.
              </p>
              <p style="margin: 0 0 32px 0; font-size: 18px; line-height: 1.6; color: #B39750; text-align: center; font-style: italic;">
                Welcome to the shift.
              </p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #a3a3a3; text-align: center;">
                <strong style="color: #e5e5e5;">The HAKA Global Team</strong>
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px 32px 40px; background-color: #0f0f0f; border-top: 1px solid #262626;">
              <p style="margin: 0 0 8px 0; font-size: 12px; line-height: 1.5; color: #737373; text-align: center;">
                © ${currentYear} HAKA Global. All rights reserved.
              </p>
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #525252; text-align: center;">
                <a href="${SITE_URL}" style="color: #737373; text-decoration: none;">hakaglobal.com</a>
                &nbsp;·&nbsp;
                <a href="mailto:info@hakaglobal.com?subject=Unsubscribe" style="color: #737373; text-decoration: none;">Unsubscribe</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
      text: `
HAKA GLOBAL
───────────

Thank you for subscribing to HAKA Global.

You'll receive exclusive strategic insights and updates on our advisory and investment activities.

Welcome to the shift.

The HAKA Global Team

───────────
© ${currentYear} HAKA Global. All rights reserved.
hakaglobal.com

To unsubscribe, reply to this email with "Unsubscribe" in the subject.
      `.trim(),
    });

    // Log the full result for debugging
    console.log("Welcome email result:", JSON.stringify(result, null, 2));

    if (result.error) {
      console.error("✗ Failed to send welcome email to subscriber:", result.error);
      return NextResponse.json(
        { error: "Failed to send welcome email", details: result.error.message },
        { status: 500 }
      );
    }

    console.log("✓ Welcome email sent successfully to:", email, "- ID:", result.data?.id);
    return NextResponse.json({ success: true, emailId: result.data?.id });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
