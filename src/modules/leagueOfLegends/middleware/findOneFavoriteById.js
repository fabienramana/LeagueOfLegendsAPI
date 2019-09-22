const findOneFavoriteById = require('../services/findOneFavoriteById');


module.exports = (req, res, next) => {
  const { _id } = req.params;
  findOneFavoriteById(_id) // eslint-disable-line no-underscore-dangle
    .then(data => res.json({
      favoris: data,
    }))
    .catch((err) => {
      next(err);
    });
};
