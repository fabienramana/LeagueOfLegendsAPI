const express = require('express');
const connection = require('../../client/mysql');

module.exports.Delete = function (req, res) {
  connection.query('DELETE FROM `inscription` WHERE `username`=?', [req.body.username], (error, results, fields) => {
    if (error) {
      res.json({
        status: false,
        message: 'error with the query',
      });
    }
    res.json({
      status: true,
      message: 'the user is deleted',
    });
  });
};
