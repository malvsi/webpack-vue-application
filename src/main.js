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
import comment from './components/subcomponents/comment.vue';

// 格式化时间插件
import moment from 'moment';

import { Swipe, SwipeItem, Header, InfiniteScroll, Button } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.component('comment',comment);
Vue.use(VueRouter);
Vue.use(InfiniteScroll);
Vue.component(VueResource);


Vue.filter('formatDate',function(data,patter='YYYY-MM-DD HH:mm:SS') {
    return moment(data).format(patter);
})

var vm = new Vue({
    el: '#app',
    render: c=> c(app),
    router,
})