const express = require('express');

const app = express();

app.get('/healthcheck', (req, res) => {
  return res.json({
    healthcheck: 'The app is alive! :D'
  });
})

app.listen(3333);