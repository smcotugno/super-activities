import angular from 'angular';
import {activity} from './activity/activity';
import {details} from './details/details';
import {history} from './history/history';
import {home} from './home/home';
import {points} from './points/points';

export const components = angular.module('components', [
  activity.name,
  details.name,
  history.name,
  home.name,
  points.name
]);
