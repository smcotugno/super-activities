import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';
import td from 'testdouble';

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

    it('a title at the top: Activity History', () => {
      expect($(element).find('[rel=title]').text()).to.equal('Activity History');
    });

    it('top right reads "Total Points: "', () => {
      expect($(element).find('[rel=total-points-title]').text()).to.equal('Total Points: ');
    });

    it('a button labeled "Home"', () => {
      expect($(element).find('[rel=home-button]').text()).to.equal('Home');
    });

    it('a column heading with Date/Time Completed', () => {
      expect($(element).find('[rel=date]').text()).to.equal('Date/Time Completed');
    });

    it('a column heading with Activity', () => {
      expect($(element).find('[rel=activity]').text()).to.equal('Activity');
    });

    it('a column heading with Points', () => {
      expect($(element).find('[rel=points]').text()).to.equal('Points');
    });

    it('the point amount after "Total Points: "', () => {
      //expect($(element).find('[rel=total-points]').text()).to.equal('75');
    });
  });

  describe('clicking', () => {
    it('"Home" button goes to: the Home Page', () => {
      td.replace($state, 'go');
      $(element).find('[rel=home-button]').click();
      $scope.$apply();
      td.verify($state.go('home'));
      td.reset();
    });
  });
});
