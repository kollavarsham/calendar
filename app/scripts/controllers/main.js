'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MainCtrl', function ($scope, $state, $stateParams, $location, $anchorScroll, $filter, $window, Calendar) {

    $scope.init = function () {
      $scope.$watch('year', function (newYearValue) {
        $state.go('year', {year : newYearValue});
      });

      $scope.year = $stateParams.year;

      var years = [];
      for (var y = 1900; y < 2051; y++) {
        years.push({value : y, text : y});
      }
      $scope.years = years;

      $scope.previousYear = $scope.year - 1;
      $scope.nextYear = $scope.year + 1;
      $scope.calendar = Calendar.query({
        year : $scope.year
      });

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
