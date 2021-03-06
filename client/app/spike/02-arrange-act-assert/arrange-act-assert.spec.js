import {describe, expect, it} from '../test-helper';
import {fahrenheit2celsius} from './fahrenheit2celsius';

describe('fahrenheit converter should', () => {
  it('prove the test infrastructure works', () => {
    expect(true).to.equal(true);
  });

  it('32˚ fahrenheit === 0˚ celsius', () => {
    // arrange...
    let fahrenheit = 32;

    // act ...
    let celsius = fahrenheit2celsius(fahrenheit);

    // assert ...
    expect(celsius).to.equal(0);
  });

  it('50° fahrenheit === 10° celsius', () => {
    // arrange...
    let fahrenheit = 50;

    // act ...
    let celsius = fahrenheit2celsius(fahrenheit);

    // assert ...
    expect(celsius).to.equal(10);
  });

  it('212˚ fahrenheit === 100˚ celsius', () => {
    // arrange...
    let fahrenheit = 212;

    // act ...
    let celsius = fahrenheit2celsius(fahrenheit);

    // assert ...
    expect(celsius).to.equal(100);
  });

  it('68˚ fahrenheit === 20˚ celsius', () => {
    // arrange...
    let fahrenheit = 68;

    // act ...
    let celsius = fahrenheit2celsius(fahrenheit);

    // assert ...
    expect(celsius).to.equal(20);
  });
});
