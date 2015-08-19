'use strict';

describe('Service: utils', function () {

  // load the service's module
  beforeEach(module('calendarApp'));

  // instantiate service
  var utils;
  beforeEach(inject(function (_utils_) {
    utils = _utils_;
  }));

  it('should be defined', function () {
    expect(utils).toBeDefined();
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
