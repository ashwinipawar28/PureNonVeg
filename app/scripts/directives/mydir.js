'use strict';

/**
 * @ngdoc directive
 * @name pureNonVegApp.directive:mydir
 * @description
 * # mydir
 */
angular.module('pureNonVegApp')
  .directive('mydir', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the mydir directive');
      }
    };
  });
