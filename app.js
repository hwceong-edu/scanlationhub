const express = require('express');
const app = express();

const RSSParser = require('rss-parser');
parser = new RSSParser();

const port = process.env.PORT || 3000;

app.get('/', (req, res) =>
  res.send("Hello World!")
);

app.get('/feed', (req, res) =>
  
);

app.listen(port);