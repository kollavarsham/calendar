'use strict';

// TODO: Fix these tests and the month-nav bar soon
xdescribe('Directive: monthNavbar', function () {

  // load the directive's module
  beforeEach(module('calendarApp', 'app/views/month-navbar.html'));

  var element, scope, $compile, template, $location, year, locArguments;

  beforeEach(module(function ($provide) {
    $provide.provider('$location', function () {
      this.$get = function () {
        return $location;
      };
    });
  }));

  beforeEach(inject(function ($rootScope, _$compile_, $templateCache) {
    jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';

    scope = $rootScope.$new();
    $compile = _$compile_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    template = $templateCache.get('app/views/month-navbar.html');
    $templateCache.put('views/month-navbar.html', template);

    locArguments = [];

    $location = {
      url: function(){},
      hash : function (loc) {
        locArguments.push(loc);
      }
    };

    year = getJSONFixture('2015-ml.json'); // load the data for 2015 from the test/mock/2015.json fixture
  }));

  beforeEach(function () {
    scope.months = year.months;

    element = angular.element('<month-navbar months="months"></month-navbar>');
    element = $compile(element)(scope);
    scope.$digest();
  });

  it('should be defined', inject(function () {
    expect(element).toBeDefined();
    expect(locArguments.length).toBe(0);
  }));

  it('should call the right methods on $location', inject(function () {
    element.find('a[title=May]').triggerHandler('click');
    expect(locArguments.length).toBe(6);
    expect(locArguments).toEqual([ undefined, 'month-May', undefined, undefined, undefined, undefined ]);
  }));

});
