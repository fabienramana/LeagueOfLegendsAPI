const addMyItem = require('../services/addItem');
const { getRoute } = require('../../../services/request');
const decodeToken = require('../../../services/decodeToken');
// const { getRoute } = require('../../../services/request');
// const findOneById = require('../services/findOneById');


module.exports = (req, res, next) => {
  const { itemId } = req.params;
  const url = `https://fortnite-api.theapinetwork.com/item/get?id=${itemId}`;
  const userWhoRequested = decodeToken(req);
  getRoute(url)
      .then(body => addMyItem(body, userWhoRequested._id)) // eslint-disable-line 
    .then(data => res.json({
      favorite: data,
    }))
    .catch((err) => {
      next(err);
    });
};

/* Can also be write like the
  return model.validate(listToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.LISTS)
    })
    .then((collection) => {
      return collection.insertOne(listToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
  */
