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

router.route('/items/list')
  .get(displayItems);

router.route('/item/:itemId')
  .get(findOneById)
  .post(addMyItem);

router.route('/user/:userId/item/:itemId')
  .post(addItem);

router.route('/favorites/list')
  .get(findFavorites);

router.route('/users/:userId/favorites/list')
  .get(findFavoritesByUser);

router.route('/users/:userId/favorite/:_id')
  .get(findOneFavoriteByIdAndUser)
  .delete(deleteOneFavoriteByIdAndUser);

router.route('/favorite/:_id')
  .get(findOneFavoriteById)
  .delete(deleteOneFavoriteById);


module.exports = router;
