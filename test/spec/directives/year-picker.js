'use strict';

describe('Directive: yearPicker', function () {

  // load the directive's module
  beforeEach(module('calendarApp', 'app/views/year-picker.html', 'app/views/year.html'));

  var element, scope, $compile, template, yearTemplate;

  beforeEach(inject(function ($rootScope, _$compile_, $templateCache) {
    scope = $rootScope.$new();
    $compile = _$compile_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    template = $templateCache.get('app/views/year-picker.html');
    $templateCache.put('views/year-picker.html', template);
    yearTemplate = $templateCache.get('app/views/year.html');
    $templateCache.put('views/year.html', yearTemplate);
  }));

  beforeEach(function () {
    element = angular.element('<year-picker></year-picker>');
    element = $compile(element)(scope);
    scope.$digest();
  });

  it('should be defined', function () {
    expect(element).toBeDefined();
  });

  it('should be rendered correctly', function () {
    expect(element.find('a').prop('title')).toBe('Click to change the year');
    expect(element.find('a')[0].className).toBe('year-select ng-scope ng-binding editable editable-click editable-empty');
  });

});
