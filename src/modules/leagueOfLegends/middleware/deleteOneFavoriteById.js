const deleteOneFavoriteById = require('../services/deleteOneFavoriteById');


module.exports = (req, res, next) => {
  const { _id } = req.params;
  deleteOneFavoriteById(_id) // eslint-disable-line no-underscore-dangle
    .then(data => res.json({
      favoris: data,
    }))
    .catch((err) => {
      next(err);
    });
};
