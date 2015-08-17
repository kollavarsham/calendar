'use strict';

describe('Service: Year', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var Year;
  beforeEach(inject(function (_Year_) {
    Year = _Year_;
  }));

  it('should be defined', function () {
    expect(Year).toBeDefined();
  });

});
