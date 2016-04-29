import {NEW_RELEASE} from './movie-codes';

let makeCustomerFrom = (name) => {

  let rentals = [];

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let total = 0;
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let each = rentals[i];

        // add frequent renter points
        frequentRenterPoints++;

        // add bonus for a two day new release rental
        if ((each.movie.priceCode === NEW_RELEASE) &&
            each.daysRented > 1) frequentRenterPoints++;

        //show figures for this rental
        statement += '\t' + each.movie.title + '\t' +
            each.getCharge().toString(10) + '\n';

        total += each.getCharge();
      }

      //add footer lines
      statement += 'Amount owed is ' + total.toString(10) + '\n';
      statement += 'You earned ' + String(frequentRenterPoints) +
          ' frequent renter points';

      return statement;
    }
  };
};

export {makeCustomerFrom};
