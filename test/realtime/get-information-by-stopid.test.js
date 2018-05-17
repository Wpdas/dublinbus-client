'use strict'

const assert = require('assert');
const nocks = require('../nock');
const realtime = require('../../lib/realtime/');

describe('Test Real time information', function() {
  it('Should return information from bus by stopid', function() {
    let stopid = 515;
    let getInformationByStopIdNock = nocks.getInformationByStopId(stopid);

    realtime.getInformationByStopId(stopid).then((response) => {
      assert.equal(getInformationByStopIdNock.isDone(), true);
      assert.deepEqual(response.stopid, stopid);
    });
  });

  it('Should return information from bus by stopid and routeid', function() {
    let stopid = 2;
    let routeid = 38
    let getInformationByStopIdNock = nocks.getInformationByStopId(stopid, routeid);

    realtime.getInformationByStopId(stopid, routeid).then((response) => {
      assert.equal(getInformationByStopIdNock.isDone(), true);
      assert.deepEqual(response.stopid, stopid);
      assert.deepEqual(response.results[0].route, routeid);
    });
  });
});