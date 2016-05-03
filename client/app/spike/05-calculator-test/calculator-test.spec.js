import {describe, expect, it} from '../test-helper';

function calculator() {

  function addition(num1, num2) {
    return num1 + num2;
  }

  function subtraction(num1, num2) {
    return num1 - num2;
  }

  function multiplication(num1, num2) {
    return num1 * num2;
  }

  function division(dividend, divisor) {
      if (divisor === 0) throw new Error('Divide By Zero Error');
    return dividend / divisor;
  }

  return {
    addition: addition,
    subtraction: subtraction,
    multiplication: multiplication,
    division: division
  };
}

describe('calculator should', () => {
  it('proves the test infrastructure works', () => {
    expect(true).to.equal(true);
  });

  it('2 + 7 = 9', () => {
    // arrange...
    let machine = calculator();
    let num1 = 2;
    let num2 = 7;

    //act...
    let sum = machine.addition(num1, num2);

    //assert...
    expect(sum).to.equal(9);
  });

  it('3 + 5 != 9', () => {
    // arrange...
    let machine = calculator();
    let num1 = 3;
    let num2 = 5;

    //act...
    let sum = machine.addition(num1, num2);

    //assert...
    expect(sum).to.not.equal(9);
  });

  it('7 - 2 = 5', () => {
    // arrange...
    let machine = calculator();
    let num1 = 7;
    let num2 = 2;

    //act...
    let solution = machine.subtraction(num1, num2);

    //assert...
    expect(solution).to.equal(5);
  });

  it('9 - 3 != 5', () => {
    // arrange...
    let machine = calculator();
    let num1 = 9;
    let num2 = 3;

    //act...
    let solution = machine.subtraction(num1, num2);

    //assert...
    expect(solution).to.not.equal(5);
  });

  it('7 * 2 = 14', () => {
    // arrange...
    let machine = calculator();
    let num1 = 7;
    let num2 = 2;

    //act...
    let multiples = machine.multiplication(num1, num2);

    //assert...
    expect(multiples).to.equal(14);
  });

  it('3 * 5 != 14', () => {
    // arrange...
    let machine = calculator();
    let num1 = 3;
    let num2 = 5;

    //act...
    let multiples = machine.multiplication(num1, num2);

    //assert...
    expect(multiples).to.not.equal(14);
  });

  it('14 / 2 = 7', () => {
    // arrange...
    let machine = calculator();
    let dividend = 14;
    let divisor = 2;

    //act...
    let quotient = machine.division(dividend, divisor);

    //assert...
    expect(quotient).to.equal(7);
  });

  it('14 / 7 = 2', () => {
    // arrange...
    let machine = calculator();
    let dividend = 14;
    let divisor = 7;

    //act...
    let quotient = machine.division(dividend, divisor);

    //assert...
    expect(quotient).to.equal(2);
  });

  it('14 / 0, cause an exception', () => {
    // arrange...act...
    let func = function() {
      let machine = calculator();
      let dividend = 14;
      let divisor = 0;
      machine.division(dividend, divisor);
    };

    //assert...
    expect(func).to.throw(Error, 'Divide By Zero Error');
  });
});
