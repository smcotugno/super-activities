import angular from 'angular';
import {homeDirective} from './home.directive.js';

import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';

export const home = angular.module('home', [
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
