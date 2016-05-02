import {describe, expect, it} from '../test-helper';

function isPalindrome() {
   return true;
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
});
