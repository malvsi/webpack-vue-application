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
// 按需导入 mint-ui
// import { Swipe, SwipeItem, Header, InfiniteScroll, Button } from 'mint-ui';

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

Vue.use(VuePreview);
Vue.use(MintUi);
Vue.component('comment', comment);
Vue.component(VueResource);
Vue.use(VueRouter);

Vue.http.options.emulateJSON = true;

Vue.filter('formatDate', function (data, patter = 'YYYY-MM-DD HH:mm:SS') {
    return moment(data).format(patter);
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
})