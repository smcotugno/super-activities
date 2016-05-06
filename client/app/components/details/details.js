import angular from 'angular';
import {shared} from '../../shared/shared';
import {detailsDirective} from './details.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const details = angular.module('details', [
  ngAnimate,
  ngAria,
  ngMaterial,

  shared.name
])

.config( ($stateProvider) => {

  $stateProvider.
  state('details', {
    url: '/details',
    template: '<details></details>'
  });
})

.directive('details', detailsDirective);
