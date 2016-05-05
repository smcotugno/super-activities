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

  describe('should have', () => {
    it('a url called /activity', () => {
      $state.go('activity');
      $scope.$apply();
      expect($state.current.url).to.equal('/activity');
    });

    it('a title called hello activity', () => {
      // console.log($(element).find('h1'));
      expect($(element).find('h1').text()).to.equal('hello activity');
    });

    it('indicator top right for current activity', () => {
      // console.log($(element).find('h1'));
      expect($(element).find('h1').text()).to.equal('hello activity');
    });

  });
});
