const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (itemId, userId) => {
  return connect()
    .then(db => db.collection(collections.FAVORITES))
    .then(collection => collection.findOne({ itemId, userId }))
    .then((dbResponse) => {
      if (dbResponse) {
        const err = new Error('Favorite already exists');
        err.status = 500;
        err.name = 'Internal Error';
        throw err;
      }

      return ({
        ok: 'ok',
      });
    });
};
