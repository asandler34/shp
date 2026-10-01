"use server";

import { brand, towns } from "@/lib/site";

const interests = [
  "Property Stewardship",
  "Home Independence",
  "Concierge",
  "Not sure yet",
] as const;

export type InquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  phone?: string;
};

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

function formatPhone(digits: string) {
  const national = digits.length === 11 && digits.startsWith("1")
    ? digits.slice(1)
    : digits;
  return `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6, 10)}`;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  if (String(formData.get("company_website") ?? "").trim()) {
    return { status: "success", message: "Thank you." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phoneRaw = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const town = String(formData.get("town") ?? "").trim();
  const interest = String(formData.get("interest") ?? "").trim();
  const note = String(formData.get("note") ?? "").trim();

  if (name.length > 120 || phoneRaw.length > 40 || email.length > 254 || note.length > 3000) {
    return { status: "error", message: "Please shorten your details and try again." };
  }
  if (formData.get("consent") !== "yes") {
    return { status: "error", message: "Please confirm that we may contact you about your inquiry." };
  }

  if (!name) {
    return { status: "error", message: "Please enter your name." };
  }

  const phoneDigits = digitsOnly(phoneRaw);
  const validPhone =
    phoneDigits.length === 10 ||
    (phoneDigits.length === 11 && phoneDigits.startsWith("1"));

  if (!validPhone) {
    return {
      status: "error",
      message: "Please enter a phone number so we can call you.",
    };
  }

  if (email && !isValidEmail(email)) {
    return { status: "error", message: "Please enter a valid email, or leave it blank." };
  }

  const allowedTowns: string[] = [...towns, "Other"];
  if (!allowedTowns.includes(town)) {
    return { status: "error", message: "Please select the town of the property." };
  }

  if (interest && !interests.includes(interest as (typeof interests)[number])) {
    return { status: "error", message: "Please choose how we can help, or leave it blank." };
  }

  const phone = formatPhone(phoneDigits);
  const inquiry = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    name,
    phone,
    email: email || null,
    town,
    interest: interest || null,
    note: note || null,
    contactConsent: true,
    privacyVersion: "2026-09-30",
  };

  try {
    const endpoint = process.env.INQUIRY_WEBHOOK_URL;
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.INQUIRY_FROM_EMAIL;
    if (!endpoint && (!apiKey || !from)) throw new Error("Unconfigured intake");
    if (endpoint && new URL(endpoint).protocol !== "https:") throw new Error("Invalid intake URL");
    const emailBody = {
      from,
      to: [brand.email],
      ...(email ? { reply_to: email } : {}),
      subject: "New Seacoast Home Partners website inquiry",
      text: [
        `Name: ${name}`, `Phone: ${phone}`, `Email: ${email || "Not provided"}`,
        `Property town: ${town}`, `Interest: ${interest || "Not specified"}`,
        `Property notes:\n${note || "None"}`,
        `Received: ${inquiry.receivedAt}`, `Reference: ${inquiry.id}`,
        "Contact consent: Yes", `Privacy notice: ${inquiry.privacyVersion}`,
      ].join("\n\n"),
    };
    const response = await fetch(endpoint || "https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(!endpoint ? { Authorization: `Bearer ${apiKey}` } : {}),
        ...(endpoint && process.env.INQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(endpoint ? inquiry : emailBody),
      signal: AbortSignal.timeout(10000),
      cache: "no-store",
      redirect: "error",
    });
    if (!response.ok) throw new Error("Intake rejected");
    if (!endpoint) {
      const receipt: unknown = await response.json();
      if (!receipt || typeof receipt !== "object" || !("id" in receipt) || typeof receipt.id !== "string" || !receipt.id) {
        throw new Error("No email acknowledgement");
      }
    }
  } catch {
    return { status: "error", message: "Your request could not be confirmed. Please try again later. Your details are still in the form." };
  }

  return {
    status: "success",
    phone,
    message: `Thank you. We will call you at ${phone} to talk about your home.`,
  };
}
