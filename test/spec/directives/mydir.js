'use strict';

describe('Directive: mydir', function () {

  // load the directive's module
  beforeEach(module('pureNonVegApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mydir></mydir>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mydir directive');
  }));
});
