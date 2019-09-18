const { Router } = require('express');
const createOne = require('./middleware/createOne');
const findOneById = require('./middleware/findOneById');
const find = require('./middleware/find');
const updateOne = require('./middleware/updateOne');
const deleteOneById = require('./middleware/deleteOneById');
const login = require('./middleware/login');
const showMyInformations = require('./middleware/showMyInformations');
const createAdmin = require('./middleware/createAdmin');
const updateMyself = require('./middleware/updateMyself');
const deleteMyself = require('./middleware/deleteMyself');
const assignToken = require('../../services/assignToken');
const verifyToken = require('../../services/verifyToken');

const router = new Router();

router.route('/users')
  .post(createOne);

router.route('/api/login')
  .post(login);

router.route('/users/create-admin')
  .post(createAdmin);

router.use(assignToken);
router.use(verifyToken);

router.route('/users/my-infos')
  .get(showMyInformations);

router.route('/users/modifier')
  .post(updateMyself);

router.route('/users/desactiver')
  .delete(deleteMyself);

router.route('/users/:userId')
  .get(findOneById)
  .patch(updateOne)
  .delete(deleteOneById);

router.route('/users')
  .get(find);

module.exports = router;
