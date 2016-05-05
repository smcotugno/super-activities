import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {activity} from './activity';

describe('activity page', () => {
  let element;
  let $ = window.$;
  let $state;
  let $scope;

  let buildTemplate = () => {
    return angular.element('<activity></activity>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(activity.name));

  beforeEach(window.inject(($rootScope, $compile, _$state_) => {
    $state = _$state_;
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('the Activity page should have', () => {
    it('a url called /activity', () => {
      $state.go('activity');
      $scope.$apply();
      expect($state.current.url).to.equal('/activity');
    });

    it('a title called hello activity', () => {
      expect($(element).find('[rel=title]').text()).to.equal('Activity List');
    });

    it('activity name basketball', () => {
      $scope.$apply();
      let scope = element.isolateScope();
      expect(scope.activity).to.equal('Basketball');
    });

    it('basketball points', () => {
      $scope.$apply();
      let scope = element.isolateScope();
      expect(scope.points).to.equal(50);
    });

  });
});
