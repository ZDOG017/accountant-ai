"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const multer_1 = __importDefault(require("multer"));
const controllers_1 = require("./controllers");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const upload = (0, multer_1.default)({ dest: 'uploads/' });
app.post("/generate", controllers_1.generateResponse);
app.post("/upload", upload.single('file'), controllers_1.handleFileUpload);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
