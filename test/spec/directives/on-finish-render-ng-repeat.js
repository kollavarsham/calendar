'use strict';

describe('Directive: onFinishRenderNgRepeat', function () {

  // load the directive's module
  beforeEach(module('calendarApp'));

  var element, scope, $compile, $timeout, items;

  beforeEach(inject(function ($rootScope, _$timeout_, _$compile_) {
    scope = $rootScope.$new();
    $timeout = _$timeout_;
    $compile = _$compile_;

    spyOn(scope, '$emit').and.callThrough();

    items = ['1', '2'];

    scope.items = items;

    element = angular.element('<div ng-repeat="item in items" on-finish-render-ng-repeat></div>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should be defined', function () {
    expect(element).toBeDefined();
  });

  xit('should emit ngRepeatFinished on scope', function () {
    $timeout.flush();
    expect(scope.$emit).toHaveBeenCalledWith('ngRepeatFinished');
  });

});
