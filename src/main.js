// 入口文件
import Vue from 'vue';
import app from './App.vue';
import './lib/mui-master/dist/css/mui.css';
import { Header } from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.component(Header.name, Header);

var vm = new Vue({
    el: '#app',
    render: c=> c(app),
})