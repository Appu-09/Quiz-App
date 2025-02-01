const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5001;

app.use(cors());

// Default route for "/"
app.get('/', (req, res) => {
  res.send("Quiz API is running! Use '/quiz' to fetch questions.");
});

// Define the "/quiz" route
app.get('/quiz', async (req, res) => {
  try {
    const response = await axios.get('https://api.jsonserve.com/Uw5CrX'); // Correct API URL
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    res.status(500).json({ message: 'Failed to fetch quiz data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
