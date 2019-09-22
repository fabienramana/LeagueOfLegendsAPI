const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteUserPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = () => {
  return connect()
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.find())
    .then(cursor => cursor.toArray())
    .then((users) => {
      return users.map((user) => {
        return deleteUserPrivateKeys(user);
      });
    });
};
