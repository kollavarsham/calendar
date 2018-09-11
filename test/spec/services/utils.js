'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var utils, $rootScope, scope;
  beforeEach(inject(function (_utils_, _$rootScope_) {
    utils = _utils_;
    $rootScope = _$rootScope_;
  }));

  it('should be defined', function () {
    expect(utils).toBeDefined();
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

  describe('tithisLookup', function () {

    it('should be defined', function () {
      expect(utils.tithisLookup).toBeDefined();
    });

    it('should have valid english data', function () {
      var tithisLookup = utils.tithisLookup;
      expect(Object.keys(tithisLookup).length).toBe(16);
      expect(tithisLookup[1].en).toBe('Prathama');
      expect(tithisLookup[2].en).toBe('Dwithiya');
      expect(tithisLookup[3].en).toBe('Thrithiya');
      expect(tithisLookup[4].en).toBe('Chathurthi');
      expect(tithisLookup[5].en).toBe('Panchami');
      expect(tithisLookup[6].en).toBe('Shashti');
      expect(tithisLookup[7].en).toBe('Sapthami');
      expect(tithisLookup[8].en).toBe('Ashtami');
      expect(tithisLookup[9].en).toBe('Navami');
      expect(tithisLookup[10].en).toBe('Dasami');
      expect(tithisLookup[11].en).toBe('Ekadasi');
      expect(tithisLookup[12].en).toBe('Dwadasi');
      expect(tithisLookup[13].en).toBe('Thrayodasi');
      expect(tithisLookup[14].en).toBe('Chathurdasi');
    });

    it('should have valid malayalam data', function () {
      /* jshint -W100 */
      var tithisLookup = utils.tithisLookup;
      expect(Object.keys(tithisLookup).length).toBe(16);
      expect(tithisLookup[1].ml).toBe('പ്രഥമ');
      expect(tithisLookup[2].ml).toBe('ദ്വിതീയ');
      expect(tithisLookup[3].ml).toBe('തൃതിയ');
      expect(tithisLookup[4].ml).toBe('ചതുർത്ഥി');
      expect(tithisLookup[5].ml).toBe('പഞ്ചമി');
      expect(tithisLookup[6].ml).toBe('ഷഷ്ഠി');
      expect(tithisLookup[7].ml).toBe('സപ്തമി');
      expect(tithisLookup[8].ml).toBe('അഷ്ടമി');
      expect(tithisLookup[9].ml).toBe('നവമി');
      expect(tithisLookup[10].ml).toBe('ദശമി');
      expect(tithisLookup[11].ml).toBe('ഏകാദശി');
      expect(tithisLookup[12].ml).toBe('ദ്വാദശി');
      expect(tithisLookup[13].ml).toBe('ത്രയോദശി');
      expect(tithisLookup[14].ml).toBe('ചതുർദശി');
    });

  });

  describe('unique', function () {

    it('should be defined', function () {
      expect(utils.unique).toBeDefined();
    });

    it('should filter the array down into unique items', function () {
      var arrayWithDuplicates = [1, 1, 2, 3, 3, 4, 4, 4, 4, 4, 5, 6, 7, 9];
      var uniqueItems = [1, 2, 3, 4, 5, 6, 7, 9];

      expect(utils.unique(arrayWithDuplicates)).toEqual(uniqueItems);
    });

  });

  describe('getMonths', function () {

    it('should be defined', function () {
      expect(utils.getMonths).toBeDefined();
    });

    it('should return valid months array', function () {
      var expectedMonthsArray = [
        {value : 1, text : 'January'},
        {value : 2, text : 'February'},
        {value : 3, text : 'March'},
        {value : 4, text : 'April'},
        {value : 5, text : 'May'},
        {value : 6, text : 'June'},
        {value : 7, text : 'July'},
        {value : 8, text : 'August'},
        {value : 9, text : 'September'},
        {value : 10, text : 'October'},
        {value : 11, text : 'November'},
        {value : 12, text : 'December'}
      ];
      expect(utils.getMonths()).toEqual(expectedMonthsArray);
    });

  });

  describe('getYears', function () {

    it('should be defined', function () {
      expect(utils.getYears).toBeDefined();
    });

    it('should return valid years array', function () {
      var expectedYearsArray = [
        {value : 1900, text : 1900},
        {value : 1901, text : 1901},
        {value : 1902, text : 1902},
        {value : 1903, text : 1903},
        {value : 1904, text : 1904},
        {value : 1905, text : 1905},
        {value : 1906, text : 1906},
        {value : 1907, text : 1907},
        {value : 1908, text : 1908},
        {value : 1909, text : 1909},
        {value : 1910, text : 1910},
        {value : 1911, text : 1911},
        {value : 1912, text : 1912},
        {value : 1913, text : 1913},
        {value : 1914, text : 1914},
        {value : 1915, text : 1915},
        {value : 1916, text : 1916},
        {value : 1917, text : 1917},
        {value : 1918, text : 1918},
        {value : 1919, text : 1919},
        {value : 1920, text : 1920},
        {value : 1921, text : 1921},
        {value : 1922, text : 1922},
        {value : 1923, text : 1923},
        {value : 1924, text : 1924},
        {value : 1925, text : 1925},
        {value : 1926, text : 1926},
        {value : 1927, text : 1927},
        {value : 1928, text : 1928},
        {value : 1929, text : 1929},
        {value : 1930, text : 1930},
        {value : 1931, text : 1931},
        {value : 1932, text : 1932},
        {value : 1933, text : 1933},
        {value : 1934, text : 1934},
        {value : 1935, text : 1935},
        {value : 1936, text : 1936},
        {value : 1937, text : 1937},
        {value : 1938, text : 1938},
        {value : 1939, text : 1939},
        {value : 1940, text : 1940},
        {value : 1941, text : 1941},
        {value : 1942, text : 1942},
        {value : 1943, text : 1943},
        {value : 1944, text : 1944},
        {value : 1945, text : 1945},
        {value : 1946, text : 1946},
        {value : 1947, text : 1947},
        {value : 1948, text : 1948},
        {value : 1949, text : 1949},
        {value : 1950, text : 1950},
        {value : 1951, text : 1951},
        {value : 1952, text : 1952},
        {value : 1953, text : 1953},
        {value : 1954, text : 1954},
        {value : 1955, text : 1955},
        {value : 1956, text : 1956},
        {value : 1957, text : 1957},
        {value : 1958, text : 1958},
        {value : 1959, text : 1959},
        {value : 1960, text : 1960},
        {value : 1961, text : 1961},
        {value : 1962, text : 1962},
        {value : 1963, text : 1963},
        {value : 1964, text : 1964},
        {value : 1965, text : 1965},
        {value : 1966, text : 1966},
        {value : 1967, text : 1967},
        {value : 1968, text : 1968},
        {value : 1969, text : 1969},
        {value : 1970, text : 1970},
        {value : 1971, text : 1971},
        {value : 1972, text : 1972},
        {value : 1973, text : 1973},
        {value : 1974, text : 1974},
        {value : 1975, text : 1975},
        {value : 1976, text : 1976},
        {value : 1977, text : 1977},
        {value : 1978, text : 1978},
        {value : 1979, text : 1979},
        {value : 1980, text : 1980},
        {value : 1981, text : 1981},
        {value : 1982, text : 1982},
        {value : 1983, text : 1983},
        {value : 1984, text : 1984},
        {value : 1985, text : 1985},
        {value : 1986, text : 1986},
        {value : 1987, text : 1987},
        {value : 1988, text : 1988},
        {value : 1989, text : 1989},
        {value : 1990, text : 1990},
        {value : 1991, text : 1991},
        {value : 1992, text : 1992},
        {value : 1993, text : 1993},
        {value : 1994, text : 1994},
        {value : 1995, text : 1995},
        {value : 1996, text : 1996},
        {value : 1997, text : 1997},
        {value : 1998, text : 1998},
        {value : 1999, text : 1999},
        {value : 2000, text : 2000},
        {value : 2001, text : 2001},
        {value : 2002, text : 2002},
        {value : 2003, text : 2003},
        {value : 2004, text : 2004},
        {value : 2005, text : 2005},
        {value : 2006, text : 2006},
        {value : 2007, text : 2007},
        {value : 2008, text : 2008},
        {value : 2009, text : 2009},
        {value : 2010, text : 2010},
        {value : 2011, text : 2011},
        {value : 2012, text : 2012},
        {value : 2013, text : 2013},
        {value : 2014, text : 2014},
        {value : 2015, text : 2015},
        {value : 2016, text : 2016},
        {value : 2017, text : 2017},
        {value : 2018, text : 2018},
        {value : 2019, text : 2019},
        {value : 2020, text : 2020},
        {value : 2021, text : 2021},
        {value : 2022, text : 2022},
        {value : 2023, text : 2023},
        {value : 2024, text : 2024},
        {value : 2025, text : 2025},
        {value : 2026, text : 2026},
        {value : 2027, text : 2027},
        {value : 2028, text : 2028},
        {value : 2029, text : 2029},
        {value : 2030, text : 2030},
        {value : 2031, text : 2031},
        {value : 2032, text : 2032},
        {value : 2033, text : 2033},
        {value : 2034, text : 2034},
        {value : 2035, text : 2035},
        {value : 2036, text : 2036},
        {value : 2037, text : 2037},
        {value : 2038, text : 2038},
        {value : 2039, text : 2039},
        {value : 2040, text : 2040},
        {value : 2041, text : 2041},
        {value : 2042, text : 2042},
        {value : 2043, text : 2043},
        {value : 2044, text : 2044},
        {value : 2045, text : 2045},
        {value : 2046, text : 2046},
        {value : 2047, text : 2047},
        {value : 2048, text : 2048},
        {value : 2049, text : 2049},
        {value : 2050, text : 2050}
      ];
      expect(utils.getYears()).toEqual(expectedYearsArray);
    });

  });

  describe('getMalayalamMonthNames', function () {

    var year;

    beforeEach(function () {
      jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';
      year = getJSONFixture('2015-ml.json'); // load the data for 2015 from the test/mock/2015.json fixture
    });

    it('should return the correct values for the month of February', function () {
      var month = year.months[1]; // let us test with the month of February
      expect(utils.getMalayalamMonthNames(month)).toBe('മകരം - കുംഭം');
    });

    it('should return the correct values for the month of May', function () {
      var month = year.months[4]; // let us test with the month of May
      expect(utils.getMalayalamMonthNames(month)).toBe('മേടം - ഇടവം');
    });

  });

  describe('getMalayalamYears', function () {

    var year;

    beforeEach(function () {
      jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';
      year = getJSONFixture('2015-ml.json'); // load the data for 2015 from the test/mock/2015.json fixture
    });

    it('should return the correct values for the month of February', function () {
      var month = year.months[1]; // let us test with the month of February
      expect(utils.getMalayalamYears(month)).toBe('1190');
    });

    it('should return the correct values for the month of August', function () {
      var month = year.months[7]; // let us test with the month of August
      expect(utils.getMalayalamYears(month)).toBe('1190 - 1191');
    });

    it('should return the correct values for the month of December', function () {
      var month = year.months[11]; // let us test with the month of December
      expect(utils.getMalayalamYears(month)).toBe('1191');
    });

  });

  describe('showMonth', function () {

    beforeEach(function () {
      scope = $rootScope.$new();
      scope.calendar = {
        months : utils.getMonths(),
        month  : 5
      };
    });

    it('should be defined', function () {
      expect(utils.showMonth).toBeDefined();
    });

    it('should return \'Not set\' when scope does not have month', function () {
      scope.calendar.month = undefined;
      expect(utils.showMonth(scope)()).toBe('Not set');
    });

    it('should return the month defined on scope', function () {
      expect(utils.showMonth(scope)()).toBe('May');
    });

  });

  describe('showYear', function () {

    var currentYear = (new Date()).getFullYear();

    beforeEach(function () {
      scope = $rootScope.$new();
      scope.calendar = {
        years : utils.getYears(),
        year  : currentYear
      };
    });

    it('should be defined', function () {
      expect(utils.showYear).toBeDefined();
    });

    it('should return \'Not set\' when scope does not have year', function () {
      scope.calendar.year = undefined;
      expect(utils.showYear(scope)()).toBe('Not set');
    });

    it('should return the year defined on scope', function () {
      expect(utils.showYear(scope)()).toBe(currentYear);
    });

  });

  describe('calculateWeeks', function () {

    var year;

    beforeEach(function () {
      jasmine.getJSONFixtures().fixturesPath = 'base/test/mock';
      year = getJSONFixture('2015-ml.json'); // load the data for 2015 from the test/mock/2015.json fixture

    });

    it('should return the correct value for the month of February', function () {
      var month = year.months[1]; // let us test with the month of February
      scope = $rootScope.$new();
      scope.month = month;
      scope.weekdaysLookup = utils.weekdaysLookup;

      var returnedWeeksArray = utils.calculateWeeks(scope);
      expect(returnedWeeksArray.length).toBe(4);
      expect(returnedWeeksArray[0].length).toBe(7);
      expect(returnedWeeksArray[1].length).toBe(7);
      expect(returnedWeeksArray[2].length).toBe(7);
      expect(returnedWeeksArray[3].length).toBe(7);

      var firstWeek = returnedWeeksArray[0];
      expect(firstWeek[0].date).toBe(1);
      expect(firstWeek[1].date).toBe(2);
      expect(firstWeek[2].date).toBe(3);
      expect(firstWeek[0].month).toBe('February');
      expect(firstWeek[1].month).toBe('February');
      expect(firstWeek[2].month).toBe('February');
      expect(firstWeek[0].tithi).toBe(13);
      expect(firstWeek[1].tithi).toBe(14);
      expect(firstWeek[2].tithi).toBe(15);

      var lastWeek = returnedWeeksArray[3];
      expect(lastWeek[4].date).toBe(26);
      expect(lastWeek[5].date).toBe(27);
      expect(lastWeek[6].date).toBe(28);
      expect(lastWeek[4].month).toBe('February');
      expect(lastWeek[5].month).toBe('February');
      expect(lastWeek[6].month).toBe('February');
      expect(lastWeek[4].tithi).toBe(8);
      expect(lastWeek[5].tithi).toBe(9);
      expect(lastWeek[6].tithi).toBe(10);
    });

    it('should return the correct value for the month of May', function () {
      var month = year.months[4]; // let us test with the month of May
      scope = $rootScope.$new();
      scope.month = month;
      scope.weekdaysLookup = utils.weekdaysLookup;

      var returnedWeeksArray = utils.calculateWeeks(scope);
      expect(returnedWeeksArray.length).toBe(6);
      expect(returnedWeeksArray[0].length).toBe(7);
      expect(returnedWeeksArray[1].length).toBe(7);
      expect(returnedWeeksArray[2].length).toBe(7);
      expect(returnedWeeksArray[3].length).toBe(7);
      expect(returnedWeeksArray[4].length).toBe(7);
      expect(returnedWeeksArray[5].length).toBe(7);

      var firstWeek = returnedWeeksArray[0];
      expect(firstWeek[0].date).toBeUndefined();
      expect(firstWeek[1].date).toBeUndefined();
      expect(firstWeek[2].date).toBeUndefined();
      expect(firstWeek[3].date).toBeUndefined();
      expect(firstWeek[4].date).toBeUndefined();
      expect(firstWeek[5].date).toBe(1);
      expect(firstWeek[6].date).toBe(2);
      expect(firstWeek[0].month).toBeUndefined();
      expect(firstWeek[5].month).toBe('May');
      expect(firstWeek[6].month).toBe('May');
      expect(firstWeek[5].tithi).toBe(13);
      expect(firstWeek[6].tithi).toBe(14);

      var lastWeek = returnedWeeksArray[5];
      expect(lastWeek[0].date).toBe(31);
      expect(lastWeek[1].date).toBeUndefined();
      expect(lastWeek[2].date).toBeUndefined();
      expect(lastWeek[3].date).toBeUndefined();
      expect(lastWeek[4].date).toBeUndefined();
      expect(lastWeek[5].date).toBeUndefined();
      expect(lastWeek[6].date).toBeUndefined();
      expect(lastWeek[0].month).toBe('May');
      expect(lastWeek[0].tithi).toBe(13);

    });

    it('should return the correct value for the month of May with mocked today', function () {
      var month = year.months[4]; // let us test with the month of May
      scope = $rootScope.$new();
      scope.month = month;
      scope.weekdaysLookup = utils.weekdaysLookup;

      var baseTime = new Date(2015, 4, 22);
      jasmine.clock().mockDate(baseTime); // set today to be 2015-05-22

      var returnedWeeksArray = utils.calculateWeeks(scope);
      var todayWeek = returnedWeeksArray[3];
      expect(todayWeek[0].date).toBe(17);
      expect(todayWeek[1].date).toBe(18);
      expect(todayWeek[2].date).toBe(19);
      expect(todayWeek[3].date).toBe(20);
      expect(todayWeek[4].date).toBe(21);
      expect(todayWeek[5].date).toBe(22);
      expect(todayWeek[6].date).toBe(23);
      expect(todayWeek[0].isToday).toBeFalsy();
      expect(todayWeek[1].isToday).toBeFalsy();
      expect(todayWeek[2].isToday).toBeFalsy();
      expect(todayWeek[3].isToday).toBeFalsy();
      expect(todayWeek[4].isToday).toBeFalsy();
      expect(todayWeek[5].isToday).toBeTruthy();
      expect(todayWeek[6].isToday).toBeFalsy();
      expect(todayWeek[0].month).toBe('May');
      expect(todayWeek[1].month).toBe('May');
      expect(todayWeek[2].month).toBe('May');
      expect(todayWeek[3].month).toBe('May');
      expect(todayWeek[4].month).toBe('May');
      expect(todayWeek[5].month).toBe('May');
      expect(todayWeek[6].month).toBe('May');
      /* jshint -W100 */
      expect(todayWeek[0].mlMonth).toBe('മെയ്‌');
      expect(todayWeek[1].mlMonth).toBe('മെയ്‌');
      expect(todayWeek[2].mlMonth).toBe('മെയ്‌');
      expect(todayWeek[3].mlMonth).toBe('മെയ്‌');
      expect(todayWeek[4].mlMonth).toBe('മെയ്‌');
      expect(todayWeek[5].mlMonth).toBe('മെയ്‌');
      expect(todayWeek[6].mlMonth).toBe('മെയ്‌');
      /* jshint +W100 */
      expect(todayWeek[0].malayalamYear).toBe(1190);
      expect(todayWeek[1].malayalamYear).toBe(1190);
      expect(todayWeek[2].malayalamYear).toBe(1190);
      expect(todayWeek[3].malayalamYear).toBe(1190);
      expect(todayWeek[4].malayalamYear).toBe(1190);
      expect(todayWeek[5].malayalamYear).toBe(1190);
      expect(todayWeek[6].malayalamYear).toBe(1190);
      expect(todayWeek[0].malayalamMonth).toBe('ഇടവം');
      expect(todayWeek[1].malayalamMonth).toBe('ഇടവം');
      expect(todayWeek[2].malayalamMonth).toBe('ഇടവം');
      expect(todayWeek[3].malayalamMonth).toBe('ഇടവം');
      expect(todayWeek[4].malayalamMonth).toBe('ഇടവം');
      expect(todayWeek[5].malayalamMonth).toBe('ഇടവം');
      expect(todayWeek[6].malayalamMonth).toBe('ഇടവം');
      expect(todayWeek[0].malayalamDay).toBe(3);
      expect(todayWeek[1].malayalamDay).toBe(4);
      expect(todayWeek[2].malayalamDay).toBe(5);
      expect(todayWeek[3].malayalamDay).toBe(6);
      expect(todayWeek[4].malayalamDay).toBe(7);
      expect(todayWeek[5].malayalamDay).toBe(8);
      expect(todayWeek[6].malayalamDay).toBe(9);
    });

    it('should return the correct value for the month of May with selected date', function () {
      var month = year.months[4]; // let us test with the month of May
      scope = $rootScope.$new();
      scope.month = month;
      scope.weekdaysLookup = utils.weekdaysLookup;
      scope.sel = new Date(2015, 4, 20); // set the selected date to be 2015-05-20

      var returnedWeeksArray = utils.calculateWeeks(scope);
      var selectedDayWeek = returnedWeeksArray[3];
      expect(selectedDayWeek[0].date).toBe(17);
      expect(selectedDayWeek[1].date).toBe(18);
      expect(selectedDayWeek[2].date).toBe(19);
      expect(selectedDayWeek[3].date).toBe(20);
      expect(selectedDayWeek[4].date).toBe(21);
      expect(selectedDayWeek[5].date).toBe(22);
      expect(selectedDayWeek[6].date).toBe(23);
      expect(selectedDayWeek[0].isToday).toBeFalsy();
      expect(selectedDayWeek[1].isToday).toBeFalsy();
      expect(selectedDayWeek[2].isToday).toBeFalsy();
      expect(selectedDayWeek[3].isToday).toBeFalsy();
      expect(selectedDayWeek[4].isToday).toBeFalsy();
      expect(selectedDayWeek[5].isToday).toBeTruthy();
      expect(selectedDayWeek[6].isToday).toBeFalsy();
      expect(selectedDayWeek[0].isSelected).toBeFalsy();
      expect(selectedDayWeek[1].isSelected).toBeFalsy();
      expect(selectedDayWeek[2].isSelected).toBeFalsy();
      expect(selectedDayWeek[3].isSelected).toBeTruthy();
      expect(selectedDayWeek[4].isSelected).toBeFalsy();
      expect(selectedDayWeek[5].isSelected).toBeFalsy();
      expect(selectedDayWeek[6].isSelected).toBeFalsy();
      expect(selectedDayWeek[0].month).toBe('May');
      expect(selectedDayWeek[1].month).toBe('May');
      expect(selectedDayWeek[2].month).toBe('May');
      expect(selectedDayWeek[3].month).toBe('May');
      expect(selectedDayWeek[4].month).toBe('May');
      expect(selectedDayWeek[5].month).toBe('May');
      expect(selectedDayWeek[6].month).toBe('May');
      /* jshint -W100 */
      expect(selectedDayWeek[0].mlMonth).toBe('മെയ്‌');
      expect(selectedDayWeek[1].mlMonth).toBe('മെയ്‌');
      expect(selectedDayWeek[2].mlMonth).toBe('മെയ്‌');
      expect(selectedDayWeek[3].mlMonth).toBe('മെയ്‌');
      expect(selectedDayWeek[4].mlMonth).toBe('മെയ്‌');
      expect(selectedDayWeek[5].mlMonth).toBe('മെയ്‌');
      expect(selectedDayWeek[6].mlMonth).toBe('മെയ്‌');
      /* jshint +W100 */
      expect(selectedDayWeek[0].malayalamYear).toBe(1190);
      expect(selectedDayWeek[1].malayalamYear).toBe(1190);
      expect(selectedDayWeek[2].malayalamYear).toBe(1190);
      expect(selectedDayWeek[3].malayalamYear).toBe(1190);
      expect(selectedDayWeek[4].malayalamYear).toBe(1190);
      expect(selectedDayWeek[5].malayalamYear).toBe(1190);
      expect(selectedDayWeek[6].malayalamYear).toBe(1190);
      expect(selectedDayWeek[0].malayalamMonth).toBe('ഇടവം');
      expect(selectedDayWeek[1].malayalamMonth).toBe('ഇടവം');
      expect(selectedDayWeek[2].malayalamMonth).toBe('ഇടവം');
      expect(selectedDayWeek[3].malayalamMonth).toBe('ഇടവം');
      expect(selectedDayWeek[4].malayalamMonth).toBe('ഇടവം');
      expect(selectedDayWeek[5].malayalamMonth).toBe('ഇടവം');
      expect(selectedDayWeek[6].malayalamMonth).toBe('ഇടവം');
      expect(selectedDayWeek[0].malayalamDay).toBe(3);
      expect(selectedDayWeek[1].malayalamDay).toBe(4);
      expect(selectedDayWeek[2].malayalamDay).toBe(5);
      expect(selectedDayWeek[3].malayalamDay).toBe(6);
      expect(selectedDayWeek[4].malayalamDay).toBe(7);
      expect(selectedDayWeek[5].malayalamDay).toBe(8);
      expect(selectedDayWeek[6].malayalamDay).toBe(9);
    });

  });

});
