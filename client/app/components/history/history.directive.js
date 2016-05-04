import template from './history.html';

export const historyDirective = ()=> {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
