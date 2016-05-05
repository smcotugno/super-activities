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
      // console.log($(element).find('h1'));
      expect($(element).find('h1').text()).to.equal('hello activity');
    });

    it('indicator top right for current activity', () => {
      // console.log($(element).find('h1'));
      expect($(element).find('h1').text()).to.equal('current activity');
    });

    it('list of canned activities', () => {
        // console.log($(element).find('h1'));
        expect($(element).find('h1').text()).to.equal('activity list');
      });

    it('current activity is greyed out', () => {
        // console.log($(element).find('h1'));
        expect($(element).find('h1').text()).to.equal('current activity');
      });
  });

  describe('on the page, the top right indicator should have', () => {
	  it('current activity', () => {
		  $state.go('activity');
		  // select activity
		  $scope.$apply();
		  expect($(element).find('h1').text()).to.equal('current activity');
	  });

	  it('clicking current activity should bring you to activity details', () => {
		  $state.go('current activity');
		  // console.log($(element).find('h1'));
		  $scope.$apply();
		  expect($(element).find('h1').text()).to.equal('activity name');
	  });	    
  });
  
  describe('on the page, list of canned activities should have', () => {
	  it('activity name', () => {
		  $state.go('activity');
		  $scope.$apply();
		  expect($(element).find('h1').text()).to.equal('activity name');
	  });
	  
	  it('point value', () => {
		  expect($(element).find('h1').text()).to.equal('point value');
	  });	
	  
	  it('clicking activity in list will bring you to activity details', () => {
		  $state.go('activity name');	    	  
		  // console.log($(element).find('h1'));
		  $scope.$apply();
		  expect($(element).find('h1').text()).to.equal('activity name');
	  });  	    
  });
});
