const { Router } = require('express');
const { getRoute } = require('../../services/request');

const router = new Router();

// Service  API

router.use('/ping', (req, res) => {
  res.send({
    ping: 'pong',
  });
});

router.use('/lol', (req, res) => {
  getRoute('https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations')
    .then((body) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    })
    .catch((err) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(
        err,
      );
    });
});

module.exports = router;
