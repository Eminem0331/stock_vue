<template>
    <div class = "x-bar">
        <div :id="id" :opthion="option">

        </div>

    </div>
    
</template>

<script>
    import Highcharts from 'highcharts'
    export default {
        name: "basechart",
        props:{
            id:{
                type:String
            },
            option:{
                type:Object
            }

        },
        mounted(){
            Highcharts.chart(this.id,this.option)
        }

    }
</script>

<style scoped>

</style>