const decodeToken = require('../../../services/decodeToken');
const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const userWhoRequested = decodeToken(req);
  if (typeof userWhoRequested._id !== 'undefined') { // eslint-disable-line no-underscore-dangle
    deleteOneById(userWhoRequested._id) // eslint-disable-line no-underscore-dangle
      .then((deletedUser) => {
        res.json(deletedUser);
      })
      .catch((err) => {
        next(err);
      });
  } else {
    res.status(403);
    res.json({
      status: 'Unauthorized',
    });
  }
};
