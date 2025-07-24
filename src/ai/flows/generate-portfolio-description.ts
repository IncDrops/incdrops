'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate descriptions and titles for portfolio items using AI.
 *
 * - generatePortfolioDescription - A function that generates a portfolio item description and title.
 * - GeneratePortfolioDescriptionInput - The input type for the generatePortfolioDescription function.
 * - GeneratePortfolioDescriptionOutput - The return type for the generatePortfolioDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePortfolioDescriptionInputSchema = z.object({
  contentType: z
    .string()
    .describe("The type of content in the portfolio item (e.g., 'blog post', 'social media ad', 'image', 'video concept')."),
  keywords: z
    .string()
    .describe('Relevant keywords related to the portfolio item, separated by commas.'),
});
export type GeneratePortfolioDescriptionInput = z.infer<typeof GeneratePortfolioDescriptionInputSchema>;

const GeneratePortfolioDescriptionOutputSchema = z.object({
  title: z.string().describe('A catchy and engaging title for the portfolio item.'),
  description: z.string().describe('A short and compelling description of the portfolio item.'),
});
export type GeneratePortfolioDescriptionOutput = z.infer<typeof GeneratePortfolioDescriptionOutputSchema>;

export async function generatePortfolioDescription(
  input: GeneratePortfolioDescriptionInput
): Promise<GeneratePortfolioDescriptionOutput> {
  return generatePortfolioDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePortfolioDescriptionPrompt',
  input: {schema: GeneratePortfolioDescriptionInputSchema},
  output: {schema: GeneratePortfolioDescriptionOutputSchema},
  prompt: `You are a creative marketing expert who excels at writing engaging titles and descriptions for portfolio items.

  Based on the content type and keywords provided, generate a catchy title and a short, compelling description for a portfolio item.

  Content Type: {{{contentType}}}
  Keywords: {{{keywords}}}

  Title: (A short and attention-grabbing title)
  Description: (A brief description that highlights the value and impact of the content)`,
});

const generatePortfolioDescriptionFlow = ai.defineFlow(
  {
    name: 'generatePortfolioDescriptionFlow',
    inputSchema: GeneratePortfolioDescriptionInputSchema,
    outputSchema: GeneratePortfolioDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
