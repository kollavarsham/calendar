'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:YearCtrl
 * @description
 * # YearCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('YearCtrl', function ($scope, $state, $stateParams, $filter, $window, utils, Year) {

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
      $scope.calendar.backToTopVisibility = angular.element(document).scrollTop() > 105;
      $scope.$digest();
    };

    $scope.init();
  });
