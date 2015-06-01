'use strict';

/**
 * @ngdoc filter
 * @name pureNonVegApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the pureNonVegApp.
 */
angular.module('pureNonVegApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
