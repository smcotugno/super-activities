function fahrenheit2celsius() {
  return 0;
}

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
});
