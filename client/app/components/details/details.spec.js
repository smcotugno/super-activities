import {describe, beforeEach, expect, it} from '../test-helper';
import 'script!jquery/dist/jquery';
import angular from 'angular';
import td from 'testdouble';

import {details} from './details';

describe('details page', () => {
  let element;
  let $ = window.$;
  let $state;
  let $scope;

  let buildTemplate = () => {
    return angular.element('<details></details>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(details.name));

  beforeEach(window.inject(($rootScope, $compile, _$state_) => {
    $state = _$state_;
    $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a url called /details', () => {
      $state.go('details');
      $scope.$apply();
      expect($state.current.url).to.equal('/details');
    });

    it('a title: Activity Name', () => {
      expect($(element).find('h1').text()).to.equal('Activity name');
    });

    it('Some text: the activity description', () => {
      expect($(element).find('h2').text()).to.equal('Description');
    });


  it('Some text: the point value', () => {
    expect($(element).find('h4').text()).to.equal('Point Value');
  });

    it('Button: Start', () => {
    expect($(element).find('[rel = start]').text()).to.equal('Start');
  });

    /*describe('Start button should', () => {
       it('Mark the activity as in-progress', () =>{
         let someActivity = {
           inProgress: false
         };
         //click Start button: J doesn't know this code.

         //after button click: This should happen
          expect(someActivity.inProgress).to.equal(true);
       });
    }); */

    it('Button: Done', () => {
    expect($(element).find('[rel = done]').text()).to.equal('Done');
  });

    describe('the done button should', () => {
      it('go points', () => {
        td.replace($state, 'go');
        $(element).find('[rel = done]').click();
        $scope.$apply();
        td.verify($state.go('points'));
        td.reset();
      });
    });

    it('Button: Cancel', () => {
    expect($(element).find('[rel = cancel]').text()).to.equal('Cancel');
  });

    describe('cancel button should', () => {
      it('go home', () => {
        td.replace($state, 'go');
        $(element).find('[rel = cancel]').click();
        $scope.$apply();
        td.verify($state.go('home'));
        td.reset();
      });
    });

});
});
