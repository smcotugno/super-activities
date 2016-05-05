import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';

import {history} from './history';

describe('history page', () => {
  let element;
  let $ = window.$;
  let $state;
  let $scope;

  let buildTemplate = () => {
    return angular.element('<history></history>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(history.name));

  beforeEach(window.inject(($rootScope, $compile, _$state_) => {
    $state = _$state_;
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a url called /history', () => {
      $state.go('history');
      $scope.$apply();
      expect($state.current.url).to.equal('/history');
    });

    it('a title called hello history', () => {
      expect($(element).find('h1').text()).to.equal('hello history');
    });

  });
});
