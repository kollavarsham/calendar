'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var MainCtrl, $q, queryDeferred, $rootScope, scope, location, anchorScroll, filter, window, calendarMock;

  var currentYear = new Date().getFullYear();

  var calendars = {};
  calendars[currentYear] = {year : currentYear, months : []};
  calendars[currentYear - 1] = {year : currentYear - 1, months : []};
  calendars[currentYear + 1] = {year : currentYear + 1, months : []};

  beforeEach(inject(function (_$q_, _$rootScope_, _$filter_, _$window_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    filter = _$filter_;
    window = _$window_;
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    calendarMock = {
      query : function () {
        console.log(JSON.stringify(arguments));
        queryDeferred = $q.defer();
        return {$promise : queryDeferred.promise};
      }
    };

    spyOn(calendarMock, 'query').and.callFake(function (params) {
      return calendars[params.year];
    });

    MainCtrl = $controller('MainCtrl', {
      $scope        : scope,
      $location     : location,
      $anchorScroll : anchorScroll,
      $filter       : filter,
      $window       : window,
      Calendar      : calendarMock
    });
  }));

  it('should have a current, previous and next year properties on the scope', function () {
    expect(scope.year).toBe(currentYear);
    scope.$digest();
    expect(scope.previousYear).toBe(currentYear - 1);
    expect(scope.nextYear).toBe(currentYear + 1);
  });

  it('should add one to the year when next is called on scope', function () {
    var initialYear = scope.year;
    scope.next();
    expect(scope.year).toBe(initialYear + 1);
  });

  it('should subtract one to the year when previous is called on scope', function () {
    var initialYear = scope.year;
    scope.previous();
    expect(scope.year).toBe(initialYear - 1);
  });

  it('should have calendar on scope as undefined', function () {
    expect(scope.calendar).toBe(undefined);
  });

  it('should have a non-null calendar on scope after the digest cycle', function () {
    scope.$digest();
    expect(scope.calendar).not.toBe(undefined);
  });

  it('should have a calendar corresponding to current year to start with', function () {
    scope.$digest();
    expect(scope.calendar.year).toBe(currentYear);
  });

  it('should have a calendar corresponding to previous year after calling next on scope', function () {
    scope.previous();
    scope.$digest();
    expect(scope.calendar.year).toBe(currentYear - 1);
  });

  it('should have a calendar corresponding to next year after calling next on scope', function () {
    scope.next();
    scope.$digest();
    expect(scope.calendar.year).toBe(currentYear + 1);
  });

});
