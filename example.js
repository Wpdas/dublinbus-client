'use strict';

//let dublinBusClient = require('dublinbus-client');
let dublinBusClient = require('./index');

let stopNumber = 2;
let routeNumber = 38
dublinBusClient.realtimeBusInformation.getInformationByStopId(stopNumber, routeNumber)
  .then(console.log)
  .catch(console.error);

/*
{
  "errorcode": "0",
  "errormessage": "",
  "numberofresults": 1,
  "stopid": "2",
  "timestamp": "16/05/2018 23:44:28",
  "results": [
      {
          "arrivaldatetime": "17/05/2018 00:02:07",
          "duetime": "17",
          "departuredatetime": "17/05/2018 00:02:07",
          "departureduetime": "17",
          "scheduledarrivaldatetime": "16/05/2018 23:32:00",
          "scheduleddeparturedatetime": "16/05/2018 23:32:00",
          "destination": "Damastown",
          "destinationlocalized": "Baile Dama",
          "origin": "Burlington Road",
          "originlocalized": "Burlington Road",
          "direction": "Outbound",
          "operator": "bac",
          "additionalinformation": "",
          "lowfloorstatus": "no",
          "route": "38",
          "sourcetimestamp": "16/05/2018 23:27:09",
          "monitored": "true"
      }
  ]
}
*/