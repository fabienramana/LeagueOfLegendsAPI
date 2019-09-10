const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'loldatabase',
});


connection.connect((err) => {
  if (err) {
    console.log('error');
  } else {
    console.log('connected !!');
  }
});
/*
connection.query('SELECT * FROM inscription', (err, rows, fields) => {
  if (err) {
    console.log('error query');
  } else {
    console.log('the query is : ', rows);
  }
});

connection.end();*/

module.exports = connection;
