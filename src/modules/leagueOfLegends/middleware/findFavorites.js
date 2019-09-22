const findFavorites = require('../services/findFavorites');
const decodeToken = require('../../../services/decodeToken');


module.exports = (req, res, next) => {
  const userWhoRequested = decodeToken(req);
  findFavorites(userWhoRequested._id) // eslint-disable-line no-underscore-dangle
    .then(data => res.json({
      data,
    }))
    .catch((err) => {
      next(err);
    });
};
