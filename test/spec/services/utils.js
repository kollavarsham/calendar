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

});
