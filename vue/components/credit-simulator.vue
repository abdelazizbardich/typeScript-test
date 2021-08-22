<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 m-auto">
                    <div class="jumbotron">
                        <div class="jumbotron border border-dark shadow my-5 mx-5 rounded-2 bg-warning">
                            <h1 class="display-5 text-center">CREDIT SIMULATOR</h1>
                        </div>
                    </div>
                    <div class="w-100 px-5">
                    <div class="steps d-flex justify-content-between align-items-center">
                        <span @click="step = 'step1'" :class="(step == 'step1')?'shadow-sm bg-warning':'px-3 py-2 bg-info'" class="px-3 py-2 my-3 text-white rounded-circle ">1</span>
                        <span @click="step = 'step2'" :class="(step == 'step2')?'shadow-sm bg-warning':'px-3 py-2 bg-info'" class="px-3 py-2 my-3 text-white rounded-circle ">2</span>
                        <span @click="step = 'step3'" :class="(step == 'step3')?'shadow-sm bg-warning':'px-3 py-2 bg-info'" class="px-3 py-2 my-3 text-white rounded-circle ">3</span>
                    </div>
                    </div>
                    <component v-bind:is="step" @next="nextStep($event)" @prev="prevStep($event)"></component>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{
        step1 : () => import('./core/steps/step1.vue'),
        step2 : () => import('./core/steps/step2.vue')
    },
    data() {
        return {
            step : 'step1',
            steps:{}
        }
    },
    methods:{
        nextStep(data){
            this.steps[data.step] = data.data
            if(data.next != ''){
                this.step = data.next
            }    
        },
        prevStep(data){
            if(data.prev != ''){
                this.step = data.prev
            }
        }
        
    }
}
</script>

<style scoped>
    .steps{
        position: relative;
        z-index: 0;
    }
    .steps > *{
        transition: .3s;
        cursor: pointer;
    }
    .steps > *:hover{
        transform: scale(1.1);
    }
    .steps:before{
        content: '';
        width: 100%;
        height: 7px;
        background: var(--bs-light);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: -1;
    }
</style>