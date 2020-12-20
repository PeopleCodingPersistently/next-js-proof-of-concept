const pool = require('./utils/pool');
const fs = require('fs');



pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
