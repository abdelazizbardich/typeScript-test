class kfcs{
    // Get clean borowwed amount
    getAmountBorrowed(carPrice:number,advance:number) : number{
        return +(carPrice - advance).toFixed(2)
    }
    // calculate clean montionality
    getCleanMontionality(amountBorrowed:number,duration:number)  : number{
        return +(amountBorrowed / duration/12).toFixed(2)
    }
    // Get montionality interet
    getMontionalinteret(montionality:number,amountBorrowed:number,interestRate:number) : number{
        return +((montionality + ((amountBorrowed * (interestRate/12))/100))).toFixed(2)
    }
}

export default new kfcs()