"use server";

import { generateTrendReports, GenerateTrendReportsInput } from '@/ai/flows/generate-trend-reports';

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
