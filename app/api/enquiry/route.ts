import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

import { siteContent } from "@/data/content";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.phone || !body?.email) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const message = [
      `New Mad Compass enquiry`,
      `Name: ${body.name}`,
      `Phone: ${body.phone}`,
      `Email: ${body.email}`,
      `Travel type: ${body.travelType || "Not specified"}`,
      `Destination: ${body.destination || "Not specified"}`,
      `Style: ${body.style || "Not specified"}`,
      `Budget: ${body.budget || "Not specified"}`,
      `Group: ${body.group || "Not specified"}`,
      `Notes: ${body.notes || "Not specified"}`,
      `Preferred contact: ${body.preferredContact || "Not specified"}`,
    ].join("\n");

    const smtpUrl = process.env.SMTP_URL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const mailTo = process.env.MAIL_TO || siteContent.email;
    const mailFrom = process.env.MAIL_FROM || smtpUser || siteContent.email;

    if (!smtpUrl && (!smtpHost || !smtpUser || !smtpPass)) {
      console.error("Missing SMTP configuration for enquiry email delivery.");
      return NextResponse.json({ success: false, message: "Email service is not configured yet." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport(
      smtpUrl
        ? { url: smtpUrl }
        : {
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          }
    );

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: body.email,
      subject: `New enquiry from ${body.name} - Mad Compass`,
      text: message,
      html: `<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #17120f;"><h2 style="color: #c20b0b;">New Mad Compass enquiry</h2><pre style="white-space: pre-wrap; font-family: inherit;">${message}</pre></div>`,
    });

    return NextResponse.json({ success: true, message: "Enquiry received" });
  } catch (error) {
    console.error("Enquiry email delivery failed:", error);
    return NextResponse.json({ success: false, message: "Failed to submit enquiry" }, { status: 500 });
  }
}
