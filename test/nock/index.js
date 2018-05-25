'use strict';

const nock = require('nock');
const config = require('../../lib/config');
const BASE_URL = config.BASE_URL;

let Nocks = function() {
  this.getInformationByStopId = function(stopid, routeid, options) {
    options = options || { status: 200 };
    let url = `/cgi-bin/rtpi/realtimebusinformation`;
    
    switch (options.status) {
      case 200 :
        if (!routeid) {
          return nock(BASE_URL)
            .get(url)
            .query({stopid: stopid, format: 'json'})
            .replyWithFile(options.status, __dirname + '/replies/information-stopid.json');
        } else {
          return nock(BASE_URL)
            .get(url)
            .query({stopid: stopid, routeid: routeid, format: 'json'})
            .replyWithFile(options.status, __dirname + '/replies/information-stopid-routeid.json');
        }
    }
  }

  this.getAllBusStopInformation = function(options) {
    options = options || { status: 200 };
    let url = `/cgi-bin/rtpi/busstopinformation`;

    switch (options.status) {
      case 200 :
        return nock(BASE_URL)
          .get(url)
          .query({operator: 'bac', format: 'json'})
          .replyWithFile(options.status, __dirname + '/replies/busstop-all-information.json');
    }
  }

  this.getBusStopInformationByAddress = function(address, options) {
    options = options || { status: 200 };
    let url = `/cgi-bin/rtpi/busstopinformation`;

    switch (options.status) {
      case 200 :
        return nock(BASE_URL)
          .get(url)
          .query({operator: 'bac', stopname: address, format: 'json'})
          .replyWithFile(options.status, __dirname + '/replies/busstop-by-address.json');
    }
  }

  this.getRouteList = function(options) {
    options = options || { status: 200 };
    let url = `/cgi-bin/rtpi/routelistinformation`;

    switch (options.status) {
      case 200 :
        return nock(BASE_URL)
          .get(url)
          .query({operator: 'bac', format: 'json'})
          .replyWithFile(options.status, __dirname + '/replies/routelist.json');
    }
  }
};

module.exports = new Nocks();