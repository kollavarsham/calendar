'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  var arrayWithDuplicates = [1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6, 7, 9];
  var uniqueItems = [1, 2, 3, 4, 5, 6, 7, 9];

  it('should be defined', function () {
    expect(utils).toBeDefined();
  });

  describe('unique', function () {

    it('should be defined', function () {
      expect(utils.unique).toBeDefined();
    });

    it('should filter the array down into unique items', function () {
      expect(utils.unique(arrayWithDuplicates)).toEqual(uniqueItems);
    });

  });

  describe('weekdaysLookup', function () {

    it('should be defined', function () {
      expect(utils.weekdaysLookup).toBeDefined();
    });

    it('should have valid malayalam data', function () {
      var weekdaysLookup = utils.weekdaysLookup;
      expect(Object.keys(weekdaysLookup).length).toBe(7);
      expect(weekdaysLookup[0].ml).toBe('ഞായർ');
      expect(weekdaysLookup[1].ml).toBe('തിങ്കൾ');
      expect(weekdaysLookup[2].ml).toBe('ചൊവ്വ');
      expect(weekdaysLookup[3].ml).toBe('ബുധൻ');
      expect(weekdaysLookup[4].ml).toBe('വ്യാഴം');
      expect(weekdaysLookup[5].ml).toBe('വെള്ളി');
      expect(weekdaysLookup[6].ml).toBe('ശനി');
    });

    it('should have valid english data', function () {
      var weekdaysLookup = utils.weekdaysLookup;
      expect(Object.keys(weekdaysLookup).length).toBe(7);
      expect(weekdaysLookup[0].en).toBe('Sunday');
      expect(weekdaysLookup[1].en).toBe('Monday');
      expect(weekdaysLookup[2].en).toBe('Tuesday');
      expect(weekdaysLookup[3].en).toBe('Wednesday');
      expect(weekdaysLookup[4].en).toBe('Thursday');
      expect(weekdaysLookup[5].en).toBe('Friday');
      expect(weekdaysLookup[6].en).toBe('Saturday');
    });

  });

  describe('monthsLookup', function () {

    it('should be defined', function () {
      expect(utils.monthsLookup).toBeDefined();
    });

    it('should have valid english data', function () {
      var monthsLookup = utils.monthsLookup;
      expect(Object.keys(monthsLookup).length).toBe(12);
      expect(monthsLookup[1].en).toBe('January');
      expect(monthsLookup[2].en).toBe('February');
      expect(monthsLookup[3].en).toBe('March');
      expect(monthsLookup[4].en).toBe('April');
      expect(monthsLookup[5].en).toBe('May');
      expect(monthsLookup[6].en).toBe('June');
      expect(monthsLookup[7].en).toBe('July');
      expect(monthsLookup[8].en).toBe('August');
      expect(monthsLookup[9].en).toBe('September');
      expect(monthsLookup[10].en).toBe('October');
      expect(monthsLookup[11].en).toBe('November');
      expect(monthsLookup[12].en).toBe('December');
    });

    it('should have valid malayalam data', function () {
      /* jshint -W100 */
      var monthsLookup = utils.monthsLookup;
      expect(Object.keys(monthsLookup).length).toBe(12);
      expect(monthsLookup[1].ml).toBe('ജനുവരി');
      expect(monthsLookup[2].ml).toBe('ഫെബ്രുവരി');
      expect(monthsLookup[3].ml).toBe('മാർച്ച്‌');
      expect(monthsLookup[4].ml).toBe('ഏപ്രിൽ ');
      expect(monthsLookup[5].ml).toBe('മെയ്‌');
      expect(monthsLookup[6].ml).toBe('ജൂണ്‍');
      expect(monthsLookup[7].ml).toBe('ജൂലൈ');
      expect(monthsLookup[8].ml).toBe('ഓഗസ്റ്റ്‌');
      expect(monthsLookup[9].ml).toBe('സെപ്റ്റംബർ');
      expect(monthsLookup[10].ml).toBe('ഒക്ടോബർ');
      expect(monthsLookup[11].ml).toBe('നവംബർ');
      expect(monthsLookup[12].ml).toBe('ഡിസംബർ');
    });

  });

});
