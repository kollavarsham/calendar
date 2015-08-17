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
      var month = $scope.month, year = $scope.year;
      month = month - 1;
      if (month === 0) {
        month = 12;
        year = year - 1;
      }
      return {month : month, year : year};
    };

    $scope.getNextMonthAndYear = function () {
      var month = $scope.month, year = $scope.year;
      month = month + 1;
      if (month > 12) {
        month = 1;
        year = year + 1;
      }
      return {month : month, year : year};
    };

    $scope.init = function () {

      $scope.$watch('month', function(newMonth){
        $state.go('month', {year : $scope.year, month : newMonth});
      });

      $scope.$watch('year', function(newYear){
        $state.go('month', {year : newYear, month : $scope.month});
      });

      var monthLookup = utils.monthsLookup;

      $scope.year = $stateParams.year;
      $scope.month = $stateParams.month;

      $scope.monthName = monthLookup[$scope.month].en;

      var previous = $scope.getPreviousMonthAndYear();
      var yearPrefix = $scope.year !== previous.year ? previous.year + ' ' : '';
      $scope.previousMonthName = yearPrefix + monthLookup[previous.month].en;
      $scope.previousYear = previous.year;

      var next = $scope.getNextMonthAndYear();
      var yearSuffix = $scope.year !== next.year ? ' ' + next.year : '';
      $scope.nextMonthName = monthLookup[next.month].en + yearSuffix;
      $scope.nextYear = next.year;

      $scope.months = utils.getMonths();
      $scope.years = utils.getYears();

      $scope.calendar = Month.query({
        year  : $scope.year,
        month : $scope.month
      });
    };

    $scope.showMonth = function () {
      var selectedMonth = $filter('filter')($scope.months, {value : $scope.month});
      return ($scope.month && selectedMonth.length) ? selectedMonth[0].text : 'Not set';
    };

    $scope.showYear = function () {
      var selectedYear = $filter('filter')($scope.years, {value : $scope.year});
      return ($scope.year && selectedYear.length) ? selectedYear[0].text : 'Not set';
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
