// 1.导入createApp函数
import {createApp} from 'vue'
// 2.导入组件
// import App from './components/yangshicongtu/App.vue'
// import App from './components/zu-jian-ku/App.vue'
// import App from './components/zi-ding-yi-shi-jian/App.vue'
// import App from './components/v-model/App.vue'
import App from './components/axios/app.vue'
// import './index.css'
// 导入全局注册的组件
import swiper from './components/ceshi/swiper.vue'

import axios from 'axios'

// 3创建实例
const app = createApp(App)

console.log(swiper.name)
// 注册全局组件
app.component(swiper.name , swiper)
// 配置根路径
axios.defaults.baseURL='https://www.escook.cn'
// 全局挂载
app.config.globalProperties.$http = axios
// 4.渲染的位置是
app.mount('#app')

