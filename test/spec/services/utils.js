'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  var arrayWithDuplicates = [1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6, 7, 9];
  var uniqueItems = [1, 2, 3, 4, 5, 6, 7, 9];

  it('should be defined', function () {
    expect(utils).toBeDefined();
    expect(utils.unique).toBeDefined();
  });

  it('should filter the array down into unique items', function () {
    expect(utils.unique(arrayWithDuplicates)).toEqual(uniqueItems);
  });

});
