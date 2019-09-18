const find = require('../services/find');
const decodeToken = require('../../../services/decodeToken');

module.exports = (req, res, next) => {
  const userWhoRequested = decodeToken(req);
  if (userWhoRequested.isAdministrator === 1) {
    find()
      .then((bdd) => {
        res.json(bdd);
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
