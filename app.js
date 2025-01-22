

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');  // Import path module

const app = express();

dotenv.config(); // To load environment variables from .env file

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Set up view engine as EJS
app.set('view engine', 'ejs');

// Explicitly set views directory using path.join
app.set('views', path.join(__dirname, 'views'));

// Route to render index.ejs
app.get('/', (req, res) => {
    res.render('index');  // Renders the "index.ejs" file in the "views" folder
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
