<template>
    <header class="Header">
        <v-row>
            <v-col sm="4 d-flex align-center">
                <router-link class="Header__title" to="/">HP</router-link>
            </v-col>
            <v-col sm="8 d-flex align-center justify-end">
                <nav class="Header__nav d-flex">
                    <a @click="statusModal = true">Login</a>
                    <router-link to="/habitaciones">Habitaciones</router-link>
                    <router-link to="/clima">Clima</router-link>
                    <router-link to="/bebidas">Bebidas</router-link>
                </nav>
            </v-col>
        </v-row>
        <Modal :status="statusModal" @closeModal="closeModal"></Modal>
    </header>
</template>

<script>
import Modal from '../components/Shared/Modal';
export default {
    name: 'Header',
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
</style>