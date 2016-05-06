import {activityHistory} from './activity-history';
import angular from 'angular';

export const shared = angular.module('shared', [])
  .factory('activityHistory', activityHistory);

