<template>
    <v-row justify="center">
        <v-dialog v-model="status" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">Login</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field :rules="rules.email" v-model="email" label="Email*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field :rules="rules.password" v-model="password" label="Password*" type="password" required></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click="close" text>Cerrar</v-btn>
                    <v-btn color="blue darken-1" @click="login" :disabled="!formIsValid" text>Entrar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar">
            Datos incorrectos, intente de nuevo
            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
            </template>
        </v-snackbar>
    </v-row>
</template>

<script>
import {user} from '../../plugins/constants.js';

export default {
    name: 'Modal',
    props: ['status'],
    data () {
        return {
            email: '',
            password: '',
            snackbar: false,
            rules: {
                email: [val => (val || '').length > 0 || 'This field is required'],
                password: [val => (val || '').length > 0 || 'This field is required']
            },
            dataUser: user
        }
    },
    computed: {
        formIsValid () {
            return (
                this.email &&
                this.password
            )
        },
    },
    methods: {
        close: function(){
            this.$emit('closeModal')
        },
        login: function(){
            if(this.dataUser.email == this.email && this.dataUser.password == this.password){
                this.$emit('closeModal')
                this.$router.push({name: 'Admin', params: { dataUser: this.dataUser }})
            }else{
                this.snackbar = true
            }
        }
    }
}
</script>
<style>

</style>