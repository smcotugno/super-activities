import './home.styl';
import template from './home.html';
import {HomeController as controller} from './home.controller';

export const homeDirective = () => {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
