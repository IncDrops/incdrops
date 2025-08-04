'use server';

/**
 * @fileOverview AI flow for generating curated trend reports.
 *
 * - generateTrendReports - A function that generates curated trend reports.
 * - GenerateTrendReportsInput - The input type for the generateTrendReports function.
 * - GenerateTrendReportsOutput - The return type for the generateTrendReports function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTrendReportsInputSchema = z.object({
  query: z.string().describe('The trend query to generate reports for.'),
});
export type GenerateTrendReportsInput = z.infer<typeof GenerateTrendReportsInputSchema>;

const GenerateTrendReportsOutputSchema = z.object({
  report: z.string().describe('The generated trend report.'),
});
export type GenerateTrendReportsOutput = z.infer<typeof GenerateTrendReportsOutputSchema>;

export async function generateTrendReports(input: GenerateTrendReportsInput): Promise<GenerateTrendReportsOutput> {
  return generateTrendReportsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTrendReportsPrompt',
  input: {schema: GenerateTrendReportsInputSchema},
  output: {schema: GenerateTrendReportsOutputSchema},
  prompt: `You are an AI trend forecaster. Generate a trend report based on the following query:\n\nQuery: {{{query}}}\n\nReport: `,
});

const generateTrendReportsFlow = ai.defineFlow(
  {
    name: 'generateTrendReportsFlow',
    inputSchema: GenerateTrendReportsInputSchema,
    outputSchema: GenerateTrendReportsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
