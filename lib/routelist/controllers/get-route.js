'use strict'

const request = require('request-promise-native');
const config = require('../../config');
const BASE_URL = config.get('BASE_URL');

function getRoute(routeid) {
  return new Promise((resolve, reject) => {
    request(`${BASE_URL}/cgi-bin/rtpi/routelistinformation?operator=bac&format=json`)
    .then((res) => {
      let response = JSON.parse(res);
      if (routeid && response.errorcode && response.errorcode === '0') {
        let newResults = response.results.filter((routeItem) => {
          return routeItem.route.indexOf(routeid) !== -1;
        });

        response.numberofresults = newResults.length;
        response.results = newResults;
      }

      response.results.map((routeItem) => {
        delete routeItem.operator;
        routeItem.route = routeItem.route.replace('bac|', '');
        return routeItem;
      });

      resolve(response);
    })
    .catch(reject);
  });
};

module.exports = getRoute;