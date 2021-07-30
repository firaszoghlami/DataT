'use strict'


const { google } = require('googleapis')
const key = require ('./auth.json')
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes)

const view_id = '247106205'

process.env.GOOGLE_APPLICATION_CREDENTIALS = './auth.json'

async function getData() {
    const response = await jwt.authorize()
    let result = await google.analytics('v3').data.ga.get({
      'auth': jwt,
      'ids': 'ga:' + view_id,
      'start-date': '30daysAgo',
      'end-date': 'today',
      'dimensions': 'ga:browser',
      'metrics': 'ga:sessions',
      'filters': 'ga:browser==Chrome',
    })
      
    console.dir(result.data.rows[0][1])
   
    
  }
  
  getData()

// Function to insert single row values in
// the database
let singleRowInsert = () => {

	let query = `INSERT INTO page
		(pageviews) VALUES (?);`;

	// Value to be inserted
	

	// Creating queries
	db_con.query(query, [result
	], (err, rows) => {
		if (err) throw err;
		console.log("Row inserted with id = "
			+ rows.insertId);
	});
};

 
