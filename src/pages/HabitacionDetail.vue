<template>
    <div class="BebidaDetail">
        <v-row>
            <v-col sm="12" md="6">
               <div class="BebidaDetail__banner" :id="'detail-'+dataRoom.id">
               </div>
            </v-col> 
           <v-col sm="12" md="6" class="d-flex justify-center align-center">
               <div class="Home__title">
                   <h1>{{dataRoom.name}}</h1>
                   <h2>${{dataRoom.price}}.00</h2>
                   <p>Numero de Habitación: {{dataRoom.number}}</p>
                   <p>Huéspedes máximos: {{dataRoom.capacity}}</p>
                   <p>Cuenta con balcon: {{dataRoom.balcon ? 'Si' : 'No'}}</p>
                   <p>Camas: </p>
                   <ul>
                       <li>Individuales: {{dataRoom.rooms.ind}}</li>
                       <li> Queen Size: {{dataRoom.rooms.queen}}</li>
                       <li>King Size: {{dataRoom.rooms.king}}</li>
                       <li>Matrimoniales: {{dataRoom.rooms.matri}}</li>
                   </ul>
               </div>
           </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'HabitacionDetail',
    props: ['id'],
    data () {
        return {
            dataRoom: {}
        }
    },
    mounted: async function (){
        if(this.$route.params.dataRoom){
            this.dataRoom = this.$route.params.dataRoom
        }
    }
}
</script>
<style>
.BebidaDetail__banner{
    width: 100%;
    height: 600px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.BebidaDetail .Home__title h1{
    font-size: 3rem;
    line-height: 50px;
}
#detail-1{
    background-image: url(../assets/slider-1.jpg);
}
#detail-2{
    background-image: url(../assets/slider-2.jpg);
}
#detail-3{
    background-image: url(../assets/slider-3.jpg);
}
#detail-4{
    background-image: url(../assets/slider-4.jpg);
}
#detail-5{
    background-image: url(../assets/slider-5.jpg);
}
#detail-6{
    background-image: url(../assets/slider-6.jpg);
}
#detail-7{
    background-image: url(../assets/slider-7.jpg);
}
</style>