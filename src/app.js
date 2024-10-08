const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const axios = require('axios');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {
    PORT,
    OPENAI_API_KEY,
} = process.env;

app.post('/generate', async (req, res) => {
    const { prompt, system } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: system },
                { role: 'user', content: prompt }
            ],
            temperature: 0.8
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const content = response.data.choices[0].message.content;
        res.json({ content });
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});


app.use(express.static(path.join(__dirname, 'public'), { index: 'index.htm' }));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
