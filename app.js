const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const {
    PORT,
} = process.env;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.htm'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
