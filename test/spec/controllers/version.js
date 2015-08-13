'use strict';

describe('Controller: VersionCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var VersionCtrl, scope, versionMock;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    versionMock = {
      query : function () {}
    };

    spyOn(versionMock, 'query').and.callFake(function () {
      return {
        version  : '0.0.1',
        revision : 'v0.0.1-1-0cb4a04',
        date     : '2015-08-13 06:35:33:848 +0000',
        text     : 'v0.0.1-1',
        object   : '0cb4a04'
      };
    });

    VersionCtrl = $controller('VersionCtrl', {
      $scope  : scope,
      Version : versionMock
    });
  }));

  it('should have version attached to the scope', function () {
    expect(scope.version).toBeDefined();
  });

  it('should have a right version object', function () {
    var version = scope.version;
    expect(version.version).toBe('0.0.1');
    expect(version.revision).toBe('v0.0.1-1-0cb4a04');
    expect(version.date).toBe('2015-08-13 06:35:33:848 +0000');
    expect(version.text).toBe('v0.0.1-1');
    expect(version.object).toBe('0cb4a04');
  });

});
