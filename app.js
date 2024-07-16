const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contact.html'));
});

app.get('/cake', (req, res) => {
  res.send('Hello Cake!');
});

app.get('/cake/ahmedabad', (req, res) => {
  res.send('Hello Ahmedabad Cake!');
});

app.get('/cake/rajkot', (req, res) => {
  res.send('Hello Rajkot Cake!');
});

// Catch-all route for undefined routes
app.get('*', (req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
