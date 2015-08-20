'use strict';

describe('Directive: scrollToTop', function () {

  // load the directive's module
  beforeEach(module('calendarApp'));

  var element, scope, fakeElement, selectorsClicked;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();

    selectorsClicked = [];

    fakeElement = function (selector) {
      return {
        click : function () {
          selectorsClicked.push(selector);
        }
      };
    };

  }));

  it('should render the element properly', inject(function ($compile) {
    element = angular.element('<scroll-to-top></scroll-to-top>');
    element = $compile(element)(scope);
    expect(element[0].tagName).toBe('A');
    expect(element.prop('title')).toBe('Back to the top');
    expect(element.hasClass('scroll-up')).toBeTruthy();
  }));

  it('should call #scrollUp click on element click', inject(function ($compile) {
    element = angular.element('<scroll-to-top></scroll-to-top>');
    element = $compile(element)(scope);

    spyOn(angular, 'element').and.callFake(fakeElement);

    element.triggerHandler('click');

    expect(angular.element).toHaveBeenCalledWith('#scrollUp');
    expect(selectorsClicked.length).toBe(1);
    expect(selectorsClicked).toEqual(['#scrollUp']);
  }));
});
