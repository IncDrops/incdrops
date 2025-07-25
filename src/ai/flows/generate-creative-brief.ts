'use server';

/**
 * @fileOverview This file defines a Genkit flow to process a client brief and generate a structured summary.
 *
 * - generateCreativeBrief - A function that takes form data and returns an AI-generated summary.
 * - GenerateCreativeBriefInput - The input type for the generateCreativeBrief function.
 * - GenerateCreativeBriefOutput - The return type for the generateCreativeBrief function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

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
  output: {schema: GenerateCreativeBriefOutputSchema},
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
    const {output} = await prompt(input);
    return output!;
  }
);
