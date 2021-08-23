<template>
    <div class="m-md-5 mb-5 mt-0 p-3 px-md-5 rounded-3 border border-warning shadow-lg bg-white">
        <form @submit.prevent="">
            <div class="row">
                <div class="form-group col-12 col-md mb-3 px-2 w-100">
                    <label class="text-dark small" for="car-price">Prix de la voiture:</label>
                    <input v-model="carPrice" type="number" :class="(+this.carPrice < +this.advance || +carPrice < 10000)?'is-invalid':''"  min="10000" id="car-price" class="form-control" placeholder="Prix de la voiture :...">
                </div>
                <div class="form-group col-12 col-md mb-3 px-2 w-100">
                    <label class="text-dark small" for="advance">Avance:</label>
                    <input v-model="advance"  :class="(+this.carPrice < +this.advance)?'is-invalid':''" type="number" min="0" id="advance" class="form-control" placeholder="Avance...">
                </div>
            </div>
            <div class="row">
                <div class="form-group col-12 col-md mb-3 px-2 w-100">
                    <label class="text-dark small" for="duration">Durée:</label>
                    <select v-model="duration" name="duration" id="duration" class="form-control">
                    <option disabled selected>Durée...</option>
                        <option v-for="d,index in 70" :key=index :value=d>{{ d }} {{  }}</option>
                    </select>
                </div>
                <div class="form-group col-12 col-md mb-3 px-2 w-100">
                    <label class="text-dark small" for="interest-rate">Taux d'intérêt:</label>
                    <input v-model="interestRate"  min="1" max="20" type="range" id="interest-rate" class="form-range" placeholder="Taux d'intérêt...">
                    <div class="d-flex justify-content-between">
                        <span>1%</span>
                        <span class="text-danger">{{ interestRate }}%</span>
                        <span>20%</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form-group col-12 col-md mb-3 px-2 w-100">
                    <label class="text-dark small" for="amount-borrowed">Montant emprunté:</label>
                    <input :value="carPrice - advance" disabled readonly type="number" min="0" id="amount-borrowed" class="form-control" :class="(+this.carPrice < +this.advance)?'is-invalid':''"  placeholder="Montant emprunté...">
                </div>
                <div class="form-group col-12 col-md mb-3 px-2 w-100">
                    <label class="text-dark small" for="monthly-payment">Mensualité:</label>
                    <input :value="monthlyPayment" disabled readonly type="number" min="0" id="monthly-payment" class="form-control" placeholder="Mensualité...">
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-auto form-group mb-3">
                    <button id="go" type="submit" disabled @click="prev" class="btn btn-dark p-2 shadow w-100">Précédent</button>
                </div>
                <div class="col-auto form-group mb-3">
                    <button id="go" @click="next" type="submit" class="btn btn-warning p-2 shadow w-100">Suivant</button>
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
            interestRate:10,
            amountBorrowed:0,
            monthlyPayment:0,
            duration:1,
            errors:[]
        }
    },
    created(){
        // console.log(getMontionalinteret(this.carPrice,this.interestRate,this.duration).toFixed(2));
    },
    props:['save'],
    created() {
        this.amountBorrowed = this.carPrice - this.advance
        this.monthlyPayment = this.getMontionality()
    },
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