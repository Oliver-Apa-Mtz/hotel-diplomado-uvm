import Vue from 'vue';
import Router from 'vue-router';

import Bebidas from '@/pages/Bebidas'
import Clima from '@/pages/Clima'
import Home from '@/pages/Home'
Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/clima',
            name: 'Clima',
            component: Clima
        },
        {
            path: '/bebidas',
            name: 'Bebidas',
            component: Bebidas
        }
    ]
})