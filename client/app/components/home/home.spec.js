import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';

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

  describe.only('should have', () => {
    it('a url called /home', () => {
      $state.go('home');
      $scope.$apply();
      expect($state.current.url).to.equal('/home');
    });

    it('a title at the top: Play Outside', () => {
      expect($(element).find('h1').text()).to.equal('Play Outside');
    });

  });
});
