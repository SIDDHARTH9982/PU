const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Endpoint to get AI reply
app.post('/api/getAIReply', (req, res) => {
    const userInput = req.body.input;
    const geminiAPIKey = process.env.GEMINI_API_KEY;

    if (!geminiAPIKey) {
        return res.status(500).json({ error: 'Gemini API key is not configured.' });
    }

    // Here you would typically call the Gemini API using the geminiAPIKey
    // For now, we'll just send back a mock response
    res.json({ reply: `This is a mock reply to your input: ${userInput}` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
