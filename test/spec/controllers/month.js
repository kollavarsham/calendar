'use strict';

describe('Controller: MonthCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp', 'stateMock', 'app/views/year.html'));

  var MonthCtrl, $scope, calendar, state, stateParams, monthMockup, utils, currentYear, currentMonth, yearTemplate;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _utils_, stateMock, $templateCache) {
    $scope = $rootScope.$new();

    state = stateMock;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    yearTemplate = $templateCache.get('app/views/year.html');
    $templateCache.put('views/year.html', yearTemplate);

    monthMockup = {
      query : function () {
      }
    };

    utils = _utils_;

  }));

  beforeEach(inject(function ($controller) {
    currentYear = 2015;
    currentMonth = 8;

    stateParams = {
      year  : currentYear,
      month : currentMonth
    };

    MonthCtrl = $controller('MonthCtrl', {
      $scope       : $scope,
      $state       : state,
      $stateParams : stateParams,
      utils        : utils,
      Month        : monthMockup
    });

    calendar = $scope.calendar;

    state.expectTransitionTo('month', {year : 2015, month : 8});
    $scope.$digest();
  }));

  describe('model variables', function () {

    it('should be defined', function () {
      expect(MonthCtrl).toBeDefined();
    });

    it('should be defined and valid', function () {
      expect(calendar.month).toBe(currentMonth);
      expect(calendar.sel).toBeUndefined();
      expect(calendar.monthName).toBe('August');
      expect(calendar.nextMonthName).toBe('September');
      expect(calendar.previousMonthName).toBe('July');
      expect(calendar.year).toBe(currentYear);
      expect(calendar.previousYear).toBe(currentYear);
      expect(calendar.nextYear).toBe(currentYear);
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
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });
    }));

    it('should be defined and valid after getPrevious', function () {
      var previous = $scope.getPreviousMonthAndYear();
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
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });
    }));

    it('should be defined and valid after getNext', function () {
      var next = $scope.getNextMonthAndYear();
      expect(next.month).toBe(1);
      expect(next.year).toBe(2016);
    });

  });

  describe('model variables when language is explicitly set to English', function () {

    beforeEach(inject(function ($controller) {
      stateParams = {
        year  : currentYear,
        month : currentMonth,
        lang  : 'en'
      };

      MonthCtrl = $controller('MonthCtrl', {
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });

      calendar = $scope.calendar;
    }));

    it('should be defined and valid', function () {
      expect(calendar.lang).toBe('en');
    });

  });

  describe('model variables when language is explicitly set to Malayalam', function () {

    beforeEach(inject(function ($controller) {
      stateParams = {
        year  : currentYear,
        month : currentMonth,
        lang  : 'ml'
      };

      MonthCtrl = $controller('MonthCtrl', {
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });

      calendar = $scope.calendar;
    }));

    it('should be defined and valid', function () {
      expect(calendar.lang).toBe('ml');
    });

  });

  describe('model variables when selected Date is set', function () {

    beforeEach(inject(function ($controller) {
      stateParams = {
        year  : currentYear,
        month : currentMonth,
        sel  : 'Jan 25, 2015'
      };

      MonthCtrl = $controller('MonthCtrl', {
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        utils        : utils,
        Month        : monthMockup
      });

      calendar = $scope.calendar;
    }));

    it('should be defined and valid', function () {
      expect(calendar.sel).toEqual(new Date(2015, 0, 25));
    });

  });

  describe('state', function () {

    it('should transition correctly on invoking previous', function () {
      state.expectTransitionTo('month', {year : 2015, month : 7});
      $scope.previous();
      state.ensureAllTransitionsHappened();
    });

    it('should transition correctly on invoking next', function () {
      state.expectTransitionTo('month', {year : 2015, month : 9});
      $scope.next();
      state.ensureAllTransitionsHappened();
    });

    it('should transition correctly on month change', function () {
      state.expectTransitionTo('month', {year : 2015, month : 1});
      calendar.month = 1;
      $scope.$digest();
      state.ensureAllTransitionsHappened();
    });

    it('should transition correctly on year change', function () {
      state.expectTransitionTo('month', {year : 1979, month : 8});
      calendar.year = 1979;
      $scope.$digest();
      state.ensureAllTransitionsHappened();
    });

  });
});
