'use strict';

describe('Service: serviceConfigConstant', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var serviceConfigConstant;
  beforeEach(inject(function (_serviceConfigConstant_) {
    serviceConfigConstant = _serviceConfigConstant_;
  }));

  it('should be defined', function () {
    expect(serviceConfigConstant).toBeDefined();
  });

  it('should have the valid baseUrl', function () {
    expect(serviceConfigConstant.baseUrl).toBe('http://calendar.kollavarsham.org/api/');
  });

  it('should have the config defined', function () {
    expect(serviceConfigConstant.config).toBeDefined();
  });

  it('should have the config.query defined', function () {
    expect(serviceConfigConstant.config.query).toBeDefined();
  });

  it('should have a valid config.query', function () {
    var query = serviceConfigConstant.config.query;
    expect(query.method).toBe('GET');
    expect(query.isArray).toBeFalsy();
    expect(query.headers).toBeDefined();
    expect(query.headers.Accept).toBe('application/json');
  });

});
