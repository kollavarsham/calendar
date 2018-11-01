'use strict';

describe('Directive: onFinishRenderNgRepeat', function () {

  // load the directive's module
  beforeEach(module('calendarApp', 'app/views/year.html'));

  var element, scope, $compile, $timeout, items, yearTemplate;

  beforeEach(inject(function ($rootScope, _$timeout_, _$compile_, $templateCache) {
    scope = $rootScope.$new();
    $timeout = _$timeout_;
    $compile = _$compile_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    yearTemplate = $templateCache.get('app/views/year.html');
    $templateCache.put('views/year.html', yearTemplate);

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

  it('should emit ngRepeatFinished on scope', function () {
    $timeout.flush();
    expect(scope.$emit).toHaveBeenCalledWith('ngRepeatFinished');
  });

});
