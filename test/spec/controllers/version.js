'use strict';

describe('Controller: VersionCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var VersionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VersionCtrl = $controller('VersionCtrl', {
      $scope : scope
      // place here mocked dependencies
    });
  }));

  it('should have versionString attached to the scope', function () {
    expect(scope.versionString).toBeDefined();
  });
});
