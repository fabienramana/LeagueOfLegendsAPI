const decodeToken = require('../../../services/decodeToken');
const updateOne = require('../services/updateOne');

module.exports = (req, res, next) => {
  const userToUpdate = req.body;

  const userWhoRequested = decodeToken(req);
  if (typeof userWhoRequested._id !== 'undefined') { // eslint-disable-line no-underscore-dangle
    updateOne(userWhoRequested._id, userToUpdate) // eslint-disable-line no-underscore-dangle
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
