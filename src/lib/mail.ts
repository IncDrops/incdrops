"use server";

import nodemailer from 'nodemailer';

export async function sendInquiryEmail(data: { ideaDescription: string; appInterest: string; message: string; }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"IncDrops Inquiry" <${process.env.SMTP_USER}>`,
    to: process.env.MAIL_TO,
    subject: `New App Kit Inquiry: ${data.appInterest}`,
    html: `
      <h2>New App Kit Inquiry</h2>
      <p><strong>App Idea Description:</strong></p>
      <p>${data.ideaDescription}</p>
      <p><strong>App Kit of Interest:</strong></p>
      <p>${data.appInterest}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
