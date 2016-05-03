import {describe, expect, it} from '../test-helper';

function isPalindrome(phrase) {
  if (arguments.length === 0) throw new Error('Invalid Argument');

  return (typeof phrase === 'string') &&
      (phrase.trim().length > 0) &&
      (phrase === phrase.split('').reverse().join(''));
}

describe('palindrome should', () => {
  it('prove the test infrastructure works', () => {
    expect(true).to.equal(true);
  });

  it('show madam === true', () => {
    expect(isPalindrome('madam')).to.equal(true);
  });

  it('show dude === false', () => {
    expect(isPalindrome('dude')).to.equal(false);
  });

  it('show mom dad === false', () => {
    expect(isPalindrome('mom dad')).to.equal(false);
  });

  it('show "" === false', () => {
    expect(isPalindrome('')).to.equal(false);
  });

  it('show "    " === false', () => {
    expect(isPalindrome('    ')).to.equal(false);
  });

  it('show 0 === false', () => {
    expect(isPalindrome(0)).to.equal(false);
  });

  it('throw exception when no arguments passed', () => {
    let func = function () {
      isPalindrome();
    };
    expect(func).to.throw(Error, 'Invalid Argument');
  });
});
