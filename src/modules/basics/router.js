const { Router } = require('express');
const config = require('config');
const request = require('request');

const router = new Router();

// Service  API

router.use('/ping', (req, res) => {
  res.send({
    ping: 'pong',
  });
});

router.use('/lol', (req, res) => {
  request({
    uri: `https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${config.get('api_key')}`,
    method: 'GET',
    timeout: 10000,
  }, (error, response, body) => {
    res.send(body);
  });
});

module.exports = router;
