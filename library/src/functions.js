"use strict";
exports.__esModule = true;
var kfcs = /** @class */ (function () {
    function kfcs() {
    }
    // Get clean borowwed amount
    kfcs.prototype.getAmountBorrowed = function (carPrice, advance) {
        return +(carPrice - advance).toFixed(2);
    };
    // calculate clean montionality
    kfcs.prototype.getCleanMontionality = function (amountBorrowed, duration) {
        return +(amountBorrowed / duration / 12).toFixed(2);
    };
    // Get montionality interet
    kfcs.prototype.getMontionalinteret = function (montionality, amountBorrowed, interestRate) {
        return +((montionality + ((amountBorrowed * (interestRate / 12)) / 100))).toFixed(2);
    };
    return kfcs;
}());
exports["default"] = new kfcs();
