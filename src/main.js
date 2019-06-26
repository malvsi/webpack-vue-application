// 入口文件
import Vue from 'vue';
import app from './App.vue';
import './lib/mui-master/dist/css/mui.css';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui-master/examples/hello-mui/css/icons-extra.css';
import './lib/mui-master/examples/hello-mui/fonts/mui-icons-extra.ttf'
import VueRouter from 'vue-router';
import router from './router.js'

Vue.use(VueRouter);

Vue.component(Header.name, Header);

var vm = new Vue({
    el: '#app',
    render: c=> c(app),
    router,
})