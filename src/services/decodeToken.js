const jwt = require('jsonwebtoken');

function decodeToken(req) {
  const userDecoded = jwt.decode(req.token);
  const { user } = userDecoded;
  return user;
}

module.exports = decodeToken;
