import template from './points.html';
import {PointsController as controller} from './points.controller.js';

export const pointsDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
