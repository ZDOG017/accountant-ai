"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFileUpload = exports.generateResponse = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const xlsx_1 = __importDefault(require("xlsx"));
dotenv_1.default.config();
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
const conversationContext = [];
const currentMessages = [];
const generateResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { prompt } = req.body;
        const modelId = "gpt-4o";
        const promptText = `${prompt}\n\nResponse:`;
        for (const [inputText, responseText] of conversationContext) {
            currentMessages.push({ role: "user", content: inputText });
            currentMessages.push({ role: "assistant", content: responseText });
        }
        currentMessages.push({ role: "user", content: promptText });
        const result = yield openai.chat.completions.create({
            model: modelId,
            messages: currentMessages,
        });
        const responseText = ((_a = result.choices[0].message) === null || _a === void 0 ? void 0 : _a.content) || '';
        conversationContext.push([promptText, responseText]);
        res.send({ response: responseText });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.generateResponse = generateResponse;
const handleFileUpload = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const file = req.file;
        const prompt = req.body.prompt;
        if (!file) {
            return res.status(400).send({ message: "No file uploaded" });
        }
        const filePath = path_1.default.join(__dirname, '..', '..', file.path);
        const workbook = xlsx_1.default.readFile(filePath);
        const sheetNames = workbook.SheetNames;
        const sheetsData = sheetNames.map(sheetName => {
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = xlsx_1.default.utils.sheet_to_json(worksheet);
            return { sheetName, jsonData };
        });
        let fileAnalysis = "The Excel file contains the following sheets and data:\n\n";
        sheetsData.forEach(sheet => {
            fileAnalysis += `Sheet: ${sheet.sheetName}\nData: ${JSON.stringify(sheet.jsonData, null, 2)}\n\n`;
        });
        const modelId = "gpt-4o";
        const promptText = `Analyze the following Excel file data and respond to the user's prompt:\n\n${fileAnalysis}\n\nUser's Prompt: ${prompt}\n\nResponse:`;
        currentMessages.push({ role: "user", content: promptText });
        const result = yield openai.chat.completions.create({
            model: modelId,
            messages: currentMessages,
        });
        const responseText = ((_a = result.choices[0].message) === null || _a === void 0 ? void 0 : _a.content) || '';
        res.send({ response: responseText });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.handleFileUpload = handleFileUpload;
