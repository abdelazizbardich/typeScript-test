"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMontionalinteret = exports.getCleanMontionality = exports.getAmountBorrowed = void 0;
// Get clean borowwed amount
function getAmountBorrowed(carPrice, advance) {
    return +(carPrice - advance).toFixed(2);
}
exports.getAmountBorrowed = getAmountBorrowed;
// calculate clean montionality
function getCleanMontionality(amountBorrowed, duration) {
    return +(amountBorrowed / duration / 12).toFixed(2);
}
exports.getCleanMontionality = getCleanMontionality;
// Get montionality interet
function getMontionalinteret(montionality, amountBorrowed, interestRate) {
    return +((montionality + ((amountBorrowed * (interestRate / 12)) / 100))).toFixed(2);
}
exports.getMontionalinteret = getMontionalinteret;
