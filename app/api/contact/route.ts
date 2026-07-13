import { NextResponse } from "next/server";
import { isLocale } from "@/i18n/locales";

type ContactPayload = {
  locale?: string;
  fullName?: string;
  businessName?: string;
  websiteUrl?: string;
  email?: string;
  phone?: string;
  country?: string;
  businessType?: string;
  mainGoal?: string;
  budgetRange?: string;
  preferredContact?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "fullName",
  "businessName",
  "websiteUrl",
  "email",
  "country",
  "businessType",
  "mainGoal",
  "budgetRange",
  "preferredContact",
  "message"
];

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validatePayload(payload: ContactPayload) {
  const errors: Record<string, string> = {};

  requiredFields.forEach((field) => {
    if (!asString(payload[field])) {
      errors[field] = "Required field is missing.";
    }
  });

  const email = asString(payload.email);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email address.";
  }

  const websiteUrl = asString(payload.websiteUrl);
  if (websiteUrl) {
    try {
      const url = new URL(websiteUrl);
      if (!["http:", "https:"].includes(url.protocol)) {
        errors.websiteUrl = "Invalid website URL.";
      }
    } catch {
      errors.websiteUrl = "Invalid website URL.";
    }
  }

  if (payload.locale && !isLocale(payload.locale)) {
    errors.locale = "Unsupported locale.";
  }

  return errors;
}

function buildEmailText(payload: Required<ContactPayload>) {
  return [
    "New Web2Go consultation request",
    "",
    `Locale: ${payload.locale}`,
    `Full name: ${payload.fullName}`,
    `Business name: ${payload.businessName}`,
    `Website URL: ${payload.websiteUrl}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "Not provided"}`,
    `Country: ${payload.country}`,
    `Business type: ${payload.businessType}`,
    `Main goal: ${payload.mainGoal}`,
    `Budget range: ${payload.budgetRange}`,
    `Preferred contact: ${payload.preferredContact}`,
    "",
    "Message:",
    payload.message
  ].join("\n");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON payload." }, { status: 400 });
  }

  const errors = validatePayload(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const payload: Required<ContactPayload> = {
    locale: isLocale(body.locale || "") ? body.locale! : "en",
    fullName: asString(body.fullName),
    businessName: asString(body.businessName),
    websiteUrl: asString(body.websiteUrl),
    email: asString(body.email),
    phone: asString(body.phone),
    country: asString(body.country),
    businessType: asString(body.businessType),
    mainGoal: asString(body.mainGoal),
    budgetRange: asString(body.budgetRange),
    preferredContact: asString(body.preferredContact),
    message: asString(body.message)
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    // TODO: Configure RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL in production.
    return NextResponse.json(
      {
        ok: true,
        mode: "development",
        message:
          "Request validated. Email delivery is disabled until contact environment variables are configured."
      },
      { status: 202 }
    );
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email,
      subject: `Web2Go consultation request from ${payload.businessName}`,
      text: buildEmailText(payload)
    })
  });

  if (!resendResponse.ok) {
    return NextResponse.json(
      { ok: false, error: "Email provider rejected the request." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, mode: "sent" });
}
