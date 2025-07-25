// openaiService.ts

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function askSTFC(question: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are 'Computer' from Star Trek. Only answer questions about Star Trek Fleet Command. Avoid general Star Trek or real-world topics.",
        },
        { role: "user", content: question },
      ],
      temperature: 0.6,
    });

    return response.choices[0].message.content?.trim() || "Unable to respond at this time.";
  } catch (error) {
    console.error("🔻 OpenAI Error:", error);
    return "An error occurred while querying Starfleet archives.";
  }
}
