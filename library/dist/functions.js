class kfcs{

    // Get clean borowwed amount
    getAmountBorrowed(carPrice, advance) {
        return +(carPrice - advance).toFixed(2);
    }
    // calculate clean montionality
    getCleanMontionality(amountBorrowed, duration) {
        return +(amountBorrowed / duration / 12).toFixed(2);
    }
    // Get montionality interet
    getMontionalinteret(montionality, amountBorrowed, interestRate) {
        return +((montionality + ((amountBorrowed * (interestRate / 12)) / 100))).toFixed(2);
    }
}

export default new kfcs()