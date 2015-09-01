'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('LanguageCtrl', function ($scope, $location) {
    $scope.init = function () {
      $scope.lang = $location.search().lang === 'en' ? 'en' : 'ml';
      $scope.switchToLanguage = $scope.lang === 'en' ? 'ml' : 'en';
    };

    $scope.switchLang = function () {
      $location.search('lang', $scope.switchToLanguage);
      $scope.init();
    };

    $scope.init();
  });
