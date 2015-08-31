'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:languageSwitcher
 * @description
 * # languageSwitcher
 */
angular.module('calendarApp')
  .directive('languageSwitcher', function () {
    return {
      template : '<a class="language-switcher" ng-click="switchLang()" title="Switch to {{switchToLanguageName}}">{{switchToLanguageName}}</a>',
      restrict : 'E',
      replace  : true
    };
  });
