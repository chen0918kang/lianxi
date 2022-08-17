import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式文件
import '@/assets/css/global.less'

// 导入axios
import axios from 'axios'
// 请求路线的配置
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/'
// 挂载原型
Vue.prototype.$http = axios

// 全局echarts挂载
Vue.prototype.$echarts = window.echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
