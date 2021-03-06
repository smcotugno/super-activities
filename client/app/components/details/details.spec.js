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

  let startButton;
  let cancelButton;
  let doneButton;

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
    startButton = $(element).find('[rel = start]');
    cancelButton = $(element).find('[rel = cancel]');
    doneButton = $(element).find('[rel = done]');

  }));

  function resetButtons() {
    expect(cancelButton.is(':disabled')).to.equal(true);
    expect(doneButton.is(':disabled')).to.equal(true);
    expect(startButton.is(':disabled')).to.equal(false);
  }

  describe('should have', () => {
    it('a url called /details', () => {
      $state.go('details');
      $scope.$apply();
      expect($state.current.url).to.equal('/details');
    });

    it('an empty default title', () => {
      const title = $(element).find('h1');
      expect(title.text()).to.equal('');
    });

    it('an empty default description', () => {
      const description = $(element).find('h2');
      expect(description.text()).to.equal('');
    });


    it('an empty default for points', () => {
      const points = $(element).find('h4');
      expect(points.text()).to.equal('0');
    });

    it('a Start button', () => {
      expect(startButton.text()).to.include('Start');
    });

    it('a Done button', () => {
      expect(doneButton.text()).to.include('Done');
    });

    it('a Cancel button', () => {
      expect(cancelButton.text()).to.include('Cancel');
    });

    describe('The Start button should', () => {
      it('enable other buttons when clicked', () => {
        expect(cancelButton.is(':disabled')).to.equal(true);
        expect(doneButton.is(':disabled')).to.equal(true);

        td.replace($state, 'go');
        startButton.click();

        expect(cancelButton.is(':disabled')).to.equal(false);
        expect(doneButton.is(':disabled')).to.equal(false);
        expect(startButton.is(':disabled')).to.equal(true);
      });
    });

    describe('the Done button should', () => {
      it('go to the points page', () => {
        td.replace($state, 'go');

        startButton.click();
        doneButton.click();
        $scope.$apply();

        td.verify($state.go('points'));
        td.reset();
      });

      it('reset all buttons', () => {
        td.replace($state, 'go');

        startButton.click();
        doneButton.click();
        $scope.$apply();

        resetButtons();
      });
    });

    describe('Cancel button should', () => {
      it('go to home page', () => {
        td.replace($state, 'go');

        startButton.click();
        cancelButton.click();
        $scope.$apply();

        td.verify($state.go('home'));
        td.reset();
      });

      it('Enable start button', () => {
        td.replace($state, 'go');

        startButton.click();
        cancelButton.click();
        $scope.$apply();
        resetButtons();
      });
    });

    describe('set the state of the current activity', () => {
      it('to active when the start button is clicked', () => {
        // arrange ...
        let scope = element.isolateScope();
        expect(scope.currentActivity.isActive()).to.equal(false);

        // act ...
        startButton.click();
        $scope.$apply();

        // assert ...
        expect(scope.currentActivity.isActive()).to.equal(true);
      });

      it('to active when the start button is clicked', () => {
        // arrange ...
        let scope = element.isolateScope();
        td.replace($state, 'go');
        startButton.click();
        doneButton.click();
        $scope.$apply();

        expect(scope.currentActivity.isActive()).to.equal(false);
      });

      it('to active when the start button is clicked', () => {
        // arrange ...
        let scope = element.isolateScope();
        td.replace($state, 'go');
        startButton.click();
        cancelButton.click();
        $scope.$apply();

        expect(scope.currentActivity.isActive()).to.equal(false);
      });
    });
  });
});
