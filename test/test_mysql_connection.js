// Importing MySQL module
const mysql = require("mysql");

//LOAD ENV CONFIG
const dotenv = require('dotenv');
dotenv.config();
  
// Creating connection
let db_con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

// Connect to MySQL server
db_con.connect((err) => {
    if (err) {
      console.log("Database Connection Failed !!!", err);
    } else {
      console.log("connected to Database");
    }
  });
    
  module.exports = db_con;