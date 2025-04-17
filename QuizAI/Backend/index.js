const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview" });
console.log(process.env.GEMINI_API_KEY)
// Middleware
app.use(cors());
app.use(express.json());

// Quiz Generation Endpoint
app.post('/generate-quiz', async (req, res) => {
  try {
    const { topic, difficulty = 'medium', questionCount = 5 } = req.body;
    
    if (!topic) {
      return res.status(400).json({ error: "Topic is required" });
    }

    const prompt = `
      Generate a ${difficulty} difficulty quiz with ${questionCount} questions about ${topic}.
      Format as JSON: {
        "questions": [
          {
            "question": "...",
            "options": ["...", "...", "...", "..."],
            "correctAnswer": 0
          }
        ]
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const quiz = JSON.parse(response.text());
    
    res.json(quiz);
  } catch (err) {
    console.error("Generation error:", err);
    res.status(500).json({ error: "Failed to generate quiz" });
  }
});

app.listen(3001, () => console.log('Server running on port 3001'));