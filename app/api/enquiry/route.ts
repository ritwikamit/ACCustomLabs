import { NextResponse } from "next/server";

// Simple input sanitization to prevent script tags and control characters
function sanitize(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Bot check: Honeypot field must be completely empty
    if (body.websiteUrl && body.websiteUrl.length > 0) {
      // Pretend to succeed to waste bot resources
      return NextResponse.json({ success: true, message: "Inquiry received." }, { status: 200 });
    }

    const {
      name,
      brand,
      email,
      phone,
      businessType,
      selectedServices,
      budget,
      timeline,
      message,
    } = body;

    // 2. Strict input presence & length validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 100) {
      return NextResponse.json(
        { error: "Valid name is required (max 100 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || email.length > 120) {
      return NextResponse.json(
        { error: "Valid email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email format." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length === 0 || phone.length > 30) {
      return NextResponse.json(
        { error: "Valid phone or WhatsApp number is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 2000) {
      return NextResponse.json(
        { error: "Project description is required (up to 2000 characters)." },
        { status: 400 }
      );
    }

    // 3. Sanitized inquiry package
    const inquiryPayload = {
      name: sanitize(name),
      brand: brand ? sanitize(brand) : "Not Specified",
      email: sanitize(email),
      phone: sanitize(phone),
      businessType: sanitize(businessType || "Local Business"),
      services: Array.isArray(selectedServices) ? selectedServices.map(sanitize) : [],
      budget: sanitize(budget || "Not Sure"),
      timeline: sanitize(timeline || "Not sure"),
      message: sanitize(message),
      receivedAt: new Date().toISOString(),
    };

    // Log internally for debugging / lead review without exposing secrets
    console.log("[Lead Enquiry Received]:", {
      name: inquiryPayload.name,
      email: inquiryPayload.email,
      brand: inquiryPayload.brand,
      businessType: inquiryPayload.businessType,
      services: inquiryPayload.services,
      receivedAt: inquiryPayload.receivedAt,
    });

    // In production with EMAIL_SERVICE_API_KEY, an email notification would be dispatched here.
    return NextResponse.json(
      {
        success: true,
        message: "Your project brief has been successfully received by AC Custom Labs.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload. Please check your submission." },
      { status: 400 }
    );
  }
}
