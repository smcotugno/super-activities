import angular from 'angular';
import {shared} from '../../shared/shared';
import {historyDirective} from './history.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const history = angular.module('history', [
  ngAnimate,
  ngAria,
  ngMaterial,
  shared.name
])

.config( ($stateProvider) => {

  $stateProvider.
  state('history', {
    url: '/history',
    template: '<history></history>'
  });
})

.directive('history', historyDirective);
