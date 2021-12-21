<template>
    <header class="Header">
        <v-row>
            <v-col sm="2" md="4" class="d-flex align-center">
                <router-link class="Header__title" to="/">HP</router-link>
            </v-col>
            <v-col sm="10" md="8" class="d-flex align-center justify-end">
                <nav class="Header__nav d-flex align-center">
                    <a v-if="!tokenUser" @click="statusModal = true">Login</a>
                    <router-link v-if="tokenUser" to="/admin">Admin</router-link>
                    <router-link to="/habitaciones">Habitaciones</router-link>
                    <router-link to="/clima">Clima</router-link>
                    <router-link to="/bebidas">Bebidas</router-link>
                    <v-btn v-if="tokenUser" depressed color="error" @click="expireSesion">Cerrar Sesión</v-btn>
                </nav>
            </v-col>
        </v-row>
        <Modal :status="statusModal" @closeModal="closeModal" @updateToken="updateToken"></Modal>
    </header>
</template>

<script>
import Modal from '../components/Shared/Modal';
export default {
    name: 'Header',
    props: ['tokenUser'],
    data () {
        return {
            statusModal: false
        }
    },
    components: {
		Modal
	},
    methods: {
        closeModal: function(){
            this.statusModal = false
        },
        updateToken: function(){
            this.$emit('updateToken')
        },
        expireSesion: function(){
            localStorage.removeItem('userHotel');
            this.$emit('updateToken')
            this.$router.push({name: 'Home'})
        }
    }
}
</script>
<style>
.Header{
    width: 100vw;
    height: 60px;
    background-color: white;
    box-shadow: 0px 4px 6px rgba(0,0,0,.1);
    padding: 0 20px;
}
.Header a{
    display: block;
    text-decoration: none;
    color: black !important;
}
.Header__title{
    font-size: 2.4rem;
    font-weight: 700;
}
.Header__nav a{
    font-size: 1rem;
    margin-right: 20px;
    font-weight: 300;
}
@media(max-width: 600px){
    .Header{
        height: 50px;
        padding: 0 10px;
    }
    .Header__title{
        font-size: 2rem;
    }
    .Header__nav a{
        margin-right: 10px;
        font-size: .8rem;
    }
}
</style>