'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:VersionCtrl
 * @description
 * # VersionCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('VersionCtrl', function ($scope, Version) {
    $scope.versionString = Version.query();
  });
