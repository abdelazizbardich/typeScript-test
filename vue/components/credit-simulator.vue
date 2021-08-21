<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12 m-auto">
                    <h1 class="text-center my-5 h4">CREDIT SIMULATOR - ( {{ step }} )</h1>
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
            this.step = data.next
        },
        prevStep(data){
            this.step = data.prev
        }
        
    }
}
</script>