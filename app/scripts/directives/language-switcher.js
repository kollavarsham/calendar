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
      templateUrl : 'views/language-switcher.html',
      restrict    : 'A',
      link        : function postLink(scope, element) {
        scope.$watch('lang', function (lang) {
          element.find('li').removeClass('active');
          element.find('li.' + lang).addClass('active');
        });
      }
    };
  });
