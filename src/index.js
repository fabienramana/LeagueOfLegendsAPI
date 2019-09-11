/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const apiRouter = require('./services/api');
const errors = require('./middleware/errors');
const notFound = require('./middleware/notFound');

const server = express();
// Middlware Généraux
server.use(bodyParser.json());

// Middlware fonctionnels
server.use(apiRouter);

// Last one
server.use(notFound);

// Middleware d'erreur
server.use(errors);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
