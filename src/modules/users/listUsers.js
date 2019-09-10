const express = require('express');
const connection = require('../../client/mysql');


module.exports.show = function (req, res) {
  const users = {
    username: req.body.username,
  };

  connection.query('SELECT username FROM inscription', (err, results, fields) => {
    if (err) {
      res.json({
        status: false,
        data: err,
      });
    } else {
      res.json({
        status: true,
        data: results,
      });
    }
  });
};
