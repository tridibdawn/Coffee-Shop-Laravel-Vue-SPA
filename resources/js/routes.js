import Home from './components/Home.vue';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Store from './components/Store.vue';
import NotFound from './components/NotFound.vue';

export default {
    mode: 'history',
    routes: [

        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/products',
            component: Products
        },
        {
            path: '/store',
            component: Store
        }
    ]
}