const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (_id) => {
  return connect()
    .then(db => db.collection(collections.FAVORITES))
    .then(collection => collection.findOne({ _id: ObjectId(_id) }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error('Favorite not found');
      err.status = 404;
      err.name = "Aucun favori n'a été trouvé pour cet id";
      throw err;
    });
};
