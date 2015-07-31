'use strict';

describe('Service: serviceConfigConstant', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var serviceConfigConstant;
  beforeEach(inject(function (_serviceConfigConstant_) {
    serviceConfigConstant = _serviceConfigConstant_;
  }));

  it('should do something', function () {
    expect(!!serviceConfigConstant).toBe(true);
  });

});
