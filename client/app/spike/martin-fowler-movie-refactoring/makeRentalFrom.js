import {REGULAR, NEW_RELEASE, CHILDRENS} from './movie-codes';

let makeRentalFrom = (movie, daysRented) => {
  function getFrequentRenterPoints() {
    let frequentRenterPoints = 1;
    // add bonus for a two day new release rental
    if ((movie.priceCode === NEW_RELEASE) && daysRented > 1) frequentRenterPoints++;
    return frequentRenterPoints;
  }

  function getCharge() {
    let thisAmount = 0;
    //noinspection Eslint
    switch (movie.priceCode) {
      case REGULAR:

        thisAmount += 2;
        if (daysRented > 2) {
          thisAmount += (daysRented - 2) * 1.5;
        }
        break;

      case NEW_RELEASE:

        thisAmount += daysRented * 3;
        break;

      case CHILDRENS:

        thisAmount += 1.5;
        if (daysRented > 3) {
          thisAmount += (daysRented - 3) * 1.5;
        }

        break;
      default:

    }
    return thisAmount;
  }


  return {
    getCharge: getCharge,
    getFrequentRenterPoints: getFrequentRenterPoints,
    get movie() { return movie; },
    get daysRented() { return daysRented; }
  };
};

export {makeRentalFrom};
