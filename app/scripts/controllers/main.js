'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MainCtrl', function ($scope, $location, $anchorScroll, $filter, $window, Calendar) {

    $scope.init = function () {
      $scope.$watch('year', function (newYearValue) {
        $scope.previousYear = newYearValue - 1;
        $scope.nextYear = newYearValue + 1;
        $scope.calendar = Calendar.query({
          year : newYearValue
        });
      });

      $scope.year = (new Date()).getFullYear();

      var years = Array.apply(null, [{length : 2051}]).map(Number.call, Number).splice(1900, 151);
      $scope.years = years.map(function (y) { return {value : y, text : y};});
    };

    $scope.showYear = function () {
      var selectedYear = $filter('filter')($scope.years, {value : $scope.year});
      return ($scope.year && selectedYear.length) ? selectedYear[0].text : 'Not set';
    };

    $scope.previous = function () {
      $scope.year = $scope.year - 1;
    };

    $scope.next = function () {
      $scope.year = $scope.year + 1;
    };

    $window.onscroll = function () {
      $scope.backToTopVisibility = angular.element(document).scrollTop() > 105;
      $scope.$apply(); //or simply $scope.$digest();
    };

    $scope.scrollTo = function (loc) {
      var old = $location.hash();
      $location.hash(loc);
      $anchorScroll();
      $location.hash(old);
    };

    $scope.scrollToTop = function () {
      angular.element('#scrollUp').click();
    };

    $scope.init();
  });
