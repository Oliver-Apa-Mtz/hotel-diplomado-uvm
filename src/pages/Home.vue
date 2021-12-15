<template>
    <div class="Home">
        <v-row>
            <v-col sm="6">
               <div class="Home__banner"></div>
            </v-col> 
           <v-col sm="6 d-flex justify-center align-center">
               <div class="Home__title">
                   <h1>Hotel Pleasure</h1>
                   <h2>Disfruta de unas increibles y magnificas vacaciones</h2>
                   <v-btn x-large rounded color="normal" dark>Ver habitaciones</v-btn>
               </div>
           </v-col>
        </v-row>
        <div class="v-row">
            <Carousel></Carousel>
        </div>
        <v-row class="Home__drink">
            <v-col sm="6 d-flex justify-center align-center">
               <div class="Home__drink__text">
                <p>Descubre nuestro catalogo de bebidas exclusivas para ti</p>
                <router-link to="/bebidas">
                    <v-btn x-large rounded color="normal" dark>Ver bebidas</v-btn>
                </router-link>
               </div>
           </v-col>
            <v-col sm="6">
                <div class="Home__drink__image"></div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Carousel from '../components/Home/Carousel';
export default {
    name: 'Home',
    data () {
        return {

        }
    },
    components: {
		Carousel,
	},
}
</script>
<style>
.Home__title{
    width: 100%;
    padding: 50px;
}
.Home__title h1{
    font-size: 5rem;
    font-weight: normal;
    margin-bottom: 20px;
}
.Home__title h2{
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 40px;
}
.Home__banner{
    width: 100%;
    height: 650px;
    background-image: url(../assets/banner.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.Home__drink__text{
    padding: 50px;
}
.Home__drink__text p{
    font-size: 2rem;
}
.Home__drink__image{
    width: 100%;
    height: 400px;
    background-image: url(../assets/drink.jpg);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>