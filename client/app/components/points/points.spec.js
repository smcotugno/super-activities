import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';
import td from 'testdouble';

import {points} from './points';

describe('points page', () => {
  let element;
  let $ = window.$;
  let $state;
  let $scope;

  let buildTemplate = () => {
    return angular.element('<points></points>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(points.name));

  beforeEach(window.inject(($rootScope, $compile, _$state_) => {
    $state = _$state_;
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a url called /points', () => {
      $state.go('points');
      $scope.$apply();
      expect($state.current.url).to.equal('/points');
    });

    it('test home button to go to home', () => {
      td.replace($state, 'go');
      $(element).find('[rel=home-button]').click();
      $scope.$apply();
      td.verify($state.go('home'));
      td.reset();
    });

    it('test for current points', () => {
      expect($(element).find('[rel=current-points]').text()).to.equal('Current Points');
    });

      it('test for last activity', () => {
      expect($(element).find('[rel=last-activity]').text()).to.equal('Last Activity:  ');
    });

  });
});
