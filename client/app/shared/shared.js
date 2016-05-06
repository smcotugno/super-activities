import {activityHistory} from './activity-history';
import {theCurrentActivity} from './current-activity';
import angular from 'angular';

export const shared = angular.module('shared', [])
    .factory('activityHistory', activityHistory)
    .factory('theCurrentActivity', theCurrentActivity);
