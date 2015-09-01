'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:onFinishRenderNgRepeat
 * @description
 * # onFinishRenderNgRepeat
 */
angular.module('calendarApp')
  .directive('onFinishRenderNgRepeat', function ($timeout) {
    return {
      restrict : 'A',
      link     : function postLink(scope) {
        if (scope.$last === true) {
          $timeout(function () {
            scope.$parent.$emit('ngRepeatFinished');
          });
        }
      }
    };
  });
