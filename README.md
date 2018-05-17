# RTPI JavaScript Client
![Dublin Bus Logo](https://www.dublinbus.ie/Templates/Public/Styles/Images/logo_dublinbus.jpg)

## About 
This module provides informations from the 
[Dublin Bus REST API](https://data.gov.ie/dataset/real-time-passenger-information-rtpi-for-dublin-bus-bus-eireann-luas-and-irish-rail).

It's possible to get informations about:
* Realtime information by stop number/stop id;
* Filtered realtime information by route number/route id;
* All Bus stops;
* Filtered bus stops by address;
* All Routes;
* Filtered route list by route name/route id

## Examples
You have to install the module before you can use it:
```bash
npm install --save dublinbus-rtpi
```

How to use it:

```javascript
const dublinBusClient = require('dublinbus-rtpi');

// Realtime information by stop number/stop id
dublinBusClient.realtimeBusInformation.getInformationByStopId(515)
  .then(console.log)
  .catch(console.error);

/*
{
  "errorcode": "0",
  "errormessage": "",
  "numberofresults": 25,
  "stopid": "515",
  "timestamp": "16/05/2018 19:32:34",
  "results": [
      {
        "arrivaldatetime": "16/05/2018 19:37:22",
        "duetime": "4",
        "departuredatetime": "16/05/2018 19:37:22",
        "departureduetime": "4",
        "scheduledarrivaldatetime": "16/05/2018 19:38:00",
        "scheduleddeparturedatetime": "16/05/2018 19:38:00",
        "destination": "Beaumont",
        "destinationlocalized": "Beaumont",
        "origin": "Dundrum",
        "originlocalized": "Dundrum",
        "direction": "Inbound",
        "operator": "bac",
        "additionalinformation": "",
        "lowfloorstatus": "no",
        "route": "14",
        "sourcetimestamp": "16/05/2018 19:31:44",
        "monitored": "true"
    },
    {
        "arrivaldatetime": "16/05/2018 19:37:30",
        "duetime": "4",
        ....
*/

// Filtered realtime information by route number/route id
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

// All bus stops
dublinBusClient.busStop.getAllInformation()
  .then(console.log)
  .catch(console.error);

/*
{ errorcode: '0',
  errormessage: '',
  numberofresults: 4683,
  timestamp: '17/05/2018 02:35:58',
  results: 
   [ { stopid: '2',
       displaystopid: '2',
       shortname: 'Parnell Square',
       shortnamelocalized: 'Cearnóg Parnell',
       fullname: 'Parnell Square',
       fullnamelocalized: '',
       latitude: '53.35224111',
       longitude: '-6.263695',
       lastupdated: '08/05/2018 09:12:08',
       operators: [Array] },
       {...}]}
*/

// Filtered bus stops by address
dublinBusClient.busStop.getByAddress('Parnell Square')
  .then(console.log)
  .catch(console.error);

/*
{ errorcode: '0',
  errormessage: '',
  numberofresults: 13,
  timestamp: '17/05/2018 02:38:00',
  results: 
   [ { stopid: '2',
       displaystopid: '2',
       shortname: 'Parnell Square',
       shortnamelocalized: 'Cearnóg Parnell',
       fullname: 'Parnell Square',
       fullnamelocalized: '',
       latitude: '53.35224111',
       longitude: '-6.263695',
       lastupdated: '08/05/2018 09:12:08',
       operators: [Array] },
     { stopid: '3',
       displaystopid: '3',
       shortname: 'Parnell Square',
       shortnamelocalized: 'Cearnóg Parnell',
       fullname: 'Parnell Square',
       fullnamelocalized: '',
       latitude: '53.35230694',
       longitude: '-6.263783056',
       lastupdated: '08/05/2018 09:12:08',
       operators: [Array] },
       {...}]}
*/

// All Routes
dublinBusClient.routeList.getRoute()
  .then(console.log)
  .catch(console.error);

/*
{ errorcode: '0',
  errormessage: '',
  numberofresults: 239,
  timestamp: '17/05/2018 02:32:58',
  results: 
   [ { route: '1' },
     { route: '102' },
     { route: '104' },
     { route: '11' },
     { route: '111' },
     { route: '114' },
     { route: '116' },
     { route: '118' },
     { route: '120' },
     { route: '122' },
     { route: '123' },
     { route: '13' },
     { route: '130' },
     { route: '14' },
     { route: '140' },
     { route: '142' },
     { route: '145' },
     { route: '14C' },
     ...]}
*/

// Filtered route list by route name/route id
let routeid = '66'; //66X
dublinBusClient.routeList.getRoute(routeid)
  .then(console.log)
  .catch(console.error);

/* Output:
{ errorcode: '0',
  errormessage: '',
  numberofresults: 239,
  timestamp: '17/05/2018 02:28:40',
  results: 
   [ { route: '66' },
     { route: '66A' },
     { route: '66B' },
     { route: '66X' },
     { route: '66' },
     { route: '66A' } ] }
*/

```

# License
MIT