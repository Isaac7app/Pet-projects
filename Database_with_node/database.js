const database = require('mime-db');
const mysql = require('mysql');

const connection = mysql.createConnection({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : 'Youngatm89',
      database : 'new_world'
    }
  });




// const connection = mysql.createConnection({
//     host: 'localhost',
//     database: 'new_world',
//     user: 'root',
//     password: 'Youngatm89'
// })

module.exports = connection;