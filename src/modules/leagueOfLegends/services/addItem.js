// const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findIfFavoriteExists = require('./findIfFavoriteExists');

module.exports = (response, userId) => {
  const { error } = response;

  if (error !== undefined) {
    const err = new Error(`Problem when getting data : ${error}`);
    err.name = 'Not Found';
    err.status = 404;
    throw err;
  }
  const { itemId } = response.data;
  const { name } = response.data.item;

  return findIfFavoriteExists(itemId, userId)
    .then(connect)
    .then(db => db.collection(collections.FAVORITES))
    .then(collection => collection.insertOne({
      itemId,
      name,
      userId,
    }))
    .then(dbResponse => dbResponse.ops[0]);
};
