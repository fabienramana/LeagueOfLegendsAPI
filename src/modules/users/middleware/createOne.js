const jwt = require('jsonwebtoken');
const createOne = require('../services/createOne.js');


module.exports = (req, res, next) => {
  const { firstname } = req.body;
  const { lastname } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  createOne(firstname, lastname, email, password)
    .then((user) => {
      jwt.sign({ user }, 'secretKey', { expiresIn: '1440m' }, (errJWT, token) => {
        res.json({
          _id: user._id, // eslint-disable-line no-underscore-dangle
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          token,
        });
      });
    })
    .catch((err) => {
      next(err);
    });
};
