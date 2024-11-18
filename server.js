const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Simple chatbot logic
const chatbotResponses = {
    "hello": "Hi there! How can I assist you today?",
    "how are you?": "I'm just a bunch of code, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a great day!",
};

app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    const botResponse = chatbotResponses[userMessage] || "I'm sorry, I don't understand that.";
    res.json({ response: botResponse });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});