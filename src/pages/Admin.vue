<template>
    <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 basil--text">Admin</h1>
        </v-card-title>
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
            <v-tab v-for="item in items" :key="item">
                {{ item }}
            </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
                <v-card color="basil" flat>
                    <v-data-table v-if="tab == 0"
                        :headers="headersUsers"
                        :items="dataUsers"
                        :items-per-page="10"
                        class="elevation-1"
                    ></v-data-table>
                    <v-data-table v-if="tab == 1"
                        :headers="headersComments"
                        :items="dataComments"
                        :items-per-page="10"
                        class="elevation-1"
                    ></v-data-table>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </v-card>
</template>

<script>
export default {
    name: 'Admin',
    data () {
        return {
            tab: null,
            items: [
                'Visitantes', 'Comentarios',
            ],
            headersUsers: [
                {
                    text: 'Nombre',
                    value: 'first'
                },
                {
                    text: 'Apellido',
                    value: 'last'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'Dirección',
                    value: 'address'
                }
            ],
            dataUsers: [],
            headersComments: [
                {
                    text: 'Nombre',
                    value: 'name'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'Comentario',
                    value: 'body'
                },
            ],
            dataComments: []
        }
    },
    components: {
		
	},
    methods: {
        getUsers: async function(){
            let response = await fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
                .then(
                    response => response.json()
                ).then(
                    data => {
                        return data
                    }
                );
            this.dataUsers = response
        },
        getComments: async function(){
            let response = await fetch('https://jsonplaceholder.typicode.com/comments')
                .then(
                    response => response.json()
                ).then(
                    data => {
                        return data
                    }
                );
            this.dataComments = response
        }
    },
    mounted: async function (){
        if(localStorage.getItem('userHotel')){
            await this.getUsers()
            await this.getComments()
        }else{
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
<style>
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>