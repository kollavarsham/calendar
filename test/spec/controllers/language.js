'use strict';

describe('Controller: LanguageCtrl', function () {

  // load the controller's module
  beforeEach(module('calendarApp'));

  var LanguageCtrl, scope, $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$location_) {
    scope = $rootScope.$new();

    $location = _$location_;

    LanguageCtrl = $controller('LanguageCtrl', {
      $scope    : scope,
      $location : $location
    });
  }));

  it('should be defined', function () {
    expect(LanguageCtrl).toBeDefined();
  });

  it('should have initialized the models correctly', function () {
    expect(scope.lang).toBe('ml');
    expect(scope.switchToLanguage).toBe('en');
  });

  describe('models when language is English', function () {

    beforeEach(inject(function ($controller, $rootScope, _$location_) {
      scope = $rootScope.$new();
      $location = _$location_;

      spyOn($location, 'search').and.returnValue({lang : 'en'});

      LanguageCtrl = $controller('LanguageCtrl', {
        $scope    : scope,
        $location : $location
      });
    }));

    it('should be initialized correctly', function () {
      expect(scope.lang).toBe('en');
      expect(scope.switchToLanguage).toBe('ml');
    });

  });

  describe('models when language is Malayalam', function () {

    beforeEach(inject(function ($controller, $rootScope, _$location_) {
      scope = $rootScope.$new();
      $location = _$location_;

      spyOn($location, 'search').and.returnValue({lang : 'ml'});

      LanguageCtrl = $controller('LanguageCtrl', {
        $scope    : scope,
        $location : $location
      });
    }));

    it('should be initialized correctly', function () {
      expect(scope.lang).toBe('ml');
      expect(scope.switchToLanguage).toBe('en');
    });

  });

  describe('switchLang when language is English', function () {

    var locationSearchArguments;

    beforeEach(inject(function ($controller, $rootScope, _$location_) {
      scope = $rootScope.$new();
      $location = _$location_;

      spyOn($location, 'search').and.callFake(function (key, value) {
        if (!key) {
          return {lang : 'en'};
        } else {
          locationSearchArguments[key] = value;
        }
      });

      locationSearchArguments = {};

      LanguageCtrl = $controller('LanguageCtrl', {
        $scope    : scope,
        $location : $location
      });
    }));

    it('should set the query string correctly', function () {
      scope.switchLang();
      expect(locationSearchArguments.lang).toBeDefined();
      expect(locationSearchArguments.lang).toBe('ml');
    });

  });

  describe('switchLang when language is Malayalam', function () {

    var locationSearchArguments;

    beforeEach(inject(function ($controller, $rootScope, _$location_) {
      scope = $rootScope.$new();
      $location = _$location_;

      spyOn($location, 'search').and.callFake(function (key, value) {
        if (!key) {
          return {};
        } else {
          locationSearchArguments[key] = value;
        }
      });

      locationSearchArguments = {};

      LanguageCtrl = $controller('LanguageCtrl', {
        $scope    : scope,
        $location : $location
      });
    }));

    it('should set the query string correctly', function () {
      scope.switchLang();
      expect(locationSearchArguments.lang).toBeDefined();
      expect(locationSearchArguments.lang).toBe('en');
    });

  });

});
