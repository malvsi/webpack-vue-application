import VueRouter from 'vue-router';
import home from './components/tabbar/Home.vue';
import member from './components/tabbar/Member.vue';
import cart from './components/tabbar/Cart.vue';
import search from './components/tabbar/Search.vue';
import newslist from './components/news/NewsList.vue';
import newsdetail from './components/news/NewsDetail.vue';
import photolist from './components/photos/Photolist.vue';
import photodetail from './components/photos/Photodetail.vue';
import goodslist from './components/goods/GoodsList.vue';
import goodsdetail from './components/goods/GoodsDetail.vue';
import goodsdesc from './components/goods/GoodsDesc.vue';
import goodscomments from './components/goods/GoodsComments.vue';


var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component:home},
        {path: '/member', component:member},
        {path: '/cart', component:cart},
        {path: '/search', component:search},
        {path: '/home/newslist', component: newslist},
        {path: '/home/newsdetail/:docid', component: newsdetail},
        {path: '/home/photolist', component: photolist},
        {path: '/home/photodetail/:imgid', component: photodetail},
        {path: '/home/goodslist', component: goodslist},
        {path: '/home/goodsdetail', component: goodsdetail},
        {path: '/home/goodsdecs', component: goodsdesc, name: 'goodsdesc'},
        {path: '/home/goodscomments', component: goodscomments, name: 'goodscomments'}
    ],
    linkActiveClass : 'mui-active',  //覆盖默认的路由高亮的类 默认的类为 router-link-active, mui中高亮的类为 mui-active
})

export default router;