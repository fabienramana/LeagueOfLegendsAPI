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
/*  return getRoute(url)
    .then((response) => {
      const { itemId } = response.data;
      const { name } = response.data.item;
      return Promise.all([itemId, name]);
    })
    .then(([itemId, name]) => {
      return Promise.all([itemId, name]);
    })
    .then(([itemId, name]) => {
      return Promise.all([itemId, name, connect()]);
    })
    .then(([itemId, name, db]) => {
      return Promise.all([itemId, name, db.collection(collections.FAVORITES)]);
    })
    .then(([itemId, name, collection]) => {
      collection.insertOne({
        itemId,
        name,
      }, (err, res) => {
        if (err) {
          throw err;
        }
        console.log(res.ops[0]);
        return Promise.all([res.ops[0]]);
      });
    })
    .then((response) => {
      console.log(response);
      return response;
    }); */
};
