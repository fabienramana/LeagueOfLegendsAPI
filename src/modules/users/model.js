const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  firstname: joi.string(),
  lastname: joi.string(),
  password: joi.string().required(),
  email: joi.string().required(),
}).with('firstname', 'lastname');

const updateModel = joi.object().keys({
  password: joi.string(),
  email: joi.string(),
  firstName: joi.string(),
  lastName: joi.string(),
});

const createModelAdmin = joi.object().keys({
  password: joi.string(),
  email: joi.string(),
  firstName: joi.string(),
  lastName: joi.string(),
  isAdministrator: joi.number(),
});

module.exports = {
  createModel,
  updateModel,
  createModelAdmin,
};
