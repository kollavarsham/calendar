'use strict';

describe('Directive: version', function () {

  // load the directive's module
  beforeEach(module('calendarApp', 'app/views/year.html'));

  var element, scope, yearTemplate;

  beforeEach(inject(function ($rootScope, $compile, $templateCache) {
    scope = $rootScope.$new();
    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    yearTemplate = $templateCache.get('app/views/year.html');
    $templateCache.put('views/year.html', yearTemplate);

    element = angular.element('<version></version>');
    element = $compile(element)(scope);
  }));

  it('should be defined', function () {
    expect(element).toBeDefined();
  });

  it('should properly generate the version anchor tag', function () {
    scope.version = {
      version  : '0.0.1',
      revision : 'v0.0.1-1-0cb4a04',
      date     : '2015-08-13 06:35:33:848 +0000',
      text     : 'v0.0.1-1',
      object   : '0cb4a04'
    };
    scope.$digest();
    // console.log(element);
    // <small class="ng-scope">
    //   <a title="Built at: 2015-08-13 06:35:33:848 +0000" ng-href="https://github.com/kollavarsham/calendar/tree/0cb4a04" target="_blank" class="ng-binding"
    //      href="https://github.com/kollavarsham/calendar/tree/0cb4a04">v0.0.1-1</a>
    // </small>
    expect(element[0].tagName).toBe('SMALL');
    var anchorTag = element.find('a');
    expect(anchorTag.length).toBe(1);
    expect(anchorTag.attr('title')).toBe('Built at: 2015-08-13 06:35:33:848 +0000');
    expect(anchorTag.attr('href')).toBe('https://github.com/kollavarsham/calendar/tree/0cb4a04');
    expect(anchorTag.html()).toBe('v0.0.1-1');
  });

});
