const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  itemId: joi.string(),
  name: joi.string(),
  userId: joi.string(),
});

module.exports = {
  createModel,
};
