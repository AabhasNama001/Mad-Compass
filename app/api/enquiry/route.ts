import { NextRequest, NextResponse } from "next/server";

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

    console.log(message);

    return NextResponse.json({ success: true, message: "Enquiry received" });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to submit enquiry" }, { status: 500 });
  }
}
