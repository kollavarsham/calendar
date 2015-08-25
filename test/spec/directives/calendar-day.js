'use strict';

describe('Directive: calendarDay', function () {

  // load the directive's module
  beforeEach(module('calendarApp', 'app/views/calendar-day.html'));

  var element, scope, $compile, template, year, month;

  beforeEach(inject(function ($rootScope, _$compile_, $templateCache) {
    jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';

    scope = $rootScope.$new();
    $compile = _$compile_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    template = $templateCache.get('app/views/calendar-day.html');
    $templateCache.put('views/calendar-day.html', template);

    year = getJSONFixture('2015-ml.json'); // load the data for 2015 from the test/mock/2015.json fixture
    month = year.months[4]; // let us test with the month of May
    scope.day = month.days[21]; // and the day of May 22, 2015

    element = angular.element('<calendar-day day="day"></calendar-day>');
    element = $compile(element)(scope);
    scope.$digest();  // IMPORTANT !!1
  }));

  it('should be defined', function () {
    expect(element).toBeDefined();
  });

  it('should render the directive properly', function () {
    expect(element[0].tagName).toBe('CALENDAR-DAY');
    expect(element.find('a').length).toBe(1);
    expect(element.find('a').data('content')).toBe('<div class=\'day-popover-table\'><div><span>1190 ഇടവം 8</span></div><div><span>പുണർതം</span></div></div>');
    expect(element.find('.day').length).toBe(1);
    expect(element.find('.gregorian').length).toBe(1);
    expect(element.find('.malayalam-day').length).toBe(1);
    expect(element.find('.naksatra').length).toBe(1);
    expect(element.find('.gregorian').text()).toBe('22');
    expect(element.find('.malayalam-day').text()).toBe('8');
    expect(element.find('.naksatra').text()).toBe('  പുണർതം');
    expect(element.find('.naksatra')[0].innerHTML).toBe('&nbsp; പുണർതം');
  });
});
