class CSA{

    public totalPay:number
    public carPrice:number

    public advance:number
    public duration:number
    public interestRate:number
    public amountBorrowed:number
    public nonthlyPayment:number

    public getAmountBorrowed(){
        return (this.carPrice - this.advance).toFixed(2)
    }


    // calculate clean montionality
    public getMontionality() {
        return (+this.amountBorrowed / +this.duration)
    }

    // 
    public getMontionalinteret(){
        return  (
            (
                this.getMontionality() + 
                (
                    (+this.amountBorrowed * (+this.interestRate/12))/100)
                )
            )
            .toFixed(2)
    }
}
export default new CSA()