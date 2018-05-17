'use strict'

const assert = require('assert');
const nocks = require('../nock');
const busStop = require('../../lib/busstop/');

describe('Test Bus stop information', function() {
  it('Should return all information of all bus stops', function() {
    let getAllBusStopInformationNock = nocks.getAllBusStopInformation();
    let expectedNumberOfResults = 10111;
    busStop.getAllInformation().then((response) => {
      assert.equal(getAllBusStopInformationNock.isDone(), true);
      assert.deepEqual(response.numberofresults, expectedNumberOfResults);
    });
  });
});