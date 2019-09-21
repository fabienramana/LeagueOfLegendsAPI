const config = require('config');
const request = require('request');

function getRoute(url) {
  return new Promise(((resolve, reject) => {
    request({
      uri: url,
      method: 'GET',
      timeout: 10000,
      headers: {
        Authorization: config.get('api_key'),
      },
    }, (error, response, body) => {
      const responseJson = JSON.parse(body);
      if (error) {
        return reject(error);
      }
      return resolve(responseJson);
    });
  }));
}


module.exports = {
  getRoute,
};
