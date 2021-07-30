// Importing MySQL module
const mysql = require("mysql");
  
// Creating connection
let db_con = mysql.createConnection({
  host: 'localhost',
  user: 'firas',
  password: 'newpassword',
  database: 'test'
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