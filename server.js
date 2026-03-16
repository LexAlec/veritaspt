require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const API_KEY = process.env.GEMINI_API_KEY;

app.use(express.json());

app.get('/api/gemini', async (req, res) => {
    try {
        const response = await axios.get('https://api.gemini.com/v1/some-endpoint', {
            headers: {
                'Content-Type': 'application/json',
                'X-GEMINI-APIKEY': API_KEY
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving data from Gemini API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
