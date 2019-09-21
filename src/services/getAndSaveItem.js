const request = require('request');
const config = require('config');

function getAndSaveItem(url) {
  const options = {
    path: url,
    method: 'GET',
    headers: {
      Authorization: config.get('api_key'),
    },
  };
  request(options, { json: true }, (err, res, body) => {
    if (err) {
      return err;
    }
    console.log(body.data);
    return res;
  });
}

module.exports = getAndSaveItem;
