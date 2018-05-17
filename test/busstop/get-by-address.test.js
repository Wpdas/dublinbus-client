'use strict'

const assert = require('assert');
const nocks = require('../nock');
const busStop = require('../../lib/busstop/');

describe('Test Bus stop information by address', function() {
  it('Should return information of all bus stops that did match', function() {
    let addressName = 'Parnell Square';
    let getBusStopInformationByAddressNock = nocks.getBusStopInformationByAddress(addressName);
    let expectedNumberOfResults = 13;
    busStop.getByAddress(addressName).then((response) => {
      assert.equal(getBusStopInformationByAddressNock.isDone(), true);
      assert.deepEqual(response.numberofresults, expectedNumberOfResults);
    });
  });
});