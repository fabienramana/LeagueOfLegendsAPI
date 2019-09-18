/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const jwt = require('jsonwebtoken');
const apiRouter = require('./services/api');
const errors = require('./middleware/errors');
const notFound = require('./middleware/notFound');
const assignToken = require('./services/assignToken');

const server = express();

// Middlware Généraux
server.use(bodyParser.json());

// Middlware fonctionnels
server.use(apiRouter);

server.post('/api/posts', assignToken, (req, res) => {
  jwt.verify(req.token, 'secretKey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'post created',
        authData,
      });
    }
  });
});

// Last one
server.use(notFound);

// Middleware d'erreur
server.use(errors);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
