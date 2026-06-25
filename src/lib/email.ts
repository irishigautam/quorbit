import { getResendClient } from "./resend";
import {
  notificationEmailHtml,
  confirmationEmailHtml,
  type ContactFormData,
} from "./email-templates";

const NOTIFICATION_RECIPIENTS = [
  "sales@thequorbit.com",
  "rishi@thequorbit.com",
  "maharshi@thequorbit.com",
];

export async function sendContactNotifications(data: ContactFormData): Promise<void> {
  const from = process.env.FROM_EMAIL;
  if (!from) throw new Error("FROM_EMAIL environment variable is not set");

  const { error } = await getResendClient().emails.send({
    from: `Quorbit <${from}>`,
    to: NOTIFICATION_RECIPIENTS,
    subject: "New Contact Form Submission",
    html: notificationEmailHtml(data),
  });

  if (error) {
    throw new Error(`Resend notification error: ${error.message}`);
  }
}

export async function sendContactConfirmation(
  recipientEmail: string,
  firstName: string
): Promise<void> {
  const from = process.env.FROM_EMAIL;
  if (!from) throw new Error("FROM_EMAIL environment variable is not set");

  const { error } = await getResendClient().emails.send({
    from: `Quorbit <${from}>`,
    to: [recipientEmail],
    subject: "We've Received Your Enquiry",
    html: confirmationEmailHtml(firstName),
  });

  if (error) {
    throw new Error(`Resend confirmation error: ${error.message}`);
  }
}
