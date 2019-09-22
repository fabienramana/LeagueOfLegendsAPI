const { Router } = require('express');
const basicsRouter = require('../modules/basics/router');
const usersRouter = require('../modules/users/router');
const lolRouter = require('../modules/leagueOfLegends/router');

const router = new Router();

// Service  API
router.use('/api', basicsRouter);
router.use('/api', usersRouter);
router.use('/api', lolRouter);

module.exports = router;
