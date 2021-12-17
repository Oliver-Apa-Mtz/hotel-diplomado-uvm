<template>
    <div class="Carousel">
        <v-row>
            <v-col sm="12 d-flex justify-center">
               <h3 class="Carousel__title">Elige la habitación para tu comodidad</h3>
            </v-col> 
        </v-row>
        <v-row class="Carousel__container">
            <v-col cols="12" sm="6" md="4">
               <Card class="Carousel__item" :id="'card1'" :data="data1"></Card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
               <Card class="Carousel__item" :id="'card2'" :data="data2"></Card>
            </v-col> 
            <v-col cols="12" sm="6" md="4">
               <Card class="Carousel__item" :id="'card3'" :data="data3"></Card>
            </v-col> 
        </v-row>
    </div>
</template>

<script>
import Card from './Card';
export default {
    name: 'Carousel',
    data () {
        return {
            data1: {
                name: 'Puerto Vallarta, Jalisco, México.',
                price: '25000.00'
            },
            data2: {
                name: 'Guadalajara, Jalisco, México.',
                price: '22000.00'
            },
            data3: {
                name: 'Huatulco, Oaxaca, México.',
                price: '20000.00'
            }
        }
    },
    components: {
		Card,
	},
}
</script>
<style>
.Carousel{
    width: 100%;
    padding: 80px 0px;
    background-color: #F7F7F7;
}
.Carousel__container{
    width: 80%;
}
.Carousel__title{
    font-size: 1.6rem;
    margin-bottom: 50px;
    text-align: center;
    font-weight: normal;
}
.Carousel__item{
    margin-left: 50px;
}
@media(max-width: 1023px){
    .Carousel__container{
        width: 100%;
    }
    .Carousel__item{
        margin: 0 auto;
    }
}
</style>