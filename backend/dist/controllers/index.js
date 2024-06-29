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
exports.generateResponse = void 0;
const openai_1 = __importDefault(require("openai"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// OpenAIApi required config
const openai = new openai_1.default({
    apiKey: process.env.OPENAI_API_KEY,
});
// These arrays are to maintain the history of the conversation
const conversationContext = [];
// Обновление currentMessages типа
const currentMessages = [];
// Controller function to handle chat conversation
const generateResponse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
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
