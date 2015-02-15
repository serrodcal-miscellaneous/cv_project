'use strict';

describe('Service: ConfigProvider', function () {

  // load the service's module
  beforeEach(module('cvProjectApp'));

  // instantiate service
  var ConfigProvider;
  beforeEach(inject(function (_ConfigProvider_) {
    ConfigProvider = _ConfigProvider_;
  }));

  it('should do something', function () {
    expect(!!ConfigProvider).toBe(true);
  });

});
