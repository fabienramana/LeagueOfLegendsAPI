const findOneById = require('../services/findOneItemById');

module.exports = (req, res, next) => {
  const { itemId } = req.params;
  const url = `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`;
  findOneById(url)
    .then((body) => {
      res.setHeader('Content-Type', 'application/json');
      res.send(body.data);
    })
    .catch((err) => {
      next(err);
    });
};
