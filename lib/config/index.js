'use strict';

const nconf = require('nconf');

nconf.env()
.file('config/config.json');

module.exports = nconf;