const { Router } = require('express');
const displayItems = require('./middleware/displayItems');
const findOneById = require('./middleware/findOneById');
const addItem = require('./middleware/addItem');
const findFavorites = require('./middleware/findFavorites');
const findOneFavoriteById = require('./middleware/findOneFavoriteById');
const deleteOneFavoriteById = require('./middleware/deleteOneFavoriteById');

const router = new Router();

// Service  API

router.route('/api/list')
  .get(displayItems);

router.route('/api/item/:itemId')
  .get(findOneById);

router.route('/api/user/:userId/item/:itemId')
  .post(addItem);

router.route('/api/favoris/liste')
  .get(findFavorites);

router.route('/api/favoris/:_id')
  .get(findOneFavoriteById)
  .delete(deleteOneFavoriteById);


module.exports = router;
