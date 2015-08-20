'use strict';

describe('Directive: scrollToTop', function () {

  // load the directive's module
  beforeEach(module('calendarApp'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should render the element properly', inject(function ($compile) {
    element = angular.element('<scroll-to-top></scroll-to-top>');
    element = $compile(element)(scope);
    expect(element[0].tagName).toBe('A');
    expect(element.prop('title')).toBe('Back to the top');
    expect(element.hasClass('scroll-up')).toBeTruthy();
  }));
});
