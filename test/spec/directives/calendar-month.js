'use strict';

describe('Directive: calendarMonth', function () {

  // load the directive's module and views
  beforeEach(module('calendarApp', 'app/views/calendar-month.html', 'app/views/calendar-day.html'));

  var element, scope, $compile, template, dayTemplate, year, utils, $timeout;

  beforeEach(inject(function ($rootScope, _$compile_, $templateCache, _utils_, _$timeout_) {
    jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';

    scope = $rootScope.$new();
    $compile = _$compile_;
    $timeout = _$timeout_;

    // Load the template from the test relative path and store it into the directive-relative path
    // http://www.portlandwebworks.com/blog/testing-angularjs-directives-handling-external-templates
    template = $templateCache.get('app/views/calendar-month.html');
    $templateCache.put('views/calendar-month.html', template);
    dayTemplate = $templateCache.get('app/views/calendar-day.html');
    $templateCache.put('views/calendar-day.html', dayTemplate);

    utils = _utils_;

    scope.weekdaysLookup = utils.weekdaysLookup;

    year = getJSONFixture('2015-ml.json'); // load the data for 2015 from the test/mock/2015.json fixture
  }));

  describe('calendarMonth for 2015 February', function () {

    beforeEach(function () {
      scope.month = year.months[1]; // let us test with the month of February

      element = angular.element('<calendar-month month="month" lang="lang"></calendar-month>');
      element = $compile(element)(scope);
      scope.$digest();
    });

    it('should be a div element', function () {
      expect(element[0].tagName).toBe('DIV');
    });

    it('should have one table element as child', function () {
      expect(element.find('table').length).toBe(1);
    });

    it('should have the table header with weekdays in malayalam', function () {
      var tableHeader = element.find('.head');
      expect(tableHeader).toBeDefined();
      expect(tableHeader.find('.malayalam-weekday').size()).toBe(7);
      expect(tableHeader.find('.malayalam-weekday').text()).toBe('ഞായർതിങ്കൾചൊവ്വബുധൻവ്യാഴംവെള്ളിശനി');
    });

    it('should have 5 rows in the table', function () {
      expect(element.find('tr').length).toBe(5);
    });

    it('should have 28 cells in the table', function () {
      expect(element.find('div.gregorian').length).toBe(28);
    });

    it('should have 28 non-empty cells in the table', function () {
      expect(element.find('div.gregorian:not(:empty)').length).toBe(28);
    });

    it('should have the year as 2015', function () {
      var monthYear = element.find('.month-year');
      expect(monthYear.find('h1').html()).toBe('2015');
    });

    describe('month-masthead', function () {

      it('should be a div element', function () {
        expect(element.find('.month-masthead')[0].tagName).toBe('DIV');
      });

      it('should have the correct month name', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.month-name').html()).toBe('February | ഫെബ്രുവരി');
      });

      it('should have malayalam year as 1190', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-year').html()).toBe('1190');
      });

      it('should have the correct malayalam month names', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-month').html()).toBe('മകരം - കുംഭം');
      });

    });

    describe('first row', function () {

      it('should have 0 empty cells', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian:empty').length).toBe(0);
      });

      it('should have its 1st cell with the date 1', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[0].innerHTML).toBe('1');
      });

      it('should have its 1st cell with the malayalam date 19', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[0].innerHTML).toBe('19');
      });

      it('should have its 1st cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[0].innerHTML).toBe('&nbsp; തിരുവാതിര');
      });

      it('should have its 2nd cell with the date 2', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[1].innerHTML).toBe('2');
      });

      it('should have its 2nd cell with the malayalam date 20', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[1].innerHTML).toBe('20');
      });

      it('should have its 2nd cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[1].innerHTML).toBe('&nbsp; പുണർതം');
      });

    });

    describe('last row', function () {

      it('should have 0 empty cells', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.gregorian:empty').length).toBe(0);
      });

      it('should have its last cell with the date 28', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.gregorian')[6].innerHTML).toBe('28');
      });

      it('should have its last cell with the malayalam date 16', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.malayalam-day')[6].innerHTML).toBe('16');
      });

      it('should have its last cell with the correct naksatra', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.naksatra')[6].innerHTML).toBe('&nbsp; തിരുവാതിര');
      });

    });

  });

  describe('calendarMonth for 2015 May', function () {

    beforeEach(function () {
      scope.month = year.months[4]; // let us test with the month of May

      element = angular.element('<calendar-month month="month" lang="lang"></calendar-month>');
      element = $compile(element)(scope);
      scope.$digest();
    });

    it('should be a div element', function () {
      expect(element[0].tagName).toBe('DIV');
    });

    it('should have one table element as child', function () {
      expect(element.find('table').length).toBe(1);
    });

    it('should have the table header with weekdays in malayalam', function () {
      var tableHeader = element.find('.head');
      expect(tableHeader).toBeDefined();
      expect(tableHeader.find('.malayalam-weekday').size()).toBe(7);
      expect(tableHeader.find('.malayalam-weekday').text()).toBe('ഞായർതിങ്കൾചൊവ്വബുധൻവ്യാഴംവെള്ളിശനി');
    });

    it('should have 7 rows in the table', function () {
      expect(element.find('tr').length).toBe(7);
    });

    it('should have 42 cells in the table', function () {
      expect(element.find('div.gregorian').length).toBe(42);
    });

    it('should have 31 non-empty cells in the table', function () {
      expect(element.find('div.gregorian:not(:empty)').length).toBe(31);
    });

    it('should have the year as 2015', function () {
      var monthYear = element.find('.month-year');
      expect(monthYear.find('h1').html()).toBe('2015');
    });

    describe('month-masthead', function () {

      it('should be a div element', function () {
        expect(element.find('.month-masthead')[0].tagName).toBe('DIV');
      });

      it('should have the correct month name', function () {
        /* jshint -W100 */
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.month-name').html()).toBe('May | മെയ്‌');
      });

      it('should have malayalam year as 1190', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-year').html()).toBe('1190');
      });

      it('should have the correct malayalam month names', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-month').html()).toBe('മേടം - ഇടവം');
      });

    });

    describe('first row', function () {

      it('should have 5 empty cells', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian:empty').length).toBe(5);
      });

      it('should have its 6th cell with the date 1', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[5].innerHTML).toBe('1');
      });

      it('should have its 6th calendar-day element without the sunday css class', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('calendar-day:nth-child(6)').hasClass('sunday')).toBeFalsy();
      });

      it('should have its 6th cell with the malayalam date 18', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[5].innerHTML).toBe('18');
      });

      it('should have its 6th cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[5].innerHTML).toBe('&nbsp; അത്തം');
      });

      it('should have its 7th cell with the date 2', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[6].innerHTML).toBe('2');
      });

      it('should have its 7th cell with the malayalam date 18', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[6].innerHTML).toBe('19');
      });

      it('should have its 7th cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[6].innerHTML).toBe('&nbsp; ചിത്ര');
      });

    });

    describe('last row', function () {

      it('should have 6 empty cells', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.gregorian:empty').length).toBe(6);
      });

      it('should have its first cell with the date 30', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.gregorian')[0].innerHTML).toBe('31');
      });

      it('should have its first calendar-day element with the sunday css class', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('calendar-day:first').hasClass('sunday')).toBeTruthy();
      });

      it('should have its first cell with the malayalam date 18', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.malayalam-day')[0].innerHTML).toBe('17');
      });

      it('should have its first cell with the correct naksatra', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.naksatra')[0].innerHTML).toBe('&nbsp; ചോതി');
      });

    });

  });

  describe('calendarMonth for 2015 February with lang as ml', function () {

    beforeEach(function () {
      scope.lang = 'ml';
      scope.month = year.months[1]; // let us test with the month of February

      element = angular.element('<calendar-month month="month" lang="lang"></calendar-month>');
      element = $compile(element)(scope);
      scope.$digest();
    });

    it('should be a div element', function () {
      expect(element[0].tagName).toBe('DIV');
    });

    it('should have one table element as child', function () {
      expect(element.find('table').length).toBe(1);
    });

    it('should have the table header with weekdays in malayalam', function () {
      var tableHeader = element.find('.head');
      expect(tableHeader).toBeDefined();
      expect(tableHeader.find('.malayalam-weekday').size()).toBe(7);
      expect(tableHeader.find('.malayalam-weekday').text()).toBe('ഞായർതിങ്കൾചൊവ്വബുധൻവ്യാഴംവെള്ളിശനി');
    });

    it('should have 5 rows in the table', function () {
      expect(element.find('tr').length).toBe(5);
    });

    it('should have 28 cells in the table', function () {
      expect(element.find('div.gregorian').length).toBe(28);
    });

    it('should have 28 non-empty cells in the table', function () {
      expect(element.find('div.gregorian:not(:empty)').length).toBe(28);
    });

    it('should have the year as 2015', function () {
      var monthYear = element.find('.month-year');
      expect(monthYear.find('h1').html()).toBe('2015');
    });

    describe('month-masthead', function () {

      it('should be a div element', function () {
        expect(element.find('.month-masthead')[0].tagName).toBe('DIV');
      });

      it('should have the correct month name', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.month-name').html()).toBe('February | ഫെബ്രുവരി');
      });

      it('should have malayalam year as 1190', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-year').html()).toBe('1190');
      });

      it('should have the correct malayalam month names', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-month').html()).toBe('മകരം - കുംഭം');
      });

    });

    describe('first row', function () {

      it('should have 0 empty cells', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian:empty').length).toBe(0);
      });

      it('should have its 1st cell with the date 1', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[0].innerHTML).toBe('1');
      });

      it('should have its 1st cell with the malayalam date 19', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[0].innerHTML).toBe('19');
      });

      it('should have its 1st cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[0].innerHTML).toBe('&nbsp; തിരുവാതിര');
      });

      it('should have its 2nd cell with the date 2', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[1].innerHTML).toBe('2');
      });

      it('should have its 2nd cell with the malayalam date 20', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[1].innerHTML).toBe('20');
      });

      it('should have its 2nd cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[1].innerHTML).toBe('&nbsp; പുണർതം');
      });

    });

    describe('last row', function () {

      it('should have 0 empty cells', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.gregorian:empty').length).toBe(0);
      });

      it('should have its last cell with the date 28', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.gregorian')[6].innerHTML).toBe('28');
      });

      it('should have its last cell with the malayalam date 16', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.malayalam-day')[6].innerHTML).toBe('16');
      });

      it('should have its last cell with the correct naksatra', function () {
        var lastRow = element.find('tr:nth-of-type(5)');
        expect(lastRow.find('div.naksatra')[6].innerHTML).toBe('&nbsp; തിരുവാതിര');
      });

    });

  });

  describe('calendarMonth for 2015 May with lang as en', function () {

    beforeEach(function () {
      year = getJSONFixture('2015-en.json'); // load the data for 2015 from the test/mock/2015.json fixture
      scope.lang = 'en';
      scope.month = year.months[4]; // let us test with the month of May

      element = angular.element('<calendar-month month="month" lang="lang"></calendar-month>');
      element = $compile(element)(scope);
      scope.$digest();
    });

    it('should be a div element', function () {
      expect(element[0].tagName).toBe('DIV');
    });

    it('should have one table element as child', function () {
      expect(element.find('table').length).toBe(1);
    });

    it('should have the table header with weekdays in malayalam', function () {
      var tableHeader = element.find('.head');
      expect(tableHeader).toBeDefined();
      expect(tableHeader.find('.malayalam-weekday').size()).toBe(7);
      expect(tableHeader.find('.malayalam-weekday').text()).toBe('SundayMondayTuesdayWednesdayThursdayFridaySaturday');
    });

    it('should have 7 rows in the table', function () {
      expect(element.find('tr').length).toBe(7);
    });

    it('should have 42 cells in the table', function () {
      expect(element.find('div.gregorian').length).toBe(42);
    });

    it('should have 31 non-empty cells in the table', function () {
      expect(element.find('div.gregorian:not(:empty)').length).toBe(31);
    });

    it('should have the year as 2015', function () {
      var monthYear = element.find('.month-year');
      expect(monthYear.find('h1').html()).toBe('2015');
    });

    describe('month-masthead', function () {

      it('should be a div element', function () {
        expect(element.find('.month-masthead')[0].tagName).toBe('DIV');
      });

      it('should have the correct month name', function () {
        /* jshint -W100 */
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.month-name').html()).toBe('May | മെയ്‌');
      });

      it('should have malayalam year as 1190', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-year').html()).toBe('1190');
      });

      it('should have the correct malayalam month names', function () {
        var monthMasthead = element.find('.month-masthead');
        expect(monthMasthead.find('.malayalam-month').html()).toBe('Medam      - Idavam    ');
      });

    });

    describe('first row', function () {

      it('should have 5 empty cells', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian:empty').length).toBe(5);
      });

      it('should have its 6th cell with the date 1', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[5].innerHTML).toBe('1');
      });

      it('should have its 6th cell with the malayalam date 18', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[5].innerHTML).toBe('18');
      });

      it('should have its 6th cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[5].innerHTML).toBe('&nbsp; Atham');
      });

      it('should have its 7th cell with the date 2', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.gregorian')[6].innerHTML).toBe('2');
      });

      it('should have its 7th cell with the malayalam date 18', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.malayalam-day')[6].innerHTML).toBe('19');
      });

      it('should have its 7th cell with the correct naksatra', function () {
        var firstRow = element.find('tr:nth-of-type(2)');
        expect(firstRow.find('div.naksatra')[6].innerHTML).toBe('&nbsp; Chithra');
      });

    });

    describe('last row', function () {

      it('should have 6 empty cells', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.gregorian:empty').length).toBe(6);
      });

      it('should have its first cell with the date 30', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.gregorian')[0].innerHTML).toBe('31');
      });

      it('should have its first cell with the malayalam date 18', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.malayalam-day')[0].innerHTML).toBe('17');
      });

      it('should have its first cell with the correct naksatra', function () {
        var lastRow = element.find('tr:nth-of-type(7)');
        expect(lastRow.find('div.naksatra')[0].innerHTML).toBe('&nbsp; Chothi');
      });

    });

  });

  describe('calendarMonth for 2015 May with mocked today\'s date', function () {

    beforeEach(function () {
      var baseTime = new Date(2015, 4, 22);
      jasmine.clock().mockDate(baseTime); // set today to be 2015-05-22

      spyOn(utils, 'getMonthNamePrefix').and.callThrough();
      spyOn(scope, '$emit').and.callThrough();

      scope.month = year.months[4]; // let us test with the month of May

      element = angular.element('<calendar-month month="month" lang="lang"></calendar-month>');
      element = $compile(element)(scope);
      scope.$digest();
    });

    it('should not have the today css class on 2015-02-21', function () {
      var fourthRow = element.find('tr:nth-of-type(5)');
      expect(fourthRow.find('td:nth-child(7)').hasClass('today')).toBeFalsy();
    });

    it('should have the today css class on 2015-05-22', function () {
      var fourthRow = element.find('tr:nth-of-type(5)');
      expect(fourthRow.find('td:nth-child(6)').hasClass('today')).toBeTruthy();
    });

    it('should emit the currentMonthRendered event on scope', function () {
      $timeout.flush();
      expect(scope.$emit).toHaveBeenCalledWith('currentMonthRendered', 'May');
      expect(utils.getMonthNamePrefix).toHaveBeenCalledWith(element);
    });

  });

  describe('calendarMonth for 2015 May with selected date', function () {

    beforeEach(function () {
      var baseTime = new Date(2016, 4, 22);
      jasmine.clock().mockDate(baseTime); // set today to be 2016-05-22

      spyOn(utils, 'getMonthNamePrefix').and.callThrough();
      spyOn(scope, '$emit').and.callThrough();

      scope.month = year.months[4]; // let us test with the month of May
      scope.sel = new Date(2015, 4, 22);

      element = angular.element('<calendar-month month="month" lang="lang" sel="sel"></calendar-month>');
      element = $compile(element)(scope);
      scope.$digest();
    });

    it('should not have the selected css class on 2015-02-21', function () {
      var fourthRow = element.find('tr:nth-of-type(5)');
      expect(fourthRow.find('td:nth-child(7)').hasClass('selected')).toBeFalsy();
    });

    it('should not have the today css class on 2015-05-22', function () {
      var fourthRow = element.find('tr:nth-of-type(5)');
      expect(fourthRow.find('td:nth-child(6)').hasClass('today')).toBeFalsy();
    });

    it('should have the selected css class on 2015-05-22', function () {
      var fourthRow = element.find('tr:nth-of-type(5)');
      expect(fourthRow.find('td:nth-child(6)').hasClass('selected')).toBeTruthy();
    });

    it('should emit the selectedMonthRendered event on scope', function () {
      $timeout.flush();
      expect(scope.$emit).toHaveBeenCalledWith('selectedMonthRendered', 'May');
      expect(utils.getMonthNamePrefix).toHaveBeenCalledWith(element);
    });

  });

});
