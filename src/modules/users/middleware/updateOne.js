const decodeToken = require('../../../services/decodeToken');
const updateOne = require('../services/updateOne');

module.exports = (req, res, next) => {
  const userToUpdate = req.body;
  const { userId } = req.params;

  const userWhoRequested = decodeToken(req);
  if (userWhoRequested._id === userId // eslint-disable-line no-underscore-dangle
    || userWhoRequested.isAdministrator === 1) {
    updateOne(userId, userToUpdate)
      .then((updatedUser) => {
        res.json(updatedUser);
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
