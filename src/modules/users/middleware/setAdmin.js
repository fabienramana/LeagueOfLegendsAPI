const decodeToken = require('../../../services/decodeToken');
const changeAdminStatus = require('../services/changeAdminStatus');

module.exports = (req, res, next) => {
  const userToUpdate = req.body;
  const { userId } = req.params;

  const userWhoRequested = decodeToken(req);
  if (userWhoRequested.isAdministrator === 1) {
    changeAdminStatus(userId, userToUpdate)
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
