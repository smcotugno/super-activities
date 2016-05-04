import 'script!jquery/dist/jquery';
import angular from 'angular';

import chai from 'chai';
let expect = chai.expect;

import {home} from './home';

describe('Home page', () => {
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<home></home>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(home.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a first section title', () => {
      expect($(element).find('.home-title1').text()).to.equal(
          'Angularjs.1.x Reference App');
    });

    it('a second section title', () => {
      expect($(element).find('.home-title2').text()).to.equal(
          'Angular 2 to follow shortly');
    });

    describe('a layout', () => {
      it('to the top left', () => {
        expect($(element).attr('layout-align')).to.equal('start');
      });
    });

    describe('a first section which contains', () => {
      describe('a first bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'Eros odio sit, augue magnis porttitor cras urna mauris odio');
        });

        it('and more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'elementum parturient pulvinar porttitor non dignissim');
        });
      });

      describe('a second bullet which contains ', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'Arcu ridiculus nisi hac, diam! Ut scelerisque, placerat, et!');
        });

        it('and more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'Tortor tempor! Habitasse dictumst amet arcu sit a ut.');
        });
      });

      describe('and a third bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'pulvinar etiam scelerisque nec, tincidunt in mus dictumst, placerat nec facilisis!');
        });

        it('more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'Tortor aenean massa mus. In duis penatibus, lacus placerat augue');
        });

        it('and yet more lorem ipsum', () => {
          expect($(element).find('.home-section1').text()).to.contain(
              'pid porttitor habitasse rhoncus sagittis platea vel, rhoncus rhoncus');
        });
      });
    });

    describe('and a second section which contains', () => {
      describe('a first bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'pid porttitor habitasse rhoncus sagittis platea vel, rhoncus rhoncus');
        });

        it('and more lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'rhoncus rhoncus');
        });
      });

      describe('a second bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'Dis et lacus nunc tempor.');
        });
      });

      describe('a third bullet which contains', () => {
        it('lorem ipsum', () => {
          expect($(element).find('.home-section2').text()).to.contain(
              'Placeholder for the mvp vision statement');
        });
      });
    });
  });
});
