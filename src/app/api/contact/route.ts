import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #000; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #FFD10C; margin: 0; font-size: 22px;">New Contact Message</h1>
          <p style="color: #ccc; margin: 6px 0 0; font-size: 14px;">Super Petroleum — Contact Form</p>
        </div>

        <div style="background: #fff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 35%; color: #555;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">
                <a href="mailto:${email}" style="color: #FFD10C;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Subject</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; text-transform: capitalize;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Message</p>
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">
              ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
          </div>
        </div>

        <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #888; font-size: 12px; margin: 0;">Super Petroleum — superpetroleum2021@gmail.com</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Super Petroleum Website" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `Contact Form: ${subject} — ${name}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Contact email error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
