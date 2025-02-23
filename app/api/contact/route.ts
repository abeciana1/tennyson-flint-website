import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from '@/helper-functions/nodemailer'

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    await sendEmail(body)
    return NextResponse.json(
      { message: "Form submission successful", data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};