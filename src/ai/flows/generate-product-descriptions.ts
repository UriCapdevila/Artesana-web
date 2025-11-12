'use server';

/**
 * @fileOverview A product description generator AI agent.
 *
 * - generateProductDescription - A function that handles the product description generation process.
 * - GenerateProductDescriptionInput - The input type for the generateProductDescription function.
 * - GenerateProductDescriptionOutput - The return type for the generateProductDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductDescriptionInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productCategory: z.string().describe('The category of the product (e.g., book, notebook, journal).'),
  productFeatures: z
    .string()
    .describe('A detailed list of the product\u2019s features, materials, and dimensions.'),
  productStyle: z.string().describe('Describe the product\u2019s style, such as rustic, modern, or minimalist.'),
  inspirationKeywords: z.string().describe('Inspiration keywords that reflects the brand identity.'),
});
export type GenerateProductDescriptionInput = z.infer<typeof GenerateProductDescriptionInputSchema>;

const GenerateProductDescriptionOutputSchema = z.object({
  description: z.string().describe('A unique and engaging product description.'),
});
export type GenerateProductDescriptionOutput = z.infer<typeof GenerateProductDescriptionOutputSchema>;

export async function generateProductDescription(
  input: GenerateProductDescriptionInput
): Promise<GenerateProductDescriptionOutput> {
  return generateProductDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductDescriptionPrompt',
  input: {schema: GenerateProductDescriptionInputSchema},
  output: {schema: GenerateProductDescriptionOutputSchema},
  prompt: `You are a marketing expert specializing in writing product descriptions for handcrafted artisanal products.

  Generate a unique and engaging product description for the following product, highlighting its artisanal qualities and unique features.

  Product Name: {{{productName}}}
  Product Category: {{{productCategory}}}
  Product Features: {{{productFeatures}}}
  Product Style: {{{productStyle}}}
  Inspiration Keywords: {{{inspirationKeywords}}}
  `,
});

const generateProductDescriptionFlow = ai.defineFlow(
  {
    name: 'generateProductDescriptionFlow',
    inputSchema: GenerateProductDescriptionInputSchema,
    outputSchema: GenerateProductDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
