'use strict';

describe('Service: primaryPaletteColor', function () {

  // load the service's module
  beforeEach(module('cvProjectApp'));

  // instantiate service
  var primaryPaletteColor;
  beforeEach(inject(function (_primaryPaletteColor_) {
    primaryPaletteColor = _primaryPaletteColor_;
  }));

  it('should do something', function () {
    expect(!!primaryPaletteColor).toBe(true);
  });

});
