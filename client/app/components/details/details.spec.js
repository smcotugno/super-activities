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
      expect($(element).find('h1').text()).to.equal('Basketball');
    });

    it('Some text: the activity description', () => {
      expect($(element).find('h2').text()).to.equal('Ball, Hoop, Court');
    });


  it('Some text: the point value', () => {
    expect($(element).find('h4').text()).to.equal('40');
  });

    it('Button: Start', () => {
    expect($(element).find('[rel = start]').text()).to.equal('Start');
  });

    describe('Start button should', () => {
       it('Mark the activity as in-progress', () =>{
         //We need: More functionality on Start: Marks the activity from list
         //as an active ability.
         //Might be able to do this by meddling with the isCurrent flag in the
         //controller - J
         $(element).find('[rel=start]').click();
         $scope.$apply();
         let scope = element.isolateScope();

         //TODO: Figure this out
         //check that our activity is active.
         console.log(scope);
         expect(scope.currentActivity.isCurrent).to.equal(true);
       });

      it('enable other buttons', () =>{
        td.replace($state, 'go');
        $(element).find('[rel=start]').click();

        expect($(element).find('[rel=cancel]').is(':disabled')).to.equal(false);
       });
    });

    it('Button: Done', () => {
    expect($(element).find('[rel = done]').text()).to.equal('Done');
  });

    describe('the done button should', () => {
      it('go points', () => {
        td.replace($state, 'go');
        $(element).find('[rel=start]').click();
        $(element).find('[rel = done]').click();
        $scope.$apply();
        td.verify($state.go('points'));
        td.reset();
      });

      it('log the activity', () => {
         //We need: An active activity, and some way to add that to the log
        //Probably an array.push or something.
        //Add stuff to Done button for that.
        //TODO: Figure this out
        //Check the log for that active activity after doing button presses
        // for "Start" and "Done"
        //expect(true).to.equal(false);
      });

      it('Clear current activity', () => {
        //More functionality to the "Done" and "Cancel" buttons to clear
        //the active activity.
        td.replace($state, 'go');
        $(element).find('[rel=start]').click();
        $(element).find('[rel=done]').click();
        $scope.$apply();

        let scope = element.isolateScope();
        //TODO: Figure this out
        //check that the active activity is blank or null or whatever.
        expect(scope.currentActivity.isCurrent).to.equal(false);
      });

      it('Disable cancel and done buttons', () => {
        //When we don't have an active activity, these buttons shouldn't work, right?
        td.replace($state, 'go');
        $(element).find('[rel = start]').click();
        $(element).find('[rel = done]').click();

        //TODO: Figure this out
        //Check that the buttons don't work...? This might not be needed.
        //Might need to re-think this test - J
        expect($(element).find('[rel = done]').is(':disabled')).to.equal(true);
      });

      it('enable restart', () => {
        //When we don't have an active activity, Start should work
        td.replace($state, 'go');
        $(element).find('[rel = start]').click();
        $(element).find('[rel = done]').click();

        //TODO: Figure this out
        //Might need to re-think this test - J
        expect($(element).find('[rel = start]').is(':disabled')).to.equal(false);
      });
    });

    it('Button: Cancel', () => {
    expect($(element).find('[rel = cancel]').text()).to.equal('Cancel');
  });

    describe('cancel button should', () => {
      it('go home', () => {
        td.replace($state, 'go');
        $(element).find('[rel=start]') .click();
        $(element).find('[rel = cancel]').click();
        $scope.$apply();
        td.verify($state.go('home'));
        td.reset();
      });

      it('Enable start button', () => {
        //if we don't have an active activity, the start button should be active.
        //Maybe integrate this test with other similar tests?
        //Buttons currently work with a straight boolean - Probably re-work into
        //referencing the active activity

        td.replace($state, 'go');
        $(element).find('[rel = start]').click();
        $(element).find('[rel = cancel]').click();

        //TODO: Figure this out
        //Check button status
        expect($(element).find('[rel = start]').is(':disabled')).to.equal(false);
      });

      it('disable done and cancel button', () => {
        //If we don't have an active activity, these buttons shouldn't be active.
         td.replace($state, 'go');
        $(element).find('[rel = start]').click();
        $(element).find('[rel = cancel]').click();

        //TODO: Figure this out
        expect($(element).find('[rel = cancel]').is(':disabled')).to.equal(true);
      });

      it('Clear current activity', () => {
         //Cancelling the active activity should clear it.
        //TODO: Figure this out
        //Check active activity status
        //expect(true).to.equal(false);
      });
    });

});
});
