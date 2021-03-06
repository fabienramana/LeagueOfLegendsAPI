const decodeToken = require('../../../services/decodeToken');
const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  const userWhoRequested = decodeToken(req);
  if (userWhoRequested._id === userId // eslint-disable-line no-underscore-dangle
    || userWhoRequested.isAdministrator === 1) {
    findOneById(userId)
      .then((user) => {
        res.json(user);
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
