<template>
    <div class="Home Bebidas">
        <v-row>
            <v-col cols="12" sm="12" md="6">
               <div class="Home__banner"></div>
            </v-col> 
           <v-col cols="12" sm="12" md="6" class="d-flex justify-center align-center">
               <div class="Home__title">
                   <h1>Bebidas</h1>
                   <v-text-field v-model="search" label="¿Que bebida deseas buscar?" required></v-text-field>
                   <v-btn x-large rounded color="normal" @click="initSearch" dark>Buscar</v-btn>
               </div>
           </v-col>
        </v-row>
        <v-row>
            <div v-if="dataBebidas && dataBebidas.length > 0" class="Bebidas__cards">
                <v-row>
                    <v-col sm="12" class="d-flex justify-center">
                        <h3 class="Bebidas__cards__title">Resultados de busqueda</h3>
                    </v-col> 
                </v-row>
                <v-row class="Bebidas__cards__container">
                    <v-col cols="12" sm="6" md="3" v-for="(item, i) in dataBebidas" :key="'drink'+i">
                        <div class="Bebidas__cards__item" @click="goDetail(item.idDrink)">
                            <div class="Bebidas__cards__item__image">
                                <img v-if="item.strDrinkThumb" :src="item.strDrinkThumb" alt="">
                            </div>
                            <div class="Bebidas__cards__item__text">
                                <p class="Bebidas__cards__item__text__title">{{item.strDrink}}</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <div v-if="dataBebidas == null" class="Bebidas__cards">
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
import {UrlDriks} from '../plugins/constants.js';

export default {
    name: 'Bebidas',
    data () {
        return {
            search: '',
            dataBebidas: [],
            url: UrlDriks
        }
    },
    methods: {
        initSearch: async function(){
            if(this.search.length > 0){
                let response = await fetch(this.url + 'search.php?s=' + this.search)
                    .then(
                        response => response.json()
                    ).then(
                        data => {
                            return data
                        }
                    );
                this.dataBebidas = response.drinks
            }
        },
        goDetail: function(id) {
            this.$router.push({name: 'BebidaDetail', params: { id: id }})
        }
    }
}
</script>
<style>
input{
    font-size: 1rem;
}
.Bebidas .Home__banner{
    background-image: url(../assets/drink.jpg);
    height: 600px;
}
.Bebidas__cards{
    width: 100%;
    padding: 40px 0px;
}
.Bebidas__cards__container{
    width: 100%;
}
.Bebidas__cards__title{
    font-size: 1.6rem;
    margin-bottom: 20px;
    text-align: center;
    font-weight: normal;
}
.Bebidas__cards__info{
    text-align: center;
}
.Bebidas__cards__info p{
    font-size: 1rem;
}
.Bebidas__cards__item{
    margin: 0 auto 20px;
    text-align: center;
    font-size: 2rem;
    width: 90%;
    max-width: 300px;
    height: 320px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 3px 4px rgba(0,0,0,.08);
    transition: all .3s;
    cursor: pointer;
}
.Bebidas__cards__item:hover{
    box-shadow: 0px 6px 10px rgba(0,0,0,.1);
}
.Bebidas__cards__item__image{
    width: 100%;
    height: 250px;
    overflow: hidden;
}
.Bebidas__cards__item__image img{
    width: 100%;
    height: 100%;
}
.Bebidas__cards__item__text{
    padding: 14px 20px;
}
.Bebidas__cards__item__text p{
    margin-bottom: 0px;
    font-size: 1rem;
    font-weight: normal;
}
.no-search{
    padding: 100px;
    width: 100%;
    text-align: center;
}
.no-search p{
    font-size: 2rem;
}
@media(max-width: 1023px){
    .Bebidas__cards__item{
        width: 95%;
        height: 280px;
        margin: 0 auto;
    }
    .Bebidas__cards__item__image{
        height: 220px
    }
}
@media(max-width: 960px){
    .Bebidas .Home__banner{
        height: 400px;
    }
}
</style>