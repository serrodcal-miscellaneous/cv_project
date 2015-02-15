'use strict';

describe('Service: ProjectsDataProvider', function () {

  // load the service's module
  beforeEach(module('cvProjectApp'));

  // instantiate service
  var ProjectsDataProvider;
  beforeEach(inject(function (_ProjectsDataProvider_) {
    ProjectsDataProvider = _ProjectsDataProvider_;
  }));

  it('should do something', function () {
    expect(!!ProjectsDataProvider).toBe(true);
  });

});
