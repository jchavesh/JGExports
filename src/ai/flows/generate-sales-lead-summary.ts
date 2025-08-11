'use server';
/**
 * @fileOverview Summarizes sales leads from contact form submissions.
 *
 * - summarizeSalesLead - A function that summarizes sales leads.
 * - SummarizeSalesLeadInput - The input type for the summarizeSalesLead function.
 * - SummarizeSalesLeadOutput - The return type for the summarizeSalesLead function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeSalesLeadInputSchema = z.object({
  name: z.string().describe('The name of the prospect.'),
  email: z.string().email().describe('The email address of the prospect.'),
  company: z.string().describe('The company of the prospect.'),
  country: z.string().describe('The country of the prospect.'),
  productInterest: z.string().describe('The product the prospect is interested in (coffee, plants, or cacao).'),
  message: z.string().describe('Additional information or requirements provided by the prospect.'),
});
export type SummarizeSalesLeadInput = z.infer<typeof SummarizeSalesLeadInputSchema>;

const SummarizeSalesLeadOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the sales lead, including key information and requirements.'),
  qualificationNotes: z.string().describe('Notes on whether the lead is qualified and any follow-up actions needed.'),
});
export type SummarizeSalesLeadOutput = z.infer<typeof SummarizeSalesLeadOutputSchema>;

export async function summarizeSalesLead(input: SummarizeSalesLeadInput): Promise<SummarizeSalesLeadOutput> {
  return summarizeSalesLeadFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeSalesLeadPrompt',
  input: {schema: SummarizeSalesLeadInputSchema},
  output: {schema: SummarizeSalesLeadOutputSchema},
  prompt: `You are an AI assistant helping sales representatives quickly qualify leads from contact form submissions.

  Summarize the prospect's needs and determine if they are a qualified lead based on the information provided.
  Include specific qualification notes and suggest follow-up actions.

  Prospect Name: {{name}}
  Email: {{email}}
  Company: {{company}}
  Country: {{country}}
  Product Interest: {{productInterest}}
  Message: {{message}}`,
});

const summarizeSalesLeadFlow = ai.defineFlow(
  {
    name: 'summarizeSalesLeadFlow',
    inputSchema: SummarizeSalesLeadInputSchema,
    outputSchema: SummarizeSalesLeadOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
