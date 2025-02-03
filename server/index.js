// base page to start an express server

// import express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

app.use((req, res) => {
    res.json({ message: 'Your request was successful!' });
})

// connect to the database
mongoose.connect('mongodb://localhost:27017/theList');

// start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});