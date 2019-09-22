const { Router } = require('express');

const router = new Router();

// Service  API

router.get('/ping', (req, res) => {
  res.send({
    ping: 'pong',
  });
});

module.exports = router;
