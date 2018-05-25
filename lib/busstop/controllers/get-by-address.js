'use strict'

const request = require('request-promise-native');
const config = require('../../config');
const BASE_URL = config.BASE_URL;

function getByAddress(address) {
  return request(`${BASE_URL}/cgi-bin/rtpi/busstopinformation?operator=bac&stopname=${address}&format=json`)
    .then(res => JSON.parse(res));
};

module.exports = getByAddress;