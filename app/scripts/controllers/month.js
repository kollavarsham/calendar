'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MonthCtrl
 * @description
 * # MonthCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MonthCtrl', function ($scope, $state, $stateParams, $filter, utils, Month) {

    $scope.getPreviousMonthAndYear = function () {
      var month = $scope.calendar.month, year = $scope.calendar.year;
      month = month - 1;
      if (month === 0) {
        month = 12;
        year = year - 1;
      }
      return {month : month, year : year};
    };

    $scope.getNextMonthAndYear = function () {
      var month = $scope.calendar.month, year = $scope.calendar.year;
      month = month + 1;
      if (month > 12) {
        month = 1;
        year = year + 1;
      }
      return {month : month, year : year};
    };

    $scope.init = function () {

      $scope.$watchGroup(['calendar.year', 'calendar.month'], function (newValues) {
        $state.go('month', {year : newValues[0], month : newValues[1]});
      });

      var monthLookup = utils.monthsLookup;

      var selectedDate = Date.parse($stateParams.sel);

      $scope.calendar = {
        year   : $stateParams.year,
        month  : $stateParams.month,
        lang   : $stateParams.lang === 'en' ? 'en' : 'ml',
        sel    : !isNaN(selectedDate) ? new Date(selectedDate) : undefined,
        months : utils.getMonths(),
        years  : utils.getYears()
      };

      var previous = $scope.getPreviousMonthAndYear();
      var yearPrefix = $stateParams.year !== previous.year ? previous.year + ' ' : '';

      var next = $scope.getNextMonthAndYear();
      var yearSuffix = $stateParams.year !== next.year ? ' ' + next.year : '';

      angular.merge($scope.calendar, {
        monthName         : monthLookup[$scope.calendar.month].en,
        previousMonthName : yearPrefix + monthLookup[previous.month].en,
        previousYear      : previous.year,
        nextMonthName     : monthLookup[next.month].en + yearSuffix,
        nextYear          : next.year
      });

      $scope.calendar.data = Month.query({
        year  : $scope.calendar.year,
        month : $scope.calendar.month,
        lang  : $scope.calendar.lang
      });
    };

    $scope.showMonth = function () {
      var selectedMonth = $filter('filter')($scope.calendar.months, {value : $scope.calendar.month});
      return ($scope.calendar.month && selectedMonth.length) ? selectedMonth[0].text : 'Not set';
    };

    $scope.showYear = function () {
      var selectedYear = $filter('filter')($scope.calendar.years, {value : $scope.calendar.year});
      return ($scope.calendar.year && selectedYear.length) ? selectedYear[0].text : 'Not set';
    };

    $scope.previous = function () {
      var previous = $scope.getPreviousMonthAndYear();
      $state.go('month', {year : previous.year, month : previous.month});
    };

    $scope.next = function () {
      var next = $scope.getNextMonthAndYear();
      $state.go('month', {year : next.year, month : next.month});
    };

    $scope.init();
  });
