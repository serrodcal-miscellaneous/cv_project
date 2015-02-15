'use strict';

describe('Service: HomeDataProvider', function () {

  // load the service's module
  beforeEach(module('cvProjectApp'));

  // instantiate service
  var HomeDataProvider;
  beforeEach(inject(function (_HomeDataProvider_) {
    HomeDataProvider = _HomeDataProvider_;
  }));

  it('should do something', function () {
    expect(!!HomeDataProvider).toBe(true);
  });

});
