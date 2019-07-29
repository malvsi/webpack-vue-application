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
import {
    Toast
} from "mint-ui";

// 按需导入 mint-ui
// import { Swipe, SwipeItem, Header, InfiniteScroll, Button } from 'mint-ui';

// 注册 Vuex
import Vuex from 'vuex';

// 完整导入 mint-ui
import MintUi from 'mint-ui';
// 导入缩略图插件 vue-preview 通过：cnpm i vue-preview -S 安装github地址：https://github.com/LS1231/vue-preview
import VuePreview from 'vue2-preview';

// 格式化时间插件
import moment from 'moment';

// mui.js 取消严格模式需要安装 cnpm i babel-plugin-transform-remove-strict-mode -D 插件，在babelrc 文件中添加插件配置文件

/* Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(InfiniteScroll);
 */

Vue.use(Vuex);
Vue.use(VuePreview);
Vue.use(MintUi);
Vue.component('comment', comment);
Vue.component(VueResource);
Vue.use(VueRouter);

Vue.http.options.emulateJSON = true;

Vue.filter('formatDate', function (data, patter = 'YYYY-MM-DD HH:mm:SS') {
    return moment(data).format(patter);
})

// 每次刚进入 app 时把本地存储localStorage 中的数据放到 cart 中
var cart = JSON.parse(localStorage.getItem('cart') || '[]');

const store = new Vuex.Store({
    state: {
        cart: cart,
        // cart: [],
    },
    mutations: {
        updateToLocalStorage(state) {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        addGoodsToCart(state, n) { // 在商品详情页中点击加入购物车的逻辑处理

            // 判断 购物车中是否已经存在某一个商品id的数据信息
            // 如果存在 则把当前商品数据的 count 加上目前添加的数量
            // 如果没有，则把目前的商品数据信息 push 到 cart 数组中

            var flag = false;
            flag = state.cart.some(item => {

                if (item.id === n.id) {
                    var currentcount = item.count + parseInt(n.count);
                    if (currentcount > n.max) {
                        item.count = item.max;
                        Toast({
                            message: "购买数量超过库存...",
                            position: "bottom",
                            duration: 1000
                        })
                    } else {
                        Toast({
                            message: "加入购物车成功",
                            position: "bottom",
                            duration: 1000
                        });

                        item.count += parseInt(n.count);
                    }
                    return true;
                }
            })


            if (!flag) {
                state.cart.push(n);
            }

            // 加入购物车的同时 也把商品信息 存储到本地存储 localStorage 中
            store.commit('updateToLocalStorage');
        },
        updateGoodsCount(state, info) { // 设置商品购买数量
            state.cart.forEach(item=>{
                if(item.id === info.id) {
                    item.count = parseInt(info.count);
                }
            });

            // 加入购物车的同时 也把商品信息 存储到本地存储 localStorage 中
            store.commit('updateToLocalStorage');
        },
        updateGoodsSelected(state, o) {     // 更新商品的 selected 选中状态
            state.cart.forEach(item=>{
                if(item.id === o.id) {
                    item.selected = o.selected;
                }
            });

            // 更新 商品 选中状态时，把更新后的数据存储到 本地内存中
            store.commit('updateToLocalStorage');
        },
        delGoodsForId(state, info) {
            state.cart.forEach(item=>{
                if(item.id === info.id) {
                    state.cart.splice(info.index,1);
                }
            });

            // 删除 商品 时，把更新后的数据存储到 本地内存中
            store.commit('updateToLocalStorage');
        },
    },
    getters: {
        getAllCount(state) { // 获取购物车中商品的数量
            if (state.cart.length != 0) {
                var allCount = 0;
                state.cart.forEach(item => {
                    if(item.selected){
                        allCount += parseInt(item.count);
                    }
                });
                return allCount;
            } else {
                return 0;
            }
        },
        getGoodsList(state) { // 获取购物车中 商品的列表
            return state.cart;
        },
        getGoodsCount(state) { // 获取购物车商品的数量
            return state.cart[0].count;
        },
        getGoodsSelected(state) {   // 获取商品的 selected 选中状态
            var o = {};
            state.cart.forEach(item=>{
                o[item.id] = item.selected;
            })
            return o;
        },
        getTotalPrice(state) {
            var total = 0;
            state.cart.forEach(item=>{
                if(item.selected) {
                    total += parseInt(item.price) * parseInt(item.count);
                }
            })
            return total;
        },
        getInitGoodsList(state) {   // 初始化默认在购物车中挂载两条数据
            var list =  [{
                id: 87,
                title: '小米9「6GB+128GB版本直降200元，仅需2799元」',
                count: 2,
                price: 2799,
                max: 8,
                selected: true
            },
            {
                id: 88,
                title: '小米MIX 3「8GB+128GB闪降1000元，到手价2599元」',
                count: 5,
                price: 2599,
                max: 9,
                selected: true
            }];

            state.cart = list;
            return list;
        }
    }
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store, // 挂载 store 状态管理对象
})