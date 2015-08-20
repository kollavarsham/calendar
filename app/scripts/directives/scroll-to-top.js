'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:scrollToTop
 * @description
 * # scrollToTop
 */
angular.module('calendarApp')
  .directive('scrollToTop', function () {
    return {
      template : '<a class="scroll-up" title="Back to the top">Top</a>',
      replace  : true,
      restrict : 'E',
      link     : function postLink(scope, element) {
        element.on('click', function () {
          angular.element('#scrollUp').click();
        });
      }
    };
  });
