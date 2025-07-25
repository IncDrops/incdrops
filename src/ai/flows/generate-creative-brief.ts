'use server';

/**
 * @fileOverview This file defines a Genkit flow to process a client brief, generate a structured summary, and save it to Firestore.
 *
 * - generateCreativeBrief - A function that takes form data, generates an AI summary, and stores the brief.
 * - GenerateCreativeBriefInput - The input type for the generateCreativebrief function.
 * - GenerateCreativeBriefOutput - The return type for the generateCreativeBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import {firestore} from '@/lib/firebase';
import { Timestamp } from 'firebase-admin/firestore';

const GenerateCreativeBriefInputSchema = z.object({
  name: z.string().describe('The full name of the client.'),
  email: z.string().email().describe('The email address of the client.'),
  contentType: z.string().describe('The type of content the client needs.'),
  topic: z.string().describe('The main topic or title of the project.'),
  keywords: z.string().describe('Comma-separated keywords for the project.'),
  audience: z.string().optional().describe('The target audience for the content.'),
  goals: z.string().optional().describe('The key message and goals of the content.'),
  notes: z.string().optional().describe('Any additional notes or references from the client.'),
});
export type GenerateCreativeBriefInput = z.infer<typeof GenerateCreativeBriefInputSchema>;

const GenerateCreativeBriefOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the creative brief, formatted for clarity.'),
  briefId: z.string().describe('The ID of the document where the brief is stored in Firestore.'),
});
export type GenerateCreativeBriefOutput = z.infer<typeof GenerateCreativeBriefOutputSchema>;

export async function generateCreativeBrief(
  input: GenerateCreativeBriefInput
): Promise<GenerateCreativeBriefOutput> {
  return generateCreativeBriefFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCreativeBriefPrompt',
  input: {schema: GenerateCreativeBriefInputSchema},
  output: {schema: GenerateCreativeBriefOutputSchema.pick({ summary: true })},
  prompt: `You are a helpful assistant and project manager. A client has submitted a creative brief. Your task is to summarize it clearly and concisely.

  Client Name: {{{name}}}
  Client Email: {{{email}}}

  Content Details:
  - Type: {{{contentType}}}
  - Topic/Title: {{{topic}}}
  - Keywords: {{{keywords}}}
  - Target Audience: {{{audience}}}
  - Key Message & Goals: {{{goals}}}
  - Additional Notes: {{{notes}}}

  Based on the above, generate a summary of the project request. Format it as plain text.
  `,
});

const generateCreativeBriefFlow = ai.defineFlow(
  {
    name: 'generateCreativeBriefFlow',
    inputSchema: GenerateCreativeBriefInputSchema,
    outputSchema: GenerateCreativeBriefOutputSchema,
  },
  async input => {
    // 1. Generate the summary using the AI prompt
    const {output: summaryOutput} = await prompt(input);
    if (!summaryOutput) {
        throw new Error("Failed to generate brief summary from AI.");
    }

    // 2. Save the original brief and the new summary to Firestore
    const briefsCollection = firestore.collection('briefs');
    const briefDocument = await briefsCollection.add({
      ...input,
      summary: summaryOutput.summary,
      status: 'new', // Default status for manual review
      createdAt: Timestamp.now(),
    });

    // 3. Return the summary and the new document ID
    return {
      summary: summaryOutput.summary,
      briefId: briefDocument.id,
    };
  }
);
