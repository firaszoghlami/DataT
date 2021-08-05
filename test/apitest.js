'use strict'


const { google } = require('googleapis')

const dotenv = require('dotenv'); dotenv.config();//LOAD ENV CONFIG

const scopes = 'https://www.googleapis.com/auth/analytics.readonly'

const jwt = new google.auth.JWT(process.env.GA_CLIENT_EMAIL, null, process.env.GA_PRIVATE_KEY, scopes)

// Importing MySQL module
const mysql = require("mysql");

// Creating connection
let db_con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
});

const view_id = '247106205'

async function getData() {
    const response = await jwt.authorize()
    let result = await google.analytics('v3').data.ga.get({
      'auth': jwt,
      'ids': 'ga:' + view_id,
      'start-date': '30daysAgo',
      'end-date': 'today',
      'metrics': 'ga:sessions',
    })
      
    // console.dir(result.data.rows[0][1])
    console.dir(result.data.rows[0][0])
   
    insertValue(result.data.rows[0][0])
    
  }
  function insertValue( Value )
  {
    let query = `INSERT INTO page (pageviews) VALUES (`+ Value +`);`;

    db_con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");

      db_con.query(query, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
  }
  getData()
