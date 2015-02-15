'use strict';

describe('Service: ConfigProviderValue', function () {

  // load the service's module
  beforeEach(module('cvProjectApp'));

  // instantiate service
  var ConfigProviderValue;
  beforeEach(inject(function (_ConfigProviderValue_) {
    ConfigProviderValue = _ConfigProviderValue_;
  }));

  it('should do something', function () {
    expect(!!ConfigProviderValue).toBe(true);
  });

});
