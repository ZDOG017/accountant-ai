// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import { generateResponse, handleFileUpload } from "./controllers";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());

const upload = multer({ dest: 'uploads/' });

app.post("/generate", generateResponse);
app.post("/upload", upload.single('file'), handleFileUpload);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
