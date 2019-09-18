const decodeToken = require('../../../services/decodeToken');
const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const userWhoRequested = decodeToken(req);
  if (typeof userWhoRequested._id !== 'undefined') { // eslint-disable-line no-underscore-dangle
    findOneById(userWhoRequested._id) // eslint-disable-line no-underscore-dangle
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
