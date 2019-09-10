const Cryptr = require('cryptr');
const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../../client/mysql');

const cryptr = new Cryptr('myTotalySecretKey');
const EXPIRES_IN_MINUTES = '1440m';
const JWTSecret = 'myathenticationtoken';

module.exports.register = function (req, res) {
  const encryptedString = cryptr.encrypt(req.body.password);
  const users = {

    Username: req.body.username,
    email: req.body.email,
    password: encryptedString,

  };
  connection.query('INSERT INTO inscription SET ?', users, (error, results, fields) => {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query',
        error,
      });
    } else {
      res.json({
        status: true,
        token: jwt.sign({ admin: results.insertId }, JWTSecret, {
          expiresIn: EXPIRES_IN_MINUTES,
        }),
        message: 'user registered sucessfully',
      });
    }
  });
};
