const fs = require('fs');
const csv = require('csv-parser');

const csvString = `"name","contractedHours","monday","tuesday","wednesday","thursday","friday","saturday","sunday"
"alex",30,0,1,2,3,0,1,2
"bob",10,2,3,0,1,2,3,0
"lisa",10,3,0,1,2,3,0,1
"henry",35,1,2,3,0,1,2,3
"arthur",10,2,3,0,1,2,3,0
"jeremiah",35,3,0,1,2,3,0,1
"hiacynth",35,0,1,2,3,0,1,2
"brenda",10,1,2,3,0,1,2,3`;

const results = [];

fs.createReadStream('rota.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    // Further processing with the parsed data can be done here
  });
