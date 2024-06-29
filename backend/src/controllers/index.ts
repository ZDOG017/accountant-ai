// src/controllers/index.ts
import { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

// OpenAIApi required config
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// These arrays are to maintain the history of the conversation
const conversationContext: [string, string][] = [];

// Объявление типов для сообщений
interface ChatCompletionMessageParam {
  role: 'user' | 'assistant' | 'system';
  content: string;
  name?: string;
}

// Обновление currentMessages типа
const currentMessages: ChatCompletionMessageParam[] = [];

// Controller function to handle chat conversation
export const generateResponse = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const modelId = "gpt-3.5-turbo";
    const promptText = `${prompt}\n\nResponse:`;

    // Restore the previous context
    for (const [inputText, responseText] of conversationContext) {
      currentMessages.push({ role: "user", content: inputText });
      currentMessages.push({ role: "assistant", content: responseText });
    }

    // Stores the new message
    currentMessages.push({ role: "user", content: promptText });

    const result = await openai.chat.completions.create({
      model: modelId,
      messages: currentMessages,
    });

    const responseText = result.choices[0].message?.content || '';
    conversationContext.push([promptText, responseText]);
    res.send({ response: responseText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
