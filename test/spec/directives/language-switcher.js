'use strict';

describe('Directive: languageSwitcher', function () {

  // load the directive's module
  beforeEach(module('calendarApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should be defiend', inject(function ($compile) {
    element = angular.element('<language-switcher></language-switcher>');
    element = $compile(element)(scope);
    expect(element).toBeDefined();
  }));

  it('should render the directive correctly when language is English', inject(function ($compile) {
    scope.switchToLanguageName = 'Malayalam';
    element = angular.element('<language-switcher></language-switcher>');
    element = $compile(element)(scope);
    scope.$digest();

    // <a class="language-switcher ng-binding ng-scope" ng-click="switchLang()" title="Switch to Malayalam">Malayalam</a>

    expect(element[0].tagName).toBe('A');
    expect(element.hasClass('language-switcher')).toBeTruthy();
    expect(element.prop('title')).toBe('Switch to Malayalam');
    expect(element.text()).toBe('Malayalam');
  }));
});
