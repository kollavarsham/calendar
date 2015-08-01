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

    $scope.$watch('year', function (newYearValue) {
      $scope.calendar = Calendar.query({
        year : newYearValue
      });
      $scope.previousYear = newYearValue - 1;
      $scope.nextYear = newYearValue + 1;
    });

    $scope.year = (new Date()).getFullYear();

    var years = Array.apply(null, {length : 2051}).map(Number.call, Number).splice(1900, 151);
    $scope.years = years.map(function (y) { return {value : y, text : y};});

    $scope.showYear = function () {
      var selectedYear = $filter('filter')($scope.years, {value : $scope.year});
      return ($scope.year && selectedYear.length) ? selectedYear[0].text : 'Not set';
    };

    $window.onscroll = function () {
      $scope.backToTopVisibility = angular.element(document).scrollTop() > 105;
      $scope.$apply(); //or simply $scope.$digest();
    };

    $scope.previous = function () {
      console.log('previous');
      $scope.year = $scope.year - 1;
    };

    $scope.next = function () {
      console.log('next');
      $scope.year = $scope.year + 1;
    };

    $scope.scrollTo = function (loc) {
      var old = $location.hash();
      $location.hash(loc);
      $anchorScroll();
      $location.hash(old);
    };

    $scope.scrollToTop = function(){
      angular.element('#scrollUp').click();
    };
  });
