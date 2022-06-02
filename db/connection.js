const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Brought3.!",
    database: 'tracker'
  },
  console.log('Connected to tracker database')
  );

  module.exports = db;