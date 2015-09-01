'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:YearCtrl
 * @description
 * # YearCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('YearCtrl', function ($scope, $state, $stateParams, $filter, $window, utils, Year, $timeout) {

    $scope.init = function () {
      $scope.$watch('calendar.year', function (newYearValue) {
        $state.go('year', {year : newYearValue});
      });

      var selectedDate = Date.parse($stateParams.sel);

      $scope.calendar = {
        year         : $stateParams.year,
        lang         : $stateParams.lang,
        sel          : !isNaN(selectedDate) ? new Date(selectedDate) : undefined,
        years        : utils.getYears(),
        previousYear : $stateParams.year - 1,
        nextYear     : $stateParams.year + 1
      };

      $scope.calendar.data = Year.query({
        year : $scope.calendar.year,
        lang : $scope.calendar.lang === 'en' ? 'en' : 'ml'
      });

    };

    $scope.showYear = utils.showYear($scope);

    $scope.previous = function () {
      $scope.calendar.year = $scope.calendar.year - 1;
    };

    $scope.next = function () {
      $scope.calendar.year = $scope.calendar.year + 1;
    };

    $window.onscroll = function () {
      $scope.calendar.backToTopVisibility = angular.element(document).scrollTop() > 140; // change here would need to reflect in /scripts/app.js too ###
      $scope.$digest();
    };

    $scope.$on('selectedMonthRendered', function (evt, selectedMonthNamePrefix) {
      // handle the selectedMonthRendered event (fired when month with selected date has been rendered)
      $scope.selectedMonthNamePrefix = selectedMonthNamePrefix;
    });

    $scope.$on('currentMonthRendered', function (evt, currentMonthNamePrefix) {
      // handle the currentMonthRendered event (fired when month with today's date has been rendered)
      $scope.currentMonthNamePrefix = currentMonthNamePrefix;
    });

    $scope.$on('ngRepeatFinished', function () {
      // handle the ng-repeat-finished-rendering event (fired when all months have been rendered)
      var monthNamePrefix = $scope.selectedMonthNamePrefix ? $scope.selectedMonthNamePrefix : $scope.currentMonthNamePrefix;

      var monthLink = angular.element('.month-nav').find('a').filter(function () {
        return $(this).text().match(new RegExp('^' + monthNamePrefix));
      });

      $timeout(function () {
        monthLink.click();
      }, 10);

      // attach the day detail on-focus popover
      angular.element('.day-popover').popover({html : true});
    });

    $scope.init();
  });
