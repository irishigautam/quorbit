export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company: string;
  website?: string;
  service: string;
  budget?: string;
  challenge: string;
  source?: string;
  submittedAt: string;
}

function row(label: string, value: string | undefined, fallback = "—") {
  return `
    <tr>
      <td style="padding:10px 16px;background:#f8f8f8;border-bottom:1px solid #e5e5e5;width:38%;font-weight:600;color:#111;font-size:13px;vertical-align:top;">${label}</td>
      <td style="padding:10px 16px;background:#ffffff;border-bottom:1px solid #e5e5e5;color:#333;font-size:13px;vertical-align:top;">${value ? escapeHtml(value) : fallback}</td>
    </tr>`;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function notificationEmailHtml(data: ContactFormData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;padding:28px 32px;text-align:left;">
              <span style="font-size:22px;font-weight:900;color:#ffc919;letter-spacing:-0.5px;">Quorbit</span>
              <p style="margin:8px 0 0;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:2px;">Internal Notification</p>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:28px 32px 16px;border-bottom:2px solid #ffc919;">
              <h1 style="margin:0;font-size:20px;font-weight:700;color:#111;">New Contact Form Submission</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#666;">Received: ${escapeHtml(data.submittedAt)}</p>
            </td>
          </tr>

          <!-- Form Data -->
          <tr>
            <td style="padding:24px 32px 8px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1.5px;">Contact Details</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
                ${row("First Name", data.firstName)}
                ${row("Last Name", data.lastName)}
                ${row("Email Address", data.email)}
                ${row("Phone Number", data.phone)}
                ${row("Company Name", data.company)}
                ${row("Company Website", data.website)}
                ${row("Interested Service", data.service)}
                ${row("Monthly Marketing Budget", data.budget)}
                ${row("How They Heard About Us", data.source)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 32px 8px;">
              <p style="margin:0 0 12px;font-size:12px;font-weight:700;color:#888;text-transform:uppercase;letter-spacing:1.5px;">Marketing Challenge</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 32px;">
              <div style="background:#f8f8f8;border:1px solid #e5e5e5;border-radius:6px;padding:16px 20px;font-size:13px;color:#333;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.challenge)}</div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f8f8;padding:20px 32px;border-top:1px solid #e5e5e5;text-align:center;">
              <p style="margin:0;font-size:11px;color:#999;">This is an automated notification from the Quorbit website contact form.<br />Do not reply to this email.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function confirmationEmailHtml(firstName: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We've Received Your Enquiry</title>
</head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0f0;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:#0a0a0a;padding:32px;text-align:center;">
              <span style="font-size:26px;font-weight:900;color:#ffc919;letter-spacing:-0.5px;">Quorbit</span>
            </td>
          </tr>

          <!-- Accent bar -->
          <tr>
            <td style="background:#ffc919;height:4px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 20px;font-size:22px;font-weight:700;color:#111;line-height:1.3;">Hi ${escapeHtml(firstName)},</h1>
              <p style="margin:0 0 16px;font-size:15px;color:#444;line-height:1.7;">Thank you for contacting <strong>The Quorbit</strong>.</p>
              <p style="margin:0 0 16px;font-size:15px;color:#444;line-height:1.7;">We've successfully received your enquiry. Our team will review your request and get back to you as soon as possible.</p>
              <p style="margin:0 0 32px;font-size:15px;color:#444;line-height:1.7;">We appreciate your interest in working with us.</p>

              <div style="background:#f8f8f8;border-left:3px solid #ffc919;border-radius:0 4px 4px 0;padding:16px 20px;margin-bottom:32px;">
                <p style="margin:0;font-size:13px;color:#666;line-height:1.6;">Expect to hear from us within <strong style="color:#111;">one business day</strong>. If your enquiry is urgent, you can reach us directly at <a href="mailto:sales@thequorbit.com" style="color:#111;font-weight:600;text-decoration:none;">sales@thequorbit.com</a>.</p>
              </div>

              <p style="margin:0;font-size:14px;color:#444;line-height:1.7;">Regards,<br /><strong style="color:#111;">The Quorbit Team</strong></p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0a0a;padding:24px 40px;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#888;">© ${new Date().getFullYear()} The Quorbit. All rights reserved.</p>
              <p style="margin:0;font-size:11px;color:#555;">You're receiving this email because you submitted a contact form on thequorbit.com.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
