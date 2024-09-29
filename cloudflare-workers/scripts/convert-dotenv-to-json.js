const fs = require('fs');
const dotenv = require('dotenv');
const config = dotenv.config({ path: __dirname + '/../.dev.vars' });
fs.writeFileSync(__dirname + '/../.env.json', JSON.stringify(config.parsed));
