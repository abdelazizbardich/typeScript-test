// Get clean borowwed amount
export function getAmountBorrowed(carPrice:number,advance:number) : number{
    return +(carPrice - advance).toFixed(2)
}

// calculate clean montionality
export function getCleanMontionality(amountBorrowed:number,duration:number)  : number{
    return +(amountBorrowed / duration).toFixed(2)
}

// Get montionality interet
export function getMontionalinteret(montionality:number,amountBorrowed:number,interestRate:number) : number{
    return +((montionality + ((amountBorrowed * (interestRate/12))/100))).toFixed(2)
}