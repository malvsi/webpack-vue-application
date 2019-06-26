import VueRouter from 'vue-router';
import home from './components/Home.vue';
import user from './components/User.vue';
import cart from './components/Cart.vue';
import search from './components/Search.vue';


var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component:home},
        {path: '/user', component:user},
        {path: '/cart', component:cart},
        {path: '/search', component:search},
    ]
})

export default router;