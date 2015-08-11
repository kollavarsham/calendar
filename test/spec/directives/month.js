'use strict';

describe('Directive: month', function () {

  // load the directive's module
  beforeEach(module('calendarApp'));

  var element, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<month></month>');
    element = $compile(element)(scope);
    //expect(element.text()).toBe('this is the month directive');
  }));
});
