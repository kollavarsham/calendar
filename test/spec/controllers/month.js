'use strict';

describe('Controller: MonthCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var MonthCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MonthCtrl = $controller('MonthCtrl', {
      $scope : scope
      // place here mocked dependencies
    });
  }));

  it('should be defined', function () {
    expect(MonthCtrl).toBeDefined();
  });
});
