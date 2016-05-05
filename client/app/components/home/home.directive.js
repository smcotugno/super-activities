import template from './home.html';

export const homeDirective = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {}
  };
};
