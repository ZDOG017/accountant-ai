// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Добавляем простой маршрут для проверки сервера
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/api/chat', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    res.json(response.choices[0].message);
  } catch (error) {
    console.error('Error communicating with ChatGPT API:', error);
    res.status(500).json({ error: 'Error communicating with ChatGPT API' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
