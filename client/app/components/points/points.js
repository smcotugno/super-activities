import angular from 'angular';
import {pointsDirective} from './points.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const points = angular.module('points', [
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider) => {

  $stateProvider.
  state('points', {
    url: '/points',
    template: '<points></points>'
  });
})

.directive('points', pointsDirective);
