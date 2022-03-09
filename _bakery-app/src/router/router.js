import { createRouter, createWebHistory } from 'vue-router'

import Catalogue from '../components/Catalogue.vue'
import Cart from '../components/Cart.vue'
import MainPage from '../components/MainPage.vue'

const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },

    {
        path: '/catalogue',
        name: 'catalogue',
        component: Catalogue
    },

    {
        path: '/cart',
        name: 'cart',
        component: Cart,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;