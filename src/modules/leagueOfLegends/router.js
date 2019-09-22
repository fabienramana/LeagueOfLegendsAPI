const { Router } = require('express');
const displayItems = require('./middleware/displayItems');
const findOneById = require('./middleware/findOneItemById');
const addItem = require('./middleware/addItem');
const addMyItem = require('./middleware/addMyItem');
const findFavorites = require('./middleware/findFavorites');
const findFavoritesByUser = require('./middleware/findFavoritesByUser');
const findOneFavoriteById = require('./middleware/findOneFavoriteById');
const findOneFavoriteByIdAndUser = require('./middleware/findOneFavoriteByIdAndUser');
const deleteOneFavoriteById = require('./middleware/deleteOneFavoriteById');
const deleteOneFavoriteByIdAndUser = require('./middleware/deleteOneFavoriteByIdAndUser');

const router = new Router();

// Service  API

router.route('/api/list')
  .get(displayItems);

router.route('/api/item/:itemId')
  .get(findOneById)
  .post(addMyItem);

router.route('/api/user/:userId/item/:itemId')
  .post(addItem);

router.route('/api/favoris/liste')
  .get(findFavorites);

router.route('/api/users/:userId/favoris/liste')
  .get(findFavoritesByUser);

router.route('/api/users/:userId/favoris/:_id')
  .get(findOneFavoriteByIdAndUser)
  .delete(deleteOneFavoriteByIdAndUser);

router.route('/api/favoris/:_id')
  .get(findOneFavoriteById)
  .delete(deleteOneFavoriteById);


module.exports = router;
