<template>
    <div class="BebidaDetail">
        <v-row>
            <v-col sm="12" md="6">
               <div class="BebidaDetail__banner">
                   <img :src="dataDrink.strDrinkThumb" alt="">
               </div>
            </v-col> 
           <v-col sm="12" md="6" class="d-flex justify-center align-center">
               <div class="Home__title">
                   <h1>{{dataDrink.strDrink}}</h1>
                   <h2>Ingredientes</h2>
                   <ul>
                       <li v-for="(item, i) in ingredients" :key="'ingredient'+i">{{item}}</li>
                   </ul>
                   <h2>Preparación</h2>
                   <p>{{dataDrink.strInstructions}}</p>
               </div>
           </v-col>
        </v-row>
    </div>
</template>

<script>
import {UrlDriks} from '../plugins/constants.js';

export default {
    name: 'BebidaDetail',
    props: ['id'],
    data () {
        return {
            url: UrlDriks,
            dataDrink: {}
        }
    },
    computed: {
        ingredients: function (){
            let data = [];
            for (const item in this.dataDrink) {
                if(item.includes('strIngredient') && this.dataDrink[item] != null){
                    data.push(this.dataDrink[item])
                }
            }
            return data
        }
    },
    methods: {
        getDetail: async function(){
            let response = await fetch(this.url + 'lookup.php?i=' + this.id)
                .then(
                    response => response.json()
                ).then(
                    data => {
                        return data
                    }
                );
            this.dataDrink = response.drinks[0]
        },
    },
    mounted: async function (){
        await this.getDetail();
    }
}
</script>
<style>
.BebidaDetail__banner{
    width: 100%;
    height: 650px;
}
.BebidaDetail__banner img{
    width: 100%;
    height: 650px;
}
.BebidaDetail .Home__title h2{
    margin-bottom: 20px;
    margin-top: 20px;
    line-height: 20px;
}
.Home__title li, .Home__title p{
    font-size: .8rem;
}
</style>