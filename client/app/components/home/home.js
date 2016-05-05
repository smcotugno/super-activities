import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {homeDirective} from './home.directive';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const home = angular.module('home', [
  uiRouter,
  ngAnimate,
  ngAria,
  ngMaterial
])

.config( ($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider
      .when('/', '/home')
      .otherwise('/home');

  $stateProvider.
  state('home', {
    url: '/home',
    template: '<home></home>'
  });
})

.directive('home', homeDirective);
