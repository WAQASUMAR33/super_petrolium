import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const fullName = formData.get('fullName') as string;
    const address = formData.get('address') as string;
    const city = formData.get('city') as string;
    const state = formData.get('state') as string;
    const zipCode = formData.get('zipCode') as string;
    const ssn = formData.get('ssn') as string;
    const previousExperience = formData.get('previousExperience') as string;
    const maritalStatus = formData.get('maritalStatus') as string;
    const resumeFile = formData.get('resume') as File | null;

    // Build transporter using Hostinger SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // port 465 = SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare attachment if resume was uploaded
    const attachments: nodemailer.SendMailOptions['attachments'] = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type,
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #1a1a1a;">
        <div style="background: #000; padding: 24px 32px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #FFD10C; margin: 0; font-size: 22px;">New Job Application</h1>
          <p style="color: #ccc; margin: 6px 0 0; font-size: 14px;">Super Petroleum — Employment Application</p>
        </div>

        <div style="background: #fff; padding: 32px; border: 1px solid #e5e7eb; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 40%; color: #555;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Address</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${address}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">City</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${city}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">State</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${state}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">ZIP Code</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${zipCode}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Social Security No.</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${ssn}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Marital Status</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; text-transform: capitalize;">${maritalStatus}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: bold; color: #555;">Resume Attached</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${resumeFile && resumeFile.size > 0 ? `Yes — ${resumeFile.name}` : 'No'}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-weight: bold; color: #555; margin-bottom: 8px;">Previous Experience</p>
            <div style="background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">
              ${previousExperience.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </div>
          </div>
        </div>

        <div style="background: #f9fafb; padding: 16px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; text-align: center;">
          <p style="color: #888; font-size: 12px; margin: 0;">Super Petroleum — hr@superpetroleums.com</p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Super Petroleum Careers" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: `New Job Application — ${fullName}`,
      html: emailHtml,
      attachments,
    });

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send application. Please try again.' },
      { status: 500 }
    );
  }
}
