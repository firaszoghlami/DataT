const  GoogleSpreadsheet = require('google-spreadsheet');

const { promisify } = require('util');

const creds = require('./client_secret.json');


function printStudent(student) {
console.log(`Name : ${student.studentname}`);
console.log(`Major: ${student.major}`);
console.log(`Home State: ${student.homestate}`);
console.log('-----------------');

}


async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet('1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms');
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const sheet = info.worksheets[0];
   

    const rows = await promisify(sheet.getRows)({
        //offset: 5,
        //limit: 10,
        //orderby: 'homestate'
        //query : 'homestate = NY' 
    });
    rows.forEach(row => {
        printStudent(row);
        //row.homestate = 'PA';
        //row.save();        
    });
}

accessSpreadsheet();