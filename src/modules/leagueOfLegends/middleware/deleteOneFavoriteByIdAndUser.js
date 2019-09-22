const deleteOneFavoriteById = require('../services/deleteOneFavoriteById');
const decodeToken = require('../../../services/decodeToken');


module.exports = (req, res, next) => {
  const { _id } = req.params;
  const { userId } = req.params;
  const userWhoRequested = decodeToken(req);
  if (userWhoRequested._id === userId // eslint-disable-line no-underscore-dangle
    || userWhoRequested.isAdministrator === 1) {
    deleteOneFavoriteById(_id) // eslint-disable-line no-underscore-dangle
      .then(data => res.json({
        favoris: data,
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
