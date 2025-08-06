"use server";

import { generateTrendReports, GenerateTrendReportsInput } from '@/ai/flows/generate-trend-reports';
import { redirect } from 'next/navigation';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function getTrendReport(query: string) {
  if (!query) {
    return { error: 'Query is required.' };
  }
  try {
    const input: GenerateTrendReportsInput = { query };
    const result = await generateTrendReports(input);
    return { report: result.report };
  } catch (error) {
    console.error(error);
    return { error: 'Failed to generate trend report. Please try again later.' };
  }
}

export async function createCheckoutSession(query: string) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'AI Trend Report',
            description: `Your comprehensive analysis for: "${query}"`,
          },
          unit_amount: 500, // $5.00 in cents
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?report_query=${encodeURIComponent(query)}&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/`,
  });

  redirect(session.url!);
}

export async function handleInquiry(data: { ideaDescription: string; appInterest: string; message: string; }) {
  console.log("New Inquiry Received. Preparing to send email...");

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

  try {
    await transporter.sendMail(mailOptions);
    console.log("Inquiry email sent successfully!");
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: "Failed to send inquiry. Please check server logs for details." };
  }
}
