import {expect} from 'chai';

let primeFactorsOf = number => [];

describe('prime factors', () => {
  expect(primeFactorsOf(1)).to.deep.equal([]); //null —> constant transformation

  expect(primeFactorsOf(2)).to.deep.equal([2]);
});