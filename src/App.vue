<template>
	<v-app>
		<Header :tokenUser="tokenUser" @updateToken="checkUser"></Header>
		<router-view></router-view>
		<Footer></Footer>
	</v-app>
</template>

<script>
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export default {
	name: 'App',
	components: {
		Header,
		Footer
	},
	data() { 
		return{
			tokenUser: false
		}
	},
	methods: {
		checkUser: function(){
			if(localStorage.getItem('userHotel')){
				this.tokenUser = true
			}else{
				this.tokenUser = false
			}
		}
	},
	mounted: async function (){
        this.checkUser()
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
*{
	font-size: 10px;
	font-family: 'Poppins', sans-serif;
}
</style>