'use strict';

const nconf = require('nconf');

nconf.env()
.file(`${__dirname}/config.json`);

module.exports = {
  BASE_URL: 'https://data.smartdublin.ie'
};