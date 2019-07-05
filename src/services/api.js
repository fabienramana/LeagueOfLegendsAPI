const { Router } = require('express');

const router = new Router();

// Service  API

router.use('/:message', (req, res) => {
  const { message } = req.params;
  res.send({
    message,
  });
});

router.use('/', (req, res) => {
  res.send({
    message: 'ok',
  });
});

module.exports = router;
