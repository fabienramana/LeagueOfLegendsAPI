const errToJson = require('error-to-json');

function badRequest(err, req, res, next) {
  if (err.isJoi) {
    const error = new Error('Bad Request');
    error.status = 400;
    return next(error);
  }

  return next(err);
}

// eslint-disable-next-line no-unused-vars
function sendError(err, req, res, next) {
  res.status(err.status || 500).json(errToJson(err));
}

module.exports = [
  badRequest,
  sendError,
];
