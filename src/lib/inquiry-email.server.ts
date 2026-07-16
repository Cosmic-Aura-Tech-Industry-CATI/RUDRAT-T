import fs from "node:fs";
import path from "node:path";
import { Resend } from "resend";

import { BRAND } from "@/lib/brand";

const resend = new Resend(process.env.RESEND_API_KEY);

export type InquiryEmailInput = {
  type: string;
  name: string;
  contact?: string;
  phone?: string;
  email?: string;
  packageName?: string;
  detail: string;
  subject?: string;
};

export type InquiryNotificationResult = {
  adminMessageId: string;
  customerMessageId?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

function isValidPhone(phone: string): boolean {
  return sanitizePhone(phone).length === 10;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function readTemplate(): string {
  const templatePath = path.join(process.cwd(), "templates", "inquiry-email.html");
  return fs.readFileSync(templatePath, "utf8");
}

function renderTemplate(input: InquiryEmailInput): string {
  const template = readTemplate();
  const contact = input.contact?.trim() || input.phone?.trim() || input.email?.trim() || "N/A";
  const phone = input.phone?.trim() || input.contact?.trim() || "N/A";
  const email = input.email?.trim() || "N/A";
  const packageName = input.packageName?.trim() || "N/A";

  return template
    .replace(/{{type}}/g, escapeHtml(input.type))
    .replace(/{{name}}/g, escapeHtml(input.name))
    .replace(/{{contact}}/g, escapeHtml(contact))
    .replace(/{{phone}}/g, escapeHtml(phone))
    .replace(/{{email}}/g, escapeHtml(email))
    .replace(/{{package}}/g, escapeHtml(packageName))
    .replace(/{{detail}}/g, escapeHtml(input.detail))
    .replace(/{{time}}/g, escapeHtml(new Date().toLocaleString("en-IN")));
}

function renderCustomerConfirmation(input: InquiryEmailInput): string {
  const packageName = input.packageName?.trim() || "your selected package";
  const detail = input.detail.trim();
  const contact = input.contact?.trim() || input.phone?.trim() || input.email?.trim() || "N/A";
  const name = input.name.trim();

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thank You</title>
        <style>
          body { margin: 0; background: #f4f1eb; font-family: Arial, Helvetica, sans-serif; color: #f8f2e8; }
          .wrap { max-width: 720px; margin: 0 auto; padding: 36px 18px; }
          .card { background: #0b1020; border-radius: 28px; overflow: hidden; border: 1px solid rgba(215, 181, 109, 0.14); }
          .hero { padding: 40px 28px 30px; text-align: center; background: linear-gradient(180deg, #0f172a 0%, #0b1020 100%); }
          .logo { width: 84px; height: 84px; margin: 0 auto 16px; border-radius: 999px; display: grid; place-items: center; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #d7b56d; font-weight: 700; letter-spacing: 0.12em; }
          h1 { margin: 0; font-size: 32px; line-height: 1.15; }
          .eyebrow { margin-top: 14px; letter-spacing: 0.3em; text-transform: uppercase; font-size: 11px; color: #d7b56d; }
          .body { padding: 30px; }
          .box { padding: 16px 18px; border-radius: 16px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); margin-top: 14px; }
          .label { display: block; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #d7b56d; margin-bottom: 6px; }
          .value { font-size: 15px; line-height: 1.6; color: #f8f2e8; white-space: pre-wrap; }
          .footer { margin-top: 18px; color: rgba(248,242,232,0.72); font-size: 12px; }
          @media (max-width: 640px) { .wrap { padding-inline: 12px; } .body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="card">
            <div class="hero">
              <div class="logo">RT</div>
              <h1>Thank you, ${escapeHtml(name)}</h1>
              <div class="eyebrow">We received your inquiry</div>
            </div>
            <div class="body">
              <div class="box">
                <span class="label">Package</span>
                <div class="value">${escapeHtml(packageName)}</div>
              </div>
              <div class="box">
                <span class="label">Message</span>
                <div class="value">${escapeHtml(detail)}</div>
              </div>
              <div class="box">
                <span class="label">Contact</span>
                <div class="value">${escapeHtml(contact)}</div>
              </div>
              <div class="footer">
                Our travel expert will contact you shortly. Regards, Tours by Rudra.
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export async function sendInquiryEmail(input: InquiryEmailInput): Promise<InquiryNotificationResult> {
  const html = renderTemplate(input);
  const email = input.email?.trim();
  const replyTo = email && isValidEmail(email) ? email : undefined;
  const packageSuffix = input.packageName ? ` | ${input.packageName}` : "";
  const subject = input.subject ?? `✨ New ${input.type} Inquiry${packageSuffix}`;

  const adminResult = await resend.emails.send({
    from: "Rudra Tours & Travels <noreply@toursbyrudra.com>",
    to: BRAND.email,
    replyTo,
    subject,
    html,
  });

  let customerMessageId: string | undefined;
  if (email && isValidEmail(email)) {
    const customerResult = await resend.emails.send({
      from: "Tours by Rudra <noreply@toursbyrudra.com>",
      to: email,
      replyTo: BRAND.email,
      subject: `Thank you for your inquiry | ${input.packageName ?? "Tours by Rudra"}`,
      html: renderCustomerConfirmation(input),
    });

    customerMessageId = customerResult.data?.id;
  }

  return {
    adminMessageId: adminResult.data?.id ?? "",
    customerMessageId,
  };
}

export { isValidEmail, isValidPhone, sanitizePhone };
