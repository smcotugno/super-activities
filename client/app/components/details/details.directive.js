import template from './details.html';
import {DetailsController as controller} from './details.controller.js';

export const detailsDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
