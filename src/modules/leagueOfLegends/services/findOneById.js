const { getRoute } = require('../../../services/request');

module.exports = (url) => {
  return getRoute(url);
};
