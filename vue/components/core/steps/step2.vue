<template>
    <div class="m-5 mt-0 p-3 px-5 rounded-3 border border-warning shadow-lg bg-white">
        <form @submit.prevent="">
            <div class="row">
                <div class="form-group col-auto mb-3 px-2">
                    <label class="text-dark small" for="gender">Gender:</label>
                    <select name="gender" id="gender" v-model="gender" class="form-control">
                        <option value="Mme">Mme</option>
                        <option value="Mr" selected>Mr</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="lastname">Last name:</label>
                    <input type="text" id="lastname" name="lastname" v-model="lastname" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="firsname">First name:</label>
                    <input type="text" id="firsname" name="firsname" v-model="firsname" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="birth-date">Birth Date:</label>
                    <input type="date" id="birth-date" name="birthDate" v-model="birthDate" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="nationality">Nationality:</label>
                    <select id="nationality" name="nationality" v-model="nationality" class="form-select">
                        <option selected disabled>Nationality...</option>
                        <option value="marocaine">Marocaine</option>
                        <option value="etrangere">Etrangere</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="email">Email:</label>
                    <input type="email" id="email" name="email" v-model="email" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="phone">phone:</label>
                    <input type="tel" id="phone" name="phone" v-model="phone" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="adress">Adress:</label>
                    <input type="text" id="adress" name="adress" v-model="adress" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="city">City:</label>
                    <select id="city" name="city" v-model="city" class="form-select">
                        <option selected disabled>City...</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="professional-situation">Professional situation:</label>
                    <select id="professional-situation" name="professionalSituation" v-model="professionalSituation" class="form-select">
                        <option selected disabled>Professional situation...</option>
                        <option value="Official">Official</option>
                        <option value="Private employee">Private employee</option>
                        <option value="Liberal profession">Liberal profession</option>
                        <option value="Trader">Trader</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="monthlyIncome">Monthly Income:</label>
                    <input type="number" min="0" id="monthlyIncome" name="monthlyIncome" v-model="monthlyIncome" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="currentCredits">Current credits:</label>
                    <input type="number" min="0" id="currentCredits" name="currentCredits" v-model="currentCredits" class="form-control">
                </div>
            </div>

            <div class="row justify-content-between">
                <div class="col-auto form-group mb-3">
                    <button id="go" type="submit" @click="prev" class="btn btn-dark p-2 shadow w-100">Prev</button>
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
            gender:'',
            lastname:'',
            firsname:'',
            birthDate:'',
            nationality:'',
            email:'',
            phone:'',
            adress:'',
            city:'',
            professionalSituation:'',
            monthlyIncome:'',
            currentCredits:'',
            errors:[]
        }
    },
    watch:{
        $data: {
            handler: function() {
                
            },
            deep: true
        }
    },
    methods:{
        next(){
            this.$emit('next',{'prev':'','step':'step1','next':'step2','data':{}})
        },
        prev(){
            this.$emit('prev',{'prev':'step1','step':'step2','next':'step3','data':{}})
        }
    }
}
</script>