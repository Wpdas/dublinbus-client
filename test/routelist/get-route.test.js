'use strict'

const assert = require('assert');
const nocks = require('../nock');
const routelist = require('../../lib/routelist');

describe('Test Route list', function() {
  it('Should return a list of filtered routes', function() {
    let routeid = '66';
    let getRouteListNock = nocks.getRouteList();
    let expectedResult = [
      { route: '66' },
      { route: '66A' },
      { route: '66B' },
      { route: '66X' }
    ]

    routelist.getRoute(routeid)
      .then((response) => {
        assert.equal(getRouteListNock.isDone(), true);
        assert.deepEqual(expectedResult, response.results)
      })
  });

  it('Should return all routes', function() {
    let getRouteListNock = nocks.getRouteList();
    let expectedLenghtList = 115;

    routelist.getRoute()
      .then((response) => {
        assert.equal(getRouteListNock.isDone(), true);
        assert.deepEqual(expectedLenghtList, response.results.length);
      })
  });
});