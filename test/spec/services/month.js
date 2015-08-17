'use strict';

describe('Service: Month', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var Month;
  beforeEach(inject(function (_Month_) {
    Month = _Month_;
  }));

  it('should be defined', function () {
    expect(Month).toBeDefined();
  });

});
