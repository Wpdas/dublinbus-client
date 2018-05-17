'use strict'

const request = require('request-promise-native');
const config = require('../../config');
const BASE_URL = config.get('BASE_URL');

function getInformationByStopId(stopid, routeid) {
  let filter = routeid ? `&routeid=${routeid}` : '';
  return request(`${BASE_URL}/cgi-bin/rtpi/realtimebusinformation?stopid=${stopid}${filter}&format=json`)
    .then(res => JSON.parse(res));
};

module.exports = getInformationByStopId;