const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('api route /')
  res.status(200).send('Hello World!').end();
});

module.exports = app
