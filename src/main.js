// 入口文件
import Vue from 'vue';
import app from './App.vue';
import './lib/mui-master/dist/css/mui.css';
import 'mint-ui/lib/style.css';
import './lib/mui-master/examples/hello-mui/css/icons-extra.css';
import './lib/mui-master/examples/hello-mui/fonts/mui-icons-extra.ttf';
import VueRouter from 'vue-router';
import router from './router.js';
import VueResource from 'vue-resource';

import { Swipe, SwipeItem, Header, InfiniteScroll } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(VueRouter);
Vue.use(InfiniteScroll);
Vue.component(VueResource);


var vm = new Vue({
    el: '#app',
    render: c=> c(app),
    router,
})