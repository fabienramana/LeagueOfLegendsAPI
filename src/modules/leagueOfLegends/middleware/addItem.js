const addItem = require('../services/addItem');
const { getRoute } = require('../../../services/request');
const decodeToken = require('../../../services/decodeToken');


module.exports = (req, res, next) => {
  const { itemId } = req.params;
  const { userId } = req.params;
  const url = `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`;
  const userWhoRequested = decodeToken(req);
  if (userWhoRequested._id === userId // eslint-disable-line no-underscore-dangle
    || userWhoRequested.isAdministrator === 1) {
    getRoute(url)
      .then(body => addItem(body, userWhoRequested._id)) // eslint-disable-line no-underscore-dangle
      .then(data => res.json({
        favorite: data,
      }))
      .catch((err) => {
        next(err);
      });
  } else {
    res.json({
      status: 'Unauthorized',
    });
  }
};
