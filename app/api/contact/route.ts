import { ContactEmailTemplate } from "@/components/email/contact-email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is not set in environment variables");
      return NextResponse.json(
        { error: "Contact email not configured" },
        { status: 500 }
      );
    }

    console.log("Sending email with data:", {
      to: process.env.CONTACT_EMAIL,
      subject: formData.subject,
      from: "Sydek Contact Form <contact@sydek.dev>",
    });

    const { data, error } = await resend.emails.send({
      from: "Sydek Contact Form <contact@sydek.dev>",
      to: [process.env.CONTACT_EMAIL],
      subject: `New Contact Form Submission: ${formData.subject}`,
      replyTo: formData.email,
      react: ContactEmailTemplate({ formData }),
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
