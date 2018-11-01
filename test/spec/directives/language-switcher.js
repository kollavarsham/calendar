'use strict';

describe('Directive: languageSwitcher', function () {

  // load the directive's module and views
  beforeEach(module('calendarApp', 'app/views/language-switcher.html', 'app/views/year.html'));

  var element, scope, $compile, template, yearTemplate;

  beforeEach(inject(function ($rootScope, _$compile_, $templateCache) {
    scope = $rootScope.$new();

    $compile = _$compile_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    template = $templateCache.get('app/views/language-switcher.html');
    $templateCache.put('views/language-switcher.html', template);
    yearTemplate = $templateCache.get('app/views/year.html');
    $templateCache.put('views/year.html', yearTemplate);
  }));

  it('should be defined', function () {
    element = angular.element('<ul language-switcher></ul>');
    element = $compile(element)(scope);
    scope.$digest();

    /*
      <ul language-switcher="" class="ng-scope"><li class="en">
        <a class="language-switcher" ng-click="lang != 'en' &amp;&amp; switchLang()" title="Switch to English">English</a>
      </li>
      <li class="ml">
        <a class="language-switcher" ng-click="lang != 'ml' &amp;&amp; switchLang()" title="Switch to മലയാളം">മലയാളം</a>
      </li>
      </ul>
    */

    expect(element).toBeDefined();
  });

  it('should render the directive correctly', function () {
    element = angular.element('<ul language-switcher></ul>');
    element = $compile(element)(scope);
    scope.$digest();

    expect(element[0].tagName).toBe('UL');
    expect(element.find('li').length).toBe(2);
    expect(element.find('li > a').length).toBe(2);
    expect(element.find('li.en').length).toBe(1);
    expect(element.find('li.ml').length).toBe(1);
  });

  it('should render the directive correctly when language is English', function () {
    element = angular.element('<ul language-switcher></ul>');
    element = $compile(element)(scope);
    scope.lang = 'en';
    scope.$digest();

    expect(element.find('li.en').hasClass('active')).toBeTruthy();
  });

  it('should render the directive correctly when language is Malayalam', function () {
    element = angular.element('<ul language-switcher></ul>');
    element = $compile(element)(scope);
    scope.lang = 'ml';
    scope.$digest();

    expect(element.find('li.ml').hasClass('active')).toBeTruthy();
  });

  it('should switch the active menu item when the language changes', function () {
    element = angular.element('<ul language-switcher></ul>');
    element = $compile(element)(scope);
    scope.lang = 'ml';
    scope.$digest();

    expect(element.find('li.ml').hasClass('active')).toBeTruthy();

    // switch the lang
    scope.lang = 'en';
    scope.$digest();

    expect(element.find('li.ml').hasClass('active')).toBeFalsy();
    expect(element.find('li.en').hasClass('active')).toBeTruthy();
  });
});
