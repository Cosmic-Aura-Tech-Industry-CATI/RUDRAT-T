import { createFileRoute } from "@tanstack/react-router";

import { sendInquiryEmail, isValidEmail, isValidPhone, sanitizePhone } from "@/lib/inquiry-email.server";

type InquiryRequestBody = {
  type?: string;
  name?: string;
  phone?: string;
  email?: string;
  package?: string;
  packageName?: string;
  detail?: string;
};

export const Route = createFileRoute("/api/inquiry")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = (await request.json()) as InquiryRequestBody;

        const type = body.type?.trim() || "";
        const name = body.name?.trim() || "";
        const phone = body.phone?.trim() || "";
        const email = body.email?.trim() || "";
        const packageName = body.packageName?.trim() || body.package?.trim() || "";
        const detail = body.detail?.trim() || "";

        if (!type || !name || !phone || !packageName || !detail) {
          return Response.json(
            { success: false, message: "Name, phone, inquiry type, package and trip details are required." },
            { status: 400 },
          );
        }

        if (!isValidPhone(phone)) {
          return Response.json(
            { success: false, message: "Phone must contain 10 digits." },
            { status: 400 },
          );
        }

        if (email && !isValidEmail(email)) {
          return Response.json(
            { success: false, message: "Email must be valid if provided." },
            { status: 400 },
          );
        }

        try {
          await sendInquiryEmail({
            type,
            name,
            phone: sanitizePhone(phone),
            email,
            contact: email || phone,
            packageName,
            detail,
          });

          return Response.json({ success: true });
        } catch (error) {
          console.error("Inquiry email send failed", error);
          return Response.json(
            {
              success: false,
              message: "We could not send your inquiry right now. Please contact us by phone or WhatsApp.",
            },
            { status: 503 },
          );
        }
      },
    },
  },
});