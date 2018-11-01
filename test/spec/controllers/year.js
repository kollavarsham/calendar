'use strict';

describe('Controller: YearCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp', 'stateMock', 'app/views/year.html'));

  var YearCtrl, $q, $rootScope, $scope, calendar, state, stateParams, filter, window, timeout, utils, yearMock, fakeScrollTopWithValue, yearTemplate;

  var currentYear = new Date().getFullYear();

  var calendars = {};
  calendars[currentYear] = {year : currentYear, months : []};

  beforeEach(inject(function (_$q_, _$rootScope_, stateMock, _$filter_, _$window_, _$timeout_, _utils_, $templateCache) {
    $q = _$q_;
    $rootScope = _$rootScope_;
    state = stateMock;
    filter = _$filter_;
    window = _$window_;
    timeout = _$timeout_;
    utils = _utils_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    yearTemplate = $templateCache.get('app/views/year.html');
    $templateCache.put('views/year.html', yearTemplate);
  }));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();

    stateParams = {
      year : currentYear
    };

    yearMock = {
      query : function () {
      }
    };

    fakeScrollTopWithValue = function (scrollValue) {
      return function () {
        return scrollValue;
      };
    };

    spyOn(yearMock, 'query').and.callFake(function (params) {
      return calendars[params.year];
    });

    YearCtrl = $controller('YearCtrl', {
      $scope       : $scope,
      $state       : state,
      $stateParams : stateParams,
      $filter      : filter,
      $window      : window,
      $timeout     : timeout,
      utils        : utils,
      Year         : yearMock
    });

    calendar = $scope.calendar;

  }));

  describe('year models', function () {

    it('should have a current, previous and next year properties on the scope', function () {
      expect(calendar.year).toBe(currentYear);
      expect(calendar.previousYear).toBe(currentYear - 1);
      expect(calendar.nextYear).toBe(currentYear + 1);
    });

    it('should add one to the year when next is called', function () {
      var initialYear = calendar.year;
      $scope.next();
      expect(calendar.year).toBe(initialYear + 1);
    });

    it('should subtract one to the year when previous is called', function () {
      var initialYear = calendar.year;
      $scope.previous();
      expect(calendar.year).toBe(initialYear - 1);
    });

    it('should have years defined on scope', function () {
      expect(calendar.years).toBeDefined();
    });

    it('should have 151 items on years', function () {
      expect(calendar.years.length).toBe(151);
    });

    it('should have current year return from showYear', function () {
      expect($scope.showYear()).toBe(currentYear);
    });

  });

  describe('calendar model', function () {

    it('should be defined', function () {
      expect(calendar.data).toBeDefined();
    });

    it('should have current year\'s calendar as default', function () {
      expect(calendar.data.year).toBe(currentYear);
    });

  });

  describe('model variables when language is explicitly set to English', function () {

    beforeEach(inject(function ($controller) {
      stateParams = {
        year : currentYear,
        lang : 'en'
      };

      YearCtrl = $controller('YearCtrl', {
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        $filter      : filter,
        $window      : window,
        $timeout     : timeout,
        utils        : utils,
        Year         : yearMock
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
        year : currentYear,
        lang : 'ml'
      };

      YearCtrl = $controller('YearCtrl', {
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        $filter      : filter,
        $window      : window,
        $timeout     : timeout,
        utils        : utils,
        Year         : yearMock
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
        year : currentYear,
        sel  : 'Jan 25, 2015'
      };

      YearCtrl = $controller('YearCtrl', {
        $scope       : $scope,
        $state       : state,
        $stateParams : stateParams,
        $filter      : filter,
        $window      : window,
        $timeout     : timeout,
        utils        : utils,
        Year         : yearMock
      });

      calendar = $scope.calendar;

    }));

    it('should be defined and valid', function () {
      expect(calendar.sel).toEqual(new Date(2015, 0, 25));
    });

  });

  describe('state', function () {

    it('should transition to the updated year', function () {
      state.expectTransitionTo('year', {year : currentYear - 1});
      $scope.previous();
      $scope.$digest();
      state.ensureAllTransitionsHappened();
    });

  });

  describe('backToTopVisibility', function () {

    it('should default to false', function () {
      expect(calendar.backToTopVisibility).toBeFalsy();
    });

    it('should remain false after the window scrolls less than 140 px', function () {

      spyOn($.fn, 'scrollTop').and.callFake(fakeScrollTopWithValue(135));
      state.expectTransitionTo('year', {year : currentYear});

      angular.element(window).triggerHandler('scroll');

      expect(calendar.backToTopVisibility).toBeFalsy();

    });

    it('should remain false after the window scrolls up to 140 px', function () {

      spyOn($.fn, 'scrollTop').and.callFake(fakeScrollTopWithValue(140));
      state.expectTransitionTo('year', {year : currentYear});

      angular.element(window).triggerHandler('scroll');

      expect(calendar.backToTopVisibility).toBeFalsy();

    });

    it('should change to true after the window scrolls more than 140 px', function () {

      spyOn($.fn, 'scrollTop').and.callFake(fakeScrollTopWithValue(141));
      state.expectTransitionTo('year', {year : currentYear});

      angular.element(window).triggerHandler('scroll');

      expect(calendar.backToTopVisibility).toBeTruthy();

    });

  });

  describe('selectedMonthRendered event', function () {

    it('should set selectedMonthNamePrefix to the passed in value', function () {
      expect($scope.selectedMonthNamePrefix).toBeUndefined();
      $rootScope.$broadcast('selectedMonthRendered', 'Arbitrary Value for selectedMonthRendered');
      expect($scope.selectedMonthNamePrefix).toBe('Arbitrary Value for selectedMonthRendered');
    });

  });

  describe('currentMonthRendered event', function () {

    it('should set currentMonthNamePrefix to the passed in value', function () {
      expect($scope.currentMonthNamePrefix).toBeUndefined();
      $rootScope.$broadcast('currentMonthRendered', 'Arbitrary Value for currentMonthNamePrefix');
      expect($scope.currentMonthNamePrefix).toBe('Arbitrary Value for currentMonthNamePrefix');
    });

  });

  describe('ngRepeatFinished event', function () {

    var elementClicked;

    beforeEach(function () {
      state.expectTransitionTo('year', {year : currentYear});
      $scope.$digest();

      elementClicked = 0;

      spyOn(angular, 'element').and.callThrough();

      spyOn($.fn, 'filter').and.callFake(function () {
        return {
          click : function () {
            elementClicked++;
          }
        };
      });

    });

    it('should set up the popovers', function () {
      $rootScope.$broadcast('ngRepeatFinished');
      expect(angular.element).toHaveBeenCalledWith('.day-popover');
    });

    it('should call angular element the right number of times', function () {
      $rootScope.$broadcast('ngRepeatFinished');
      expect(angular.element.calls.count()).toBe(2);
    });

    it('should call the filter function when neither of selected day or current day is present', function () {
      $rootScope.$broadcast('ngRepeatFinished');
      expect($.fn.filter).toHaveBeenCalled();
    });

    it('should call the filter function when selected day is present', function () {
      $scope.selectedMonthNamePrefix = 'selectedMonthNameMOCK';
      $rootScope.$broadcast('ngRepeatFinished');
      expect($.fn.filter).toHaveBeenCalled();
    });

    it('should call click on the month element', function () {
      expect(elementClicked).toBe(0);
      $rootScope.$broadcast('ngRepeatFinished');
      timeout.flush();
      expect(elementClicked).toBe(1);
    });


  });

});
