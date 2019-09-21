const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (userId) => {
  return connect()
    .then(db => db.collection(collections.FAVORITES))
    .then(collection => collection.find({ userId }))
    .then(cursor => cursor.toArray());
};
