const express = require('express');

const routes = express.Router();

routes.get('/healthcheck', (req, res) => {
  return res.json({
    healthcheck: 'The app is alive! :D'
  });
});

module.exports = routes;