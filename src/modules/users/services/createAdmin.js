const bcrypt = require('bcrypt');
const { modelAdmin } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findIfEmailExists = require('./findIfEmailExists');

module.exports = () => {
  const encryptedPassword = bcrypt.hashSync('admin', 10);

  return findIfEmailExists('admin@api.com')
    .then(modelAdmin.validate({
      firstname: 'admin',
      lastname: 'admin',
      email: 'admin@api.com',
      password: encryptedPassword,
      isAdministrator: 1,
    }))
    .then(connect)
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.insertOne({
      firstname: 'admin',
      lastname: 'admin',
      email: 'admin@api.com',
      password: encryptedPassword,
      isAdministrator: 1,
    }))
    .then(dbResponse => dbResponse.ops[0]);
};
