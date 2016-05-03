import {describe, expect, it} from '../test-helper';

function makeStack() {
  function isEmpty() {
    return true;
  }

  return {
    isEmpty: isEmpty
  };
}

describe('stack  test', () => {
  it('prove the test infrastructure works', () => {
    expect(true).to.equal(true);
  });

  it('empty stack', () => {
    let stack = makeStack();
    expect(stack.isEmpty()).to.equal(true);
  });

});
