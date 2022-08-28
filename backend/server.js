import data from "./data";
//const data = require('./data');
//compiler nodemon --watch backend --exec babel-node backend/server.js

const express = require('express');
const app = express();
const port = 5000;

app.get('/api/produits', (req, res) => {
  res.send(data.produits)
});

app.listen(port, () => {
  console.log(`Votre server tourne sur http://localhost:${port}`)
});