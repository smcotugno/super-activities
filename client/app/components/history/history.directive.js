import template from './history.html';
import {HistoryController as controller} from './history.controller';

export const historyDirective = ()=> {
  return {
    template,
    controller,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
