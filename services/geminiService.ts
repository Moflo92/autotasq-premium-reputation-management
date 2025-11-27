import { GoogleGenAI } from "@google/genai";

// Initialize Gemini client
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateSEOExample = async (businessType: string, city: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Act as a world-class SEO expert for Google Maps (Local SEO).
      I need you to generate a comparison to demonstrate the value of "Optimized Reviews".

      Context: The user has a business of type "${businessType}" in "${city}".

      Task:
      1. Write a "Standard/Weak Review" (3-4 stars, generic text, no keywords) that a typical customer might leave.
      2. Write a "Autotasq Optimized Review" (5 stars, natural but packed with local SEO keywords relevant to ${businessType} in ${city}).
      3. Briefly explain in one sentence why the second one helps them rank higher.

      Format the output as a JSON object (without markdown code blocks) with keys:
      {
        "weakReview": "string",
        "optimizedReview": "string",
        "explanation": "string"
      }
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });

    return response.text || "{}";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Impossible de générer la démonstration pour le moment.");
  }
};