<template>
    <div class="m-5 mt-0 p-3 px-5 rounded-3 border border-warning shadow-lg bg-white">
        <form @submit.prevent="">
            <div class="row">
                <div class="form-group col-auto mb-3 px-2">
                    <label class="text-dark small" for="gender">Genre:</label>
                    <select name="gender" id="gender" v-model="gender" class="form-control">
                        <option value="Mme">Mme</option>
                        <option value="Mr">Mr</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="lastname">Nom de famille:</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Nom de famille..." v-model="lastname" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="firsname">Prénom:</label>
                    <input type="text" id="firsname" name="firsname" placeholder="Prénom..." v-model="firsname" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="birth-date">Date de naissance:</label>
                    <input type="date" id="birth-date" name="birthDate" placeholder="Date de naissance..." v-model="birthDate" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="nationality">Nationalité:</label>
                    <select id="nationality" name="nationality" v-model="nationality" class="form-select">
                        <option selected disabled>Nationalité...</option>
                        <option value="marocaine">Marocaine</option>
                        <option value="etrangere">Etrangere</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder="E-mail..." v-model="email" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="phone">Téléphone:</label>
                    <input type="tel" id="phone" name="phone" placeholder="Téléphone" v-model="phone" class="form-control">
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="adress">Adresse:</label>
                    <input type="text" id="adress" name="adress" placeholder="Adress"  v-model="adress" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="city">Ville:</label>
                    <select id="city" name="city" v-model="city" class="form-select">
                        <option selected disabled>Ville...</option>
                        <option v-for="(city, index) in cities" :key="index" :value=city>{{ city }}</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="professional-situation">Situation professionnelle:</label>
                    <select id="professional-situation" name="professionalSituation" v-model="professionalSituation" class="form-select">
                        <option selected disabled>Situation professionnelle...</option>
                        <option value="Official">Official</option>
                        <option value="Private employee">Private employee</option>
                        <option value="Liberal profession">Liberal profession</option>
                        <option value="Trader">Trader</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="monthlyIncome">Revenu mensuel:</label>
                    <input type="number" min="0" id="monthlyIncome" placeholder="Revenu mensuel..." name="monthlyIncome" v-model="monthlyIncome" class="form-control">
                </div>
                <div class="form-group col mb-3 px-2 w-100">
                    <label class="text-dark small" for="currentCredits">Crédits en cours:</label>
                    <input type="number" min="0" id="currentCredits" placeholder="Crédits en cours..." name="currentCredits" v-model="currentCredits" class="form-control">
                </div>
            </div>

            <div class="row justify-content-between">
                <div class="col-auto form-group mb-3">
                    <button id="go" type="submit" @click="prev" class="btn btn-dark p-2 shadow w-100">Précédent</button>
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
            cities:[
                'Casablanca',
                'Fez',
                'Tangier',
                'Marrakesh',
                'Salé',
                'Meknes',
                'Rabat',
                'Oujda',
                'Kenitra',
                'Agadir',
                'Tetouan',
                'Temara',
                'Safi',
                'Mohammedia',
                'Khouribga',
                'El Jadida',
                'Beni Mellal',
                'Aït Melloul',
                'Nador',
                'Dar Bouazza',
                'Taza',
                'Settat',
                'Berrechid',
                'Khemisset',
                'Inezgane',
                'Ksar El Kebir',
                'Larache',
                'Guelmim',
                'Khenifra',
                'Berkane',
                'Taourirt',
                'Bouskoura',
                'Fquih Ben Salah',
                'Dcheira El Jihadia',
                'Oued Zem',
                'El Kelaa Des Sraghna',
                'Sidi Slimane',
                'Errachidia',
                'Guercif',
                'Oulad Teima',
                'Ben Guerir',
                'Tifelt',
                'Lqliaa',
                'Taroudant',
                'Sefrou',
                'Essaouira',
                'Fnideq',
                'Sidi Kacem',
                'Tiznit',
                'Tan-Tan',
                'Ouarzazate',
                'Souk El Arbaa',
                'Youssoufia',
                'Lahraouyine',
                'Martil',
                'Ain Harrouda',
                'Suq as-Sabt Awlad an-Nama',
                'Skhirat',
                'Ouazzane',
                'Benslimane',
                'Al Hoceima',
                'Beni Ansar',
                'M\'diq',
                'Sidi Bennour',
                'Midelt',
                'Azrou',
                'Drargua'
            ],
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
            this.$emit('next',{'prev':'step1','step':'step2','next':'','data':{
                'gender': this.gender,
                'lastname': this.lastname,
                'firsname': this.firsname,
                'birthDate': this.birthDate,
                'nationality': this.nationality,
                'email': this.email,
                'phone': this.phone,
                'adress': this.adress,
                'city': this.city,
                'professionalSituation': this.professionalSituation,
                'monthlyIncome': this.monthlyIncome,
                'currentCredits': this.currentCredits,
            }})
        },
        prev(){
            this.$emit('prev',{'prev':'step1','step':'step2','next':'','data':{}})
        }
    }
}
</script>