const pool = require('./query')
const fs = require('fs')

const seedQuery = fs.readFileSync('seeding.sql', {encoding: 'utf8'})
pool.query(seedQuery, (err, res) => {
    console.log(err);
    console.log('seeding comlpete');
    pool.end
})