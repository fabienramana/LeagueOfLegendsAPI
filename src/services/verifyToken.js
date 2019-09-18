const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  if (typeof req.token !== 'undefined') {
    jwt.verify(req.token, 'secretKey', (err) => {
      if (err) {
        res.status(403);
        res.json({
          status: 'Unauthorized',
        });
      } else {
        next();
      }
    });
  } else {
    res.status(403);
    res.json({
      status: 'Unauthorized',
    });
  }
}

module.exports = verifyToken;
