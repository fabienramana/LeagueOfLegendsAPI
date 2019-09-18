const createAdmin = require('../services/createAdmin.js');


module.exports = (req, res, next) => {
  createAdmin()
    .then(() => {
      res.json({
        status: 'admin created!',
      });
    })
    .catch((err) => {
      next(err);
    });
};
