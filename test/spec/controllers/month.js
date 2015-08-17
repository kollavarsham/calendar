'use strict';

describe('Controller: MonthCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var MonthCtrl, scope, state, stateParams, monthMockup, utils, currentYear, currentMonth;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _utils_) {
    scope = $rootScope.$new();

    state = {go : function () {}};

    monthMockup = {
      query : function () {}
    };

    utils = _utils_;

  }));

  describe('model variables', function () {

    beforeEach(inject(function ($controller) {
      currentYear = 2015;
      currentMonth = 8;

      stateParams = {
        year  : currentYear,
        month : currentMonth
      };

      MonthCtrl = $controller('MonthCtrl', {
        $scope       : scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });
    }));

    it('should be defined', function () {
      expect(MonthCtrl).toBeDefined();
    });

    it('should be defined and valid', function () {
      expect(scope.month).toBe(currentMonth);
      expect(scope.monthName).toBe('August');
      expect(scope.nextMonthName).toBe('September');
      expect(scope.previousMonthName).toBe('July');
      expect(scope.year).toBe(currentYear);
      expect(scope.previousYear).toBe(currentYear);
      expect(scope.nextYear).toBe(currentYear);
    });

  });

  describe('model variables when current month is January', function () {

    beforeEach(inject(function ($controller) {
      currentYear = 2015;
      currentMonth = 1;

      stateParams = {
        year  : currentYear,
        month : currentMonth
      };

      MonthCtrl = $controller('MonthCtrl', {
        $scope       : scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });
    }));

    it('should be defined and valid after getPrevious', function () {
      var previous = scope.getPreviousMonthAndYear();
      expect(previous.month).toBe(12);
      expect(previous.year).toBe(2014);
    });

  });

  describe('model variables when current month is December', function () {

    beforeEach(inject(function ($controller) {
      currentYear = 2015;
      currentMonth = 12;

      stateParams = {
        year  : currentYear,
        month : currentMonth
      };

      MonthCtrl = $controller('MonthCtrl', {
        $scope       : scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });
    }));

    it('should be defined and valid after getNext', function () {
      var next = scope.getNextMonthAndYear();
      expect(next.month).toBe(1);
      expect(next.year).toBe(2016);
    });

  });

});
