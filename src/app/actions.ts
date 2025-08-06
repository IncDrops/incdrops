"use server";

import { generateTrendReports, GenerateTrendReportsInput } from '@/ai/flows/generate-trend-reports';
import { redirect } from 'next/navigation';
import Stripe from 'stripe';

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
  console.log("New Inquiry Received:");
  console.log("App Idea:", data.ideaDescription);
  console.log("App Kit Interest:", data.appInterest);
  console.log("Message:", data.message);

  // Here you would add your email sending logic, for example using a service like Resend or Nodemailer.
  // Example with Resend (you would need to install the 'resend' package):
  /*
  import { Resend } from 'resend';
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'YOUR_EMAIL@example.com', // Replace with your email address
      subject: `New Inquiry: ${data.appInterest}`,
      html: `
        <h2>New App Inquiry</h2>
        <p><strong>App Idea:</strong> ${data.ideaDescription}</p>
        <p><strong>App Kit Interest:</strong> ${data.appInterest}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error: "Failed to send inquiry." };
  }
  */

  return { success: true };
}
