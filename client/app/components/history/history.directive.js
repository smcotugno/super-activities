import template from './history.html';
import {HistoryController as controller} from './history.controller';
import './history.styl';

export const historyDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
