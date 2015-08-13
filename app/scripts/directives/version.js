'use strict';

/**
 * @ngdoc directive
 * @name calendarApp.directive:version
 * @description
 * # version
 */
angular.module('calendarApp')
  .directive('version', function () {
    return {
      template : '<small><a title="{{title}}" ng-href="{{href}}" target="_blank">{{versionText}}</a></small>',
      restrict : 'E',
      replace  : true,
      link     : function postLink(scope) {
        scope.$watch('version', function (version) {
          scope.title = 'Built at: ' + version.date;
          scope.href = 'https://github.com/kollavarsham/calendar/tree/' + version.object;
          scope.versionText = version.text;
        }, true);
      }
    };
  });
