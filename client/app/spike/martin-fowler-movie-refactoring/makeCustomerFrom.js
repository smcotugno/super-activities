let makeCustomerFrom = (name) => {
  function getTotalChargeFor(rentals) {
    let total = 0;
    for (let i = 0; i < rentals.length; i++) {
      let each = rentals[i];

      total += each.getCharge();
    }
    return total;

  }

  let rentals = [];

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let frequentRenterPoints = 0;
      let statement = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let each = rentals[i];
        frequentRenterPoints += each.getFrequentRenterPoints();

        //show figures for this rental
        statement += '\t' + each.movie.title + '\t' +
            each.getCharge().toString(10) + '\n';
      }

      //add footer lines
      statement += 'Amount owed is ' + getTotalChargeFor(rentals).toString(10) + '\n';
      statement += 'You earned ' + String(frequentRenterPoints) +
          ' frequent renter points';

      return statement;
    }
  };
};

export {makeCustomerFrom};
