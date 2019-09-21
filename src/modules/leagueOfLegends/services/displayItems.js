const { getRoute } = require('../../../services/request');

module.exports = () => {
  return getRoute('https://fortnite-api.theapinetwork.com/items/list');
};
