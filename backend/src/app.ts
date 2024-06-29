// src/app.ts
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import { generateResponse } from "./controllers";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
