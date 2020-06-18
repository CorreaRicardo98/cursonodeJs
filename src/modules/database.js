const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const conn = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

module.exports = conn;
