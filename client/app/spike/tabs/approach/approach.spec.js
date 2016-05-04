import 'script!jquery/dist/jquery';
import angular from 'angular';

import chai from 'chai';
let expect = chai.expect;

import {approach} from './approach';

describe('Approach page', () => {
  let element;
  let $ = window.$;

  let buildTemplate = () => {
    return angular.element('<approach></approach>');
  };

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(approach.name));

  beforeEach(window.inject(($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a title', () => {
      expect($(element).find('.approach-title').text()).to.equal('Approach');
    });

    describe('and a description which contains', () => {
      it('some lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'Integer turpis erat, porttitor vitae mi faucibus,');
      });

      it('some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'laoreet interdum tellus. Curabitur posuere molestie dictum. Morbi eget');
      });

      it('some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'congue risus, quis rhoncus quam. Suspendisse vitae hendrerit erat, at');
      });

      it('and some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'posuere mi.');
      });
    });

    describe('a region of blocks which have', () => {
      it('a Problem block', () => {
        expect($(element).find('.problem').text()).to.equal('ProblemStatement');
      });

      it('a Data Approach block', () => {
        expect($(element).find('.data').text()).to.equal('DataApproach');
      });

      it('an Impacted Areas block', () => {
        expect($(element).find('.impacted').text()).to.equal('ImpactedAreas');
      });

      it('a Disclosure Approach block', () => {
        expect($(element).find('.disclosure').text()).to.equal('DisclosureReports');
      });
    });
  });
});
