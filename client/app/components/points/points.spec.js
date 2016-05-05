import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';

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

    it('a title called hello points', () => {
      console.log($(element).find('h1'));
      expect($(element).find('h1').text()).to.equal('hello points');
    });

  });
});
