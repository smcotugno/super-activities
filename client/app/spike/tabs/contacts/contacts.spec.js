import 'script!jquery/dist/jquery';
import angular from 'angular';

import chai from 'chai';
let expect = chai.expect;

import {contacts} from './contacts';

describe('Contacts page', () => {
  let buildTemplate = () => {
    return angular.element('<contacts></contacts>');
  };

  let $ = window.$;
  let element;

  beforeEach(window.module('ui.router'));
  beforeEach(window.module(contacts.name));

  beforeEach(window.inject( ($rootScope, $compile) => {
    let $scope = $rootScope.$new();
    element = $compile(buildTemplate())($scope);
    $scope.$digest();
  }));

  describe('should have', () => {
    it('a title', () => {
      expect($(element).find('.contacts-title').text()).to.equal('Contacts');
    });

    describe('a layout', () => {
      it('to the top left', () => {
        expect($(element).attr('layout-align')).to.equal('start');
      });
    });

    describe('and a description which contains', () => {
      it('some lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'Integer turpis erat, porttitor vitae mi faucibus, laoreet interdum');
      });

      it('some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'tellus. Curabitur posuere molestie dictum. Morbi eget congue risus, quis');
      });

      it('some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'rhoncus quam. Suspendisse vitae hendrerit erat, at posuere mi. Cras eu');
      });

      it('some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'fermentum nunc. Sed id ante eu orci commodo volutpat non ac est.');
      });

      it('some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain(
            'Praesent ligula diam, congue eu enim scelerisque, finibus commodo');
      });

      it('and some more lorem ipsumm', () => {
        expect($(element).find('.description').text()).to.contain('lectus');
      });
    });
  });
});
