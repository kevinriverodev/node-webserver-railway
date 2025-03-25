const http = require('http');
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use( express.static('public') );

app.get('/', (req, res) => {
  res.render('home', {
    name: 'Kevin Rivero',
    title: 'Webserver App'
  });
});

app.get('/generic', (req, res) => {
  res.render('generic', {
    name: 'Kevin Rivero',
    title: 'Webserver App'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    name: 'Kevin Rivero',
    title: 'Webserver App'
  });
});

app.listen(port, () => {
  console.log(`Webserver running in port ${port}`)
})