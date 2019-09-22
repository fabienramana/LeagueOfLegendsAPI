const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteFavoritesByUser = require('../../leagueOfLegends/services/deleteFavoritesByUser');

module.exports = (userId) => {
  return deleteFavoritesByUser(userId)
    .then(connect)
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.deleteOne({ _id: ObjectId(userId) }))
    .then((dbResponse) => {
      if (dbResponse.deletedCount === 1) {
        return {
          status: 'ok',
          deletedItem: userId,
        };
      }

      const err = new Error('Not Found');
      err.status = 404;
      throw err;
    });
};
