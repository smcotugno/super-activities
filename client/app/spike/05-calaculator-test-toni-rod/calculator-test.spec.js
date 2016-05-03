import {describe, expect, it} from '../test-helper';

var calculator = {};
calculator.add = function (num1, num2) {
  return num1 + num2;
};
  calculator.sub = function (num1, num2) {
    return num1 - num2;
};

calculator.mul = function (num1, num2) {
  return num1 * num2;
};

calculator.div = function (num1, num2) {
  if (num2 === 0) {
    return 'undefined';
  }
  return num1 / num2;
};


describe('calculator test', () => {
  it('proves the test infrastructure works', () => {
    expect(true).to.equal(true);
  });

  it('10 + 5 = 15', () => {
    expect(calculator.add(10, 5)).to.equal(15);
  });

  it('15 + 15 = 30', () => {
    expect(calculator.add(15, 15)).to.equal(30);
  });

  it('10 - 5 = 5', () => {
    expect(calculator.sub(10, 5)).to.equal(5);
  });

  it('10 * 5 = 50', () => {
    expect(calculator.mul(10, 5)).to.equal(50);
  });

  it('10 / 5 = 3', () => {
    expect(calculator.div(10, 5)).to.equal(2);
  });

  it('10 / 0 = undefined', () => {
    expect(calculator.div(10, 0)).to.equal('undefined');
  });

});

