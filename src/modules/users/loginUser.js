const Cryptr = require('cryptr');
const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('../../client/mysql');

cryptr = new Cryptr('myTotalySecretKey');
const EXPIRES_IN_MINUTES = '1440m';
const JWTSecret = 'myathenticationtoken';

module.exports.authenticate = function (req, res) {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };


  connection.query('SELECT * FROM inscription WHERE username = ?', [username], (error, results, fields) => {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query',
      });
    } else if (results.length > 0) {
      decryptedString = cryptr.decrypt(results[0].password);
      if (password == decryptedString) {
        res.json({
          status: true,
          token: jwt.sign({ admin: results.insertId }, JWTSecret, {
            expiresIn: EXPIRES_IN_MINUTES,
          }),
          message: 'successfully authenticated',

        });
      } else {
        res.json({
          status: false,
          message: 'username and password does not match',
        });
      }
    } else {
      res.json({
        status: false,
        message: 'username does not exits',
      });
    }
  });
};
