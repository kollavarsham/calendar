'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var MainCtrl, $q, queryDeferred, $rootScope, scope, location, anchorScroll, filter, window, utils, calendarMock;

  var currentYear = new Date().getFullYear();

  var calendars = {};
  calendars[currentYear] = {year : currentYear, months : []};
  calendars[currentYear - 1] = {year : currentYear - 1, months : []};
  calendars[currentYear + 1] = {year : currentYear + 1, months : []};

  beforeEach(inject(function (_$q_, _$rootScope_, _$filter_, _$window_, _utils_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    filter = _$filter_;
    window = _$window_;
    utils = _utils_;
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
      utils         : utils,
      Calendar      : calendarMock
    });
  }));

  describe('year models', function () {

    it('should have a current, previous and next year properties on the scope', function () {
      expect(scope.year).toBe(currentYear);
      scope.$digest();
      expect(scope.previousYear).toBe(currentYear - 1);
      expect(scope.nextYear).toBe(currentYear + 1);
    });

    it('should add one to the year when next is called', function () {
      var initialYear = scope.year;
      scope.next();
      expect(scope.year).toBe(initialYear + 1);
    });

    it('should subtract one to the year when previous is called', function () {
      var initialYear = scope.year;
      scope.previous();
      expect(scope.year).toBe(initialYear - 1);
    });

    it('should have years defined on scope', function () {
      expect(scope.years).toBeDefined();
    });

    it('should have 151 items on years', function () {
      expect(scope.years.length).toBe(151);
    });

    it('should have current year return from showYear', function () {
      expect(scope.showYear()).toBe(currentYear);
    });

  });

  describe('calendar model', function () {

    it('should have calendar as undefined', function () {
      expect(scope.calendar).toBe(undefined);
    });

    it('should have a non-null calendar after the digest cycle', function () {
      scope.$digest();
      expect(scope.calendar).toBeDefined();
    });

    it('should have current year\'s calendar as default', function () {
      scope.$digest();
      expect(scope.calendar.year).toBe(currentYear);
    });

    it('should have previous year\'s calendar after calling previous', function () {
      scope.previous();
      scope.$digest();
      expect(scope.calendar.year).toBe(currentYear - 1);
    });

    it('should have next year\'s calendar after calling next', function () {
      scope.next();
      scope.$digest();
      expect(scope.calendar.year).toBe(currentYear + 1);
    });

  });

});
