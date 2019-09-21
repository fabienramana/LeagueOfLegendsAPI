const findFavorites = require('../services/findFavorites');
const decodeToken = require('../../../services/decodeToken');


module.exports = (req, res, next) => {
  const userWhoRequested = decodeToken(req);
  /* if (userWhoRequested._id === userId // eslint-disable-line no-underscore-dangle
    || userWhoRequested.isAdministrator === 1) { */
  findFavorites(userWhoRequested._id) // eslint-disable-line no-underscore-dangle
    .then(data => res.json({
      data,
    }))
    .catch((err) => {
      next(err);
    });
  /* } else {
    res.json({
      status: 'Unauthorized',
    });
  } */
};
