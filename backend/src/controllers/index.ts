// src/controllers/index.ts
import { Request, Response } from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import xlsx from "xlsx";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const conversationContext: [string, string][] = [];

interface ChatCompletionMessageParam {
  role: 'user' | 'assistant' | 'system';
  content: string;
  name?: string;
}

const currentMessages: ChatCompletionMessageParam[] = [];

export const generateResponse = async (req: Request, res: Response) => {
  try {
    const { prompt } = req.body;
    const modelId = "gpt-4o";
    const promptText = `${prompt}\n\nResponse:`;

    for (const [inputText, responseText] of conversationContext) {
      currentMessages.push({ role: "user", content: inputText });
      currentMessages.push({ role: "assistant", content: responseText });
    }

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

export const handleFileUpload = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    const prompt = req.body.prompt;
    if (!file) {
      return res.status(400).send({ message: "No file uploaded" });
    }

    const filePath = path.join(__dirname, '..', '..', file.path);
    const workbook = xlsx.readFile(filePath);
    const sheetNames = workbook.SheetNames;
    const sheetsData = sheetNames.map(sheetName => {
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = xlsx.utils.sheet_to_json(worksheet);
      return { sheetName, jsonData };
    });

    let fileAnalysis = "The Excel file contains the following sheets and data:\n\n";
    sheetsData.forEach(sheet => {
      fileAnalysis += `Sheet: ${sheet.sheetName}\nData: ${JSON.stringify(sheet.jsonData, null, 2)}\n\n`;
    });

    const modelId = "gpt-4o";
    const promptText = `Analyze the following Excel file data and respond to the user's prompt:\n\n${fileAnalysis}\n\nUser's Prompt: ${prompt}\n\nResponse:`;

    currentMessages.push({ role: "user", content: promptText });

    const result = await openai.chat.completions.create({
      model: modelId,
      messages: currentMessages,
    });

    const responseText = result.choices[0].message?.content || '';
    res.send({ response: responseText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
