const express = require('express');
const { server } = require('http');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// routing stuff

// app setup 
const app = express();
const PORT = process.env.PORT || 3000;

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('trust proxy', 1);

// pages
app.get('/', (req, res) => {
    res.render('main');
});

// start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});