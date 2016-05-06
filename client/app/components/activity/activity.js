import angular from 'angular';
import {shared} from '../../shared/shared';
import {activityDirective} from './activity.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const activity = angular.module('activity', [
  ngAnimate,
  ngAria,
  ngMaterial,
  shared.name
])

.config( ($stateProvider) => {

  $stateProvider.
  state('activity', {
    url: '/activity',
    template: '<activity></activity>'
  });
})

.directive('activity', activityDirective);

