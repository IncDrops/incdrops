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

export async function createCheckoutSession(query: string): Promise<{id: string}> {
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

  return redirect(session.url!);
}
