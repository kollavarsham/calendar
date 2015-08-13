'use strict';

describe('Service: Version', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var Version;
  beforeEach(inject(function (_Version_) {
    Version = _Version_;
  }));

  it('should be defined', function () {
    expect(Version).toBeDefined();
  });

});
