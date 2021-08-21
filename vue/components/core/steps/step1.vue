<template>
    <div class="m-5 mt-0 p-3 px-5 rounded-3 border border-warning shadow-lg bg-white">
        <form @submit.prevent="">
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
                    <input v-model="interestRate"  min="6" max="12" type="range" id="interest-rate" class="form-range" placeholder="Interest rate...">
                    <div class="d-flex justify-content-between">
                        <span>6%</span>
                        <span class="text-danger">{{ interestRate }}%</span>
                        <span>12%</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="amount-borrowed">Amount borrowed:</label>
                    <input :value="carPrice - advance" disabled readonly type="number" min="0" id="amount-borrowed" class="form-control" :class="(+this.carPrice < +this.advance)?'is-invalid':''"  placeholder="Amount borrowed...">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="monthly-payment">Monthly payment:</label>
                    <input :value="monthlyPayment" disabled readonly type="number" min="0" id="monthly-payment" class="form-control" placeholder="Monthly payment...">
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-auto form-group mb-3">
                    <button id="go" type="submit" disabled @click="prev" class="btn btn-dark p-2 shadow w-100">Prev</button>
                </div>
                <div class="col-auto form-group mb-3">
                    <button id="go" @click="next" type="submit" class="btn btn-warning p-2 shadow w-100">Next</button>
                </div>
            </div>
        </form>
        <div v-if="errors.length>0" class="alert alert-danger p-2">
                <li class="small" v-for="error,index in errors" :key=index>{{ error }}</li>
        </div>
    </div>
</template>
<style scoped>

</style>
<script>
import {getCleanMontionality,getMontionalinteret} from "../../../../library/dist/index"
export default {
    data() {
        return {
            totalPay:0,
            carPrice:10000,
            advance:0,
            interestRate:6,
            amountBorrowed:0,
            monthlyPayment:0,
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
    props:['save'],
    watch:{
        $data: {
            handler: function() {
                this.amountBorrowed = this.carPrice - this.advance
                this.monthlyPayment = this.getMontionality()
            },
            deep: true
        }
    },
    methods:{
        getMontionality(){
            let cleanMontionality = getCleanMontionality(this.amountBorrowed,this.duration)
            return getMontionalinteret(cleanMontionality,this.amountBorrowed,this.interestRate)
        },
        next(){
            this.$emit(
                'next',{
                    'prev':'',
                    'step':'step1',
                    'next':'step2',
                    'data':{
                        'totalPay':this.totalPay,
                        'carPrice':this.carPrice,
                        'advance':this.advance,
                        'interestRate':this.interestRate,
                        'amountBorrowed':this.amountBorrowed,
                        'monthlyPayment':this.monthlyPayment,
                        'duration':this.duration,
                    }
                }
            )
        },
        prev(){
            this.$emit('prev',{
                'prev':'step1',
                'step':'step2',
                'next':'step3'
                })
        }
    }
}
</script>