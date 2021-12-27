<template>
    <div class="Bebidas">
        <v-row>
            <v-col cols="12" sm="12" md="6">
               <div class="Home__banner Home__banner--clima"></div>
            </v-col> 
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center">
               <div class="Home__title">
                   <h1>Clima</h1>
                   <v-text-field v-model="search" label="¿Que ciudad deseas buscar?" required></v-text-field>
                   <v-btn x-large rounded color="normal" @click="searchClima" dark>Buscar</v-btn>
               </div>
           </v-col>
        </v-row>
        <v-row>
            <div v-if="dataClima.location" class="Bebidas__cards">
                <v-row>
                    <v-col cols="12" sm="12" class="d-flex justify-center">
                        <h3 class="Bebidas__cards__title">{{dataClima.location.name}}, {{dataClima.location.region}}, {{dataClima.location.country}}.</h3>
                    </v-col>
                    <v-col cols="12" sm="12" class="d-flex justify-center">
                        <div class="Bebidas__cards__info">
                            <p>{{dataClima.current.weather_descriptions[0]}}</p>
                            <p>{{`Temperatura: ${dataClima.current.temperature} grados`}}</p>
                            <p>{{`Viento: ${dataClima.current.wind_speed} kmph`}}</p>
                            <p>{{`Sensación térmica: ${dataClima.current.feelslike} grados`}}</p>
                            <img :src="dataClima.current.weather_icons[0]" alt="">
                        </div>
                    </v-col>
                </v-row>
            </div>
            <div v-if="dataClima.success == false" class="Bebidas__cards">
                <v-row>
                    <v-col sm="12" class="d-flex justify-center">
                        <h3 class="Bebidas__cards__title">No se encontraron resultados en la busqueda</h3>
                    </v-col> 
                </v-row>
            </div>
        </v-row>
    </div>
</template>

<script>
import {token, urlClima} from '../plugins/constants.js';

export default {
    name: 'Clima',
    data () {
        return {
            search: '',
            token: token,
            urlClima: urlClima,
            dataClima: {}
        }
    },
    methods: {
        searchClima: async function () {
            if(this.search.length > 0){
                let response = await fetch(this.urlClima + this.token + '&query=' + this.search)
                    .then(
                        response => response.json()
                    ).then(
                        data => {
                            return data
                        }
                    );
                this.dataClima = response
            }
        }
    }
}
</script>
<style>
.Bebidas .Home__banner--clima{
    background-image: url(../assets/clima.jpg);
}
</style>