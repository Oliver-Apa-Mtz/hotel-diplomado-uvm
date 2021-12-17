<template>
    <div class="Home Habitaciones">
        <v-row>
            <v-col cols="12" sm="12" md="6">
               <div class="Home__banner"></div>
            </v-col> 
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center">
               <div class="Home__title">
                   <h1>Habitaciones</h1>
               </div>
           </v-col>
        </v-row>
        <v-row>
            <div v-if="rooms" class="Bebidas__cards">
                <v-row class="Bebidas__cards__container">
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, i) in rooms" :key="'room'+i">
                        <Card class="Carousel__item" :id="'card'+item.id" :data="item" :active="true"></Card>
                    </v-col>
                </v-row>
            </div>
        </v-row>
    </div>
</template>

<script>
import {rooms} from '../plugins/rooms.js';

import Card from '../components/Home/Card';

export default {
    name: 'Bebidas',
    data () {
        return {
            rooms: rooms
        }
    },
    components: {
		Card,
	}
}
</script>
<style>
.Habitaciones .Home__banner{
    background-image: url(../assets/rooms.jpg);
    height: 600px;
}
.Habitaciones .Bebidas__cards__container{
    padding: 0 40px;
}
.Habitaciones .Card{
    margin: 0 auto;
    cursor: pointer;
    transition: all .3s linear;
}
.Habitaciones .Card:hover{
    box-shadow: 0px 8px 16px rgba(0,0,0,.15);
}
@media(max-width: 640px){
    .Habitaciones .Home__title h1{
        font-size: 4rem;
        line-height: 40px;
    }
}
@media(max-width: 500px){
    .Habitaciones .Home__title h1{
        font-size: 3rem;
        line-height: 30px;
    }
}
</style>