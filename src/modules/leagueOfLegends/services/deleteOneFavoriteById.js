const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (_id) => {
  return connect()
    .then(db => db.collection(collections.FAVORITES))
    .then(collection => collection.deleteOne({ _id: ObjectId(_id) }))
    .then((dbResponse) => {
      if (dbResponse.deletedCount === 1) {
        return {
          status: 'ok',
          deletedItem: _id,
        };
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
