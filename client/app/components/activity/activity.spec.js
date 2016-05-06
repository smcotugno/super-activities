import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';
import td from 'testdouble';

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

    it('a title called activity list', () => {
      expect($(element).find('[rel=title]').text()).to.equal('Activity List');
    });

    it('a single activity called basketball', () => {
      $scope.$apply();
      let scope = element.isolateScope();
      expect(scope.activity).to.equal('Basketball');
    });

    it('points for basketball activity', () => {
      $scope.$apply();
      let scope = element.isolateScope();
      expect(scope.points).to.equal(50);
    });

    it('go to details page from an activity in the list', () => {
      td.replace($state, 'go');
      $(element).find('[rel=details-button]').click();
      $scope.$apply();
      td.verify($state.go('details'));
      td.reset();
    });

    it('go to current activity details page ', () => {
      td.replace($state, 'go');
      $(element).find('[rel=current-button]').click();
      $scope.$apply();
      td.verify($state.go('details'));
      td.reset();
    });

    it('go to points page', () => {
      td.replace($state, 'go');
      $(element).find('[rel=points-button]').click();
      $scope.$apply();
      td.verify($state.go('points'));
      td.reset();
    });

    it('go to home page', () => {
      td.replace($state, 'go');
      $(element).find('[rel=home-button]').click();
      $scope.$apply();
      td.verify($state.go('home'));
      td.reset();
    });

  });
});
