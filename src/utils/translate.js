import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function translateText(text, targetLang) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const prompt = `
Translate the following website UI text to ${targetLang}.
Use simple and natural language.
Do not explain.
Return only translated text.

Text:
"${text}"
`;

  const result = await model.generateContent(prompt);
  return result.response.text().trim();
}
