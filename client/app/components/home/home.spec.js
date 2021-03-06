import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';
import td from 'testdouble';

import {home} from './home';

describe('home page', () => {
  let element;
  let $ = window.$;
  let $state;
  let $scope;

  let buildTemplate = () => {
    return angular.element('<home></home>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(home.name));

  beforeEach(window.inject(($rootScope, $compile, _$state_) => {
    $state = _$state_;
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a url called /home', () => {
      $state.go('home');
      $scope.$apply();
      expect($state.current.url).to.equal('/home');
    });

    it('a title at the top: Super Activities', () => {
      expect($(element).find('h1').text()).to.equal('Super Activities');
    });

    it('a button labeled "Activities"', () => {
      expect($(element).find('[rel=activity-button]').text()).to.equal('Activities');
    });

    it('a button labeled "Points"', () => {
      expect($(element).find('[rel=points-button]').text()).to.equal('Points');
    });

    it('a button labeled "Activity History"', () => {
      expect($(element).find('[rel=log-button]').text()).to.equal('Activity History');
    });
  });

  describe('clicking ', () => {
    it('"Activities" button goes to: the Activities Page', () => {
      td.replace($state, 'go');
      $(element).find('[rel=activity-button]').click();
      $scope.$apply();
      td.verify($state.go('activity'));
      td.reset();
    });

    it('"Points" button goes to: the Points Page', () => {
      td.replace($state, 'go');
      $(element).find('[rel=points-button]').click();
      $scope.$apply();
      td.verify($state.go('points'));
      td.reset();
    });

    it('"Activity Log" button goes to: the Activity Log Page', () => {
      td.replace($state, 'go');
      $(element).find('[rel=log-button]').click();
      $scope.$apply();
      td.verify($state.go('history'));
      td.reset();
    });
  });
});
