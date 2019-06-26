import VueRouter from 'vue-router';
import home from './components/tabbar/Home.vue';
import member from './components/tabbar/Member.vue';
import cart from './components/tabbar/Cart.vue';
import search from './components/tabbar/Search.vue';


var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component:home},
        {path: '/member', component:member},
        {path: '/cart', component:cart},
        {path: '/search', component:search},
    ],
    linkActiveClass : 'mui-active'  //覆盖默认的路由高亮的类 默认的类为 router-link-active, mui中高亮的类为 mui-active
})

export default router;