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

const INQUIRY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<title>Tours by Rudra - Inquiry Email</title>
<style>
@media only screen and (max-width:600px){
.container{width:100%!important}
.px{padding-left:20px!important;padding-right:20px!important}
.hero{font-size:30px!important;line-height:38px!important}
.stack{display:block!important;width:100%!important}
.btn{display:block!important;width:100%!important;box-sizing:border-box!important;margin:0 0 12px!important}
}
</style>
</head>
<body style="margin:0;padding:0;background:#070B14;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#070B14;padding:24px;">
<tr><td align="center">

<table role="presentation" class="container" width="680" style="width:100%;max-width:680px;background:#101826;border:1px solid #2d3647;border-radius:18px;overflow:hidden;font-family:Arial,Helvetica,sans-serif">

<tr>
<td align="center" style="background:#0B1220;padding:36px;border-bottom:2px solid #D4AF37;">
<img src="https://www.toursbyrudra.com/assets/rudra-logo-wudmE46I.png" alt="Tours by Rudra" width="150" style="display:block;width:150px;max-width:150px;height:auto">
<div style="margin-top:16px;color:#D4AF37;letter-spacing:4px;font-size:12px;text-transform:uppercase">Luxury Travel Experience</div>
</td>
</tr>

<tr>
<td class="px" align="center" style="padding:42px 40px;">
<div style="color:#D4AF37;font-size:12px;letter-spacing:4px;font-weight:bold;">NEW WEBSITE INQUIRY</div>
<h1 class="hero" style="margin:18px 0 16px;color:#fff;font:400 42px Georgia,serif;">Your Client Is Ready To Travel</h1>
<p style="margin:0;color:#C7CDD8;font-size:17px;line-height:30px;">
A visitor has submitted a new inquiry through the official
<strong style="color:#D4AF37;">Tours by Rudra</strong> website.
</p>
<div style="margin-top:28px;display:inline-block;background:#D4AF37;color:#111827;padding:12px 26px;border-radius:40px;font-weight:bold;">
{{type}}
</div>
</td>
</tr>

<tr><td class="px" style="padding:0 30px 30px;">
<table role="presentation" width="100%" cellpadding="16" cellspacing="0" style="background:#141E2F;border:1px solid #2d3647;border-radius:12px;">
<tr><td style="color:#D4AF37;font-weight:bold;width:38%;border-bottom:1px solid #2d3647;">Customer Name</td><td style="color:#fff;border-bottom:1px solid #2d3647;">{{name}}</td></tr>
<tr><td style="color:#D4AF37;font-weight:bold;border-bottom:1px solid #2d3647;">Phone / Email</td><td style="color:#fff;border-bottom:1px solid #2d3647;">{{contact}}</td></tr>
<tr><td style="color:#D4AF37;font-weight:bold;border-bottom:1px solid #2d3647;">Package</td><td style="color:#fff;border-bottom:1px solid #2d3647;">{{package}}</td></tr>
<tr><td style="color:#D4AF37;font-weight:bold;">Submitted</td><td style="color:#fff;">{{time}}</td></tr>
</table>
</td></tr>

<tr><td class="px" style="padding:0 30px 30px;">
<div style="background:#141E2F;border-left:4px solid #D4AF37;border-radius:12px;padding:24px;">
<div style="color:#D4AF37;font-size:12px;letter-spacing:3px;font-weight:bold;">TRIP DETAILS</div>
<div style="margin-top:16px;color:#fff;line-height:28px;white-space:pre-wrap;">{{detail}}</div>
</div>
</td></tr>

<tr><td align="center" class="px" style="padding:0 30px 40px;">
<a class="btn" href="tel:{{phone}}" style="display:inline-block;background:#D4AF37;color:#111827;text-decoration:none;padding:14px 26px;border-radius:40px;font-weight:bold;margin:6px;">📞 Call Customer</a>
<a class="btn" href="https://wa.me/{{phone}}" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:14px 26px;border-radius:40px;font-weight:bold;margin:6px;">💬 WhatsApp</a>
<a class="btn" href="mailto:{{email}}" style="display:inline-block;background:#1C2638;color:#fff;text-decoration:none;padding:14px 26px;border-radius:40px;border:1px solid #D4AF37;font-weight:bold;margin:6px;">✉ Reply</a>
</td></tr>

<tr><td align="center" style="background:#0B1220;padding:36px;border-top:1px solid #2d3647;">
<img src="https://www.toursbyrudra.com/assets/rudra-logo-wudmE46I.png" width="120" style="display:block;width:120px;height:auto;margin-bottom:20px;" alt="">
<div style="font:400 24px Georgia,serif;color:#D4AF37;">Rudra Tours & Travels</div>
<div style="margin-top:18px;color:#C7CDD8;line-height:28px;">
📍 Kanpur, Uttar Pradesh<br>
📞 +91 70145 47628<br>
✉ aabhaynigama@gmail.com<br>
🌐 https://www.toursbyrudra.com
</div>
<hr style="border:none;border-top:1px solid #2d3647;margin:26px 0;">
<div style="font-size:12px;color:#7f8898;">This inquiry was submitted from the official Tours by Rudra website.</div>
<div style="margin-top:10px;font-size:12px;color:#7f8898;">© 2026 Rudra Tours & Travels. All Rights Reserved.</div>
</td></tr>

</table>

</td></tr>
</table>
</body>
</html>`;

function renderTemplate(input: InquiryEmailInput): string {
  const contact = input.contact?.trim() || input.phone?.trim() || input.email?.trim() || "N/A";
  const phone = input.phone?.trim() || input.contact?.trim() || "N/A";
  const email = input.email?.trim() || "N/A";
  const packageName = input.packageName?.trim() || "N/A";

  return INQUIRY_EMAIL_TEMPLATE
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
