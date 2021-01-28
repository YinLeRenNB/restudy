import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式重制文件和rem计算文件
import './assets/css/reset.css'
import './assets/js/rem.js'

// 引入三方文件
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
