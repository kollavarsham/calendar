'use strict';

describe('Directive: month', function () {

  // load the directive's module and views
  beforeEach(module('calendarApp', 'app/views/month.html'));

  var element, scope, $compile, template, year, utils;

  beforeEach(inject(function ($rootScope, _$compile_, $templateCache, _utils_) {
    jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';

    scope = $rootScope.$new();
    $compile = _$compile_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    template = $templateCache.get('app/views/month.html');
    $templateCache.put('views/month.html', template );

    utils = _utils_;
  }));

  beforeEach(function(){
    scope.weekdaysLookup = utils.weekdaysLookup;

    year = getJSONFixture('year.json'); // load the data for 2015 from the test/mock/year.json fixture
    scope.month = year.months[4]; // let us test with the month of May

    element = angular.element('<month></month>');
    element = $compile(element)(scope);
    scope.$digest();
  });

  it('should be a table element', function () {
    expect(element[0].tagName).toBe('TABLE');
  });

  it('should have 7 rows in the table', function () {
    expect(element.find('tr').length).toBe(7);
  });

  it('should have 42 cells in the table', function () {
    expect(element.find('div.gregorian').length).toBe(42);
  });

});
