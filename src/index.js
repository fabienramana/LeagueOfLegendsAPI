/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const apiRouter = require('./services/api');

const server = express();
// Middlware Généraux
server.use(bodyParser.json());

/* server.use('/', (req, res) => {
  res.send({
    message: 'ok',
  });
}); */
// Middlware fonctionnels
server.use(apiRouter);

server.listen(config.get('port'), () => {
  console.log(`Server started at port ${config.get('port')}`);
});
