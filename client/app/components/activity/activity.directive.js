import template from './activity.html';
import {ActivityController as controller} from './activity.controller.js';

export const activityDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
