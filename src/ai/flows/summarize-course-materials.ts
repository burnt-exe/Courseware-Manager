'use server';

/**
 * @fileOverview A course material summarization AI agent.
 *
 * - summarizeCourseMaterials - A function that summarizes course materials.
 * - SummarizeCourseMaterialsInput - The input type for the summarizeCourseMaterials function.
 * - SummarizeCourseMaterialsOutput - The return type for the summarizeCourseMaterials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCourseMaterialsInputSchema = z.object({
  courseMaterials: z.string().describe('The course materials to summarize.'),
});
export type SummarizeCourseMaterialsInput = z.infer<
  typeof SummarizeCourseMaterialsInputSchema
>;

const SummarizeCourseMaterialsOutputSchema = z.object({
  summary: z.string().describe('The summary of the course materials.'),
});
export type SummarizeCourseMaterialsOutput = z.infer<
  typeof SummarizeCourseMaterialsOutputSchema
>;

export async function summarizeCourseMaterials(
  input: SummarizeCourseMaterialsInput
): Promise<SummarizeCourseMaterialsOutput> {
  return summarizeCourseMaterialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCourseMaterialsPrompt',
  input: {schema: SummarizeCourseMaterialsInputSchema},
  output: {schema: SummarizeCourseMaterialsOutputSchema},
  prompt: `You are an expert courseware developer. Your job is to summarize course materials to assist with quality assurance.

  Summarize the following course materials:

  {{courseMaterials}}`,
});

const summarizeCourseMaterialsFlow = ai.defineFlow(
  {
    name: 'summarizeCourseMaterialsFlow',
    inputSchema: SummarizeCourseMaterialsInputSchema,
    outputSchema: SummarizeCourseMaterialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
