'use strict'

const request = require('request-promise-native');
const config = require('../../config');
const BASE_URL = config.get('BASE_URL');

function getAllBusStopInformation() {
  return request(`${BASE_URL}/cgi-bin/rtpi/busstopinformation?operator=bac&format=json`)
    .then(res => JSON.parse(res));
};

module.exports = getAllBusStopInformation;