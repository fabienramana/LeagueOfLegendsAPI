const displayItems = require('../services/displayItems');

module.exports = (req, res, next) => {
  displayItems()
    .then((body) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(body);
    })
    .catch((err) => {
      next(err);
    });
};
