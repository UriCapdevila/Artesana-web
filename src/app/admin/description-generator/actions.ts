"use server";

import {
  generateProductDescription,
  type GenerateProductDescriptionInput,
  type GenerateProductDescriptionOutput,
} from "@/ai/flows/generate-product-descriptions";

type ActionResult = {
  success: boolean;
  data?: GenerateProductDescriptionOutput;
  error?: string;
};

export async function handleGenerateDescription(
  input: GenerateProductDescriptionInput
): Promise<ActionResult> {
  try {
    const output = await generateProductDescription(input);
    if (!output?.description) {
      throw new Error("The AI model did not return a description.");
    }
    return { success: true, data: output };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
    return { success: false, error: errorMessage };
  }
}
