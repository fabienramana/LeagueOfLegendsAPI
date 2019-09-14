const { Router } = require('express');
const basicsRouter = require('../modules/basics/router');
const usersRouter = require('../modules/users/router');

const router = new Router();

// Service  API
router.use(basicsRouter);
// router.use('/api', usersRouter);
router.use(usersRouter);

module.exports = router;
