<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-8 m-auto">
                    <h1 class="text-center my-5 h4">CREDIT SIMULATOR</h1>
                    <div class="m-5 mt-0 p-3 px-5 rounded-3 border border-warning shadow-lg bg-white">
                        <form>
                            <div class="row">
                                <div class="form-group col mb-3 px-2 w-100">
                                    <label class="text-dark small" for="car-price">Car price:</label>
                                    <input v-model="carPrice" type="number" :class="(+this.carPrice < +this.advance || +carPrice < 10000)?'is-invalid':''"  min="10000" id="car-price" class="form-control" placeholder="Car price...">
                                </div>
                                <div class="form-group col mb-3 px-2 w-100">
                                    <label class="text-dark small" for="advance">Advance</label>
                                    <input v-model="advance"  :class="(+this.carPrice < +this.advance)?'is-invalid':''" type="number" min="0" id="advance" class="form-control" placeholder="Payed advance...">
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col mb-3 px-2 w-100">
                                    <label class="text-dark small" for="duration">Duration:</label>
                                    <select v-model="duration" name="duration" id="duration" class="form-control">
                                    <option disabled selected>Duration...</option>
                                        <option v-for="d,index in durations" :key=index :value=d[0]>{{ d[1] }}</option>
                                    </select>
                                </div>
                                <div class="form-group col mb-3 px-2 w-100">
                                    <label class="text-dark small" for="interest-rate">Interest rate:</label>
                                    <input v-model="InterestRate"  min="6" max="12" type="range" id="interest-rate" class="form-range" placeholder="Interest rate...">
                                    <div class="d-flex justify-content-between">
                                        <span>6%</span>
                                        <span class="text-danger">{{ InterestRate }}%</span>
                                        <span>12%</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col mb-3 px-2 w-100">
                                    <label class="text-dark small" for="amount-borrowed">Amount borrowed:</label>
                                    <input :value="amountBorrowed" disabled readonly type="number" min="0" id="amount-borrowed" class="form-control" :class="(+this.carPrice < +this.advance)?'is-invalid':''"  placeholder="Amount borrowed...">
                                </div>
                                <div class="form-group col mb-3 px-2 w-100">
                                    <label class="text-dark small" for="monthly-payment">Monthly payment:</label>
                                    <input :value="nonthlyPayment" disabled readonly type="number" min="0" id="monthly-payment" class="form-control" placeholder="Monthly payment...">
                                </div>
                            </div>
                                <div class="form-group mb-3 w-100">
                                    <button id="go" class="btn btn-warning p-2 shadow w-100">Go</button>
                                </div>
                        </form>
                        <div v-if="errors.length>0" class="alert alert-danger p-2">
                                <li class="small" v-for="error,index in errors" :key=index>{{ error }}</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import CSA from '../../loginc'
export default {
    data() {
        return {
            totalPay:0,
            carPrice:10000,
            advance:0,
            InterestRate:6,
            amountBorrowed:0,
            nonthlyPayment:0,
            duration:12,
            durations:[
                [12,"12 Mois"],
                [24,"24 Mois"],
                [36,"36 Mois"],
                [48,"48 Mois"],
                [60,"60 Mois"],
                [72,"72 Mois"],
            ],
            errors:[]
        }
    },
    created(){
        CSA.amountBorrowed = this.amountBorrowed
        CSA.advance = this.advance
        this.amountBorrowed = CSA.getAmountBorrowed();
    },
    watch:{
        carPrice(){
            this.errors = []
            if(+this.carPrice < 10000){this.errors.push("Car price can't be less than 10000DH");return false}
            this.getAmountBorrowed()
        },
        advance(){
            this.getAmountBorrowed()
        },
        InterestRate(){
            this.getMontionality()
        }
    },
    methods:{
        getAmountBorrowed(){
            this.getMontionality()
            this.errors = []
            if(+this.carPrice < +this.advance){this.errors.push("You can't give an advance greater than the car price");return false}
            CSA.carPrice = +this.carPrice
            CSA.advance = +this.advance
            this.amountBorrowed = CSA.getAmountBorrowed()
        },
        getMontionality(){
            CSA.interestRate = this.InterestRate
            CSA.amountBorrowed = this.amountBorrowed
            CSA.duration = this.duration
            this.nonthlyPayment = (CSA.getMontionalinteret());
        }
    }
}
</script>