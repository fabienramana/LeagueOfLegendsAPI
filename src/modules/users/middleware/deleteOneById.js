const decodeToken = require('../../../services/decodeToken');
const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  const userWhoRequested = decodeToken(req);
  if (userWhoRequested._id === userId // eslint-disable-line no-underscore-dangle
    || userWhoRequested.isAdministrator === 1) {
    deleteOneById(userId)
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
