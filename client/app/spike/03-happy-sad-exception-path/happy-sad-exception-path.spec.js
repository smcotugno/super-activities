import {describe, expect, it} from '../test-helper';

function isPalindrome(phrase) {
  return phrase === phrase.split('').reverse().join('');
}
describe('palindrome should', () => {
  it('prove the test infrastructure works', () => {
    expect(true).to.equal(true);
  });

  it('madam === true', () => {
    // arrange ...
    const phrase = 'madam';

    // act ...
    let result = isPalindrome(phrase);

    // assert ...
    expect(result).to.equal(true);
  });

  it('dude === false', () => {
    // arrange ...
    const phrase = 'dude';

    // act ...
    let result = isPalindrome(phrase);

    // assert ...
    expect(result).to.equal(false);
  });

  it('level === true', () => {
    // arrange ...
    const phrase = 'level';

    // act ...
    let result = isPalindrome(phrase);

    // assert ...
    expect(result).to.equal(true);
  });

  it('civic === true', () => {
    // arrange ...
    const phrase = 'civic';

    // act ...
    let result = isPalindrome(phrase);

    // assert ...
    expect(result).to.equal(true);
  });

  it('civic === true', () => {
    // arrange ...
    const phrase = 'civic';

    // act ...
    let result = isPalindrome(phrase);

    // assert ...
    expect(result).to.equal(true);
  });

  it('mom mom === true', () => {
    // arrange ...
    const phrase = 'mom mom';

    // act ...
    let result = isPalindrome(phrase);

    // assert ...
    expect(result).to.equal(true);
  });

  it('mom dad === false', () => {
    // arrange ...
    const phrase = 'mom dad';

    // act ...
    let result = isPalindrome(phrase);

    // assert ...
    expect(result).to.equal(false);
  });
});
