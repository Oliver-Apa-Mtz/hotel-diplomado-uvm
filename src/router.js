import Vue from 'vue';
import Router from 'vue-router';

import Admin from '@/pages/Admin'
import BebidaDetail from '@/pages/BebidaDetail'
import Bebidas from '@/pages/Bebidas'
import Clima from '@/pages/Clima'
import HabitacionDetail from '@/pages/HabitacionDetail'
import Habitaciones from '@/pages/Habitaciones'
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
            path: '/habitaciones',
            name: 'Habitaciones',
            component: Habitaciones
        },
        {
            path: '/habitacion/:id',
            name: 'HabitacionDetail',
            component: HabitacionDetail,
            props: true
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
        },
        {
            path: '/bebida/:id',
            name: 'BebidaDetail',
            component: BebidaDetail,
            props: true
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            props: true
        },
    ]
})