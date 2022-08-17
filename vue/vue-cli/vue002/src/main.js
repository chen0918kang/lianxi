// 导入vue这个包，得到vue构造函数
import Vue from 'vue'
// 导入app.vue根组件，将来要把app.vue中的模板结构，渲染到html页面中
import App from './App.vue'
import Test from './Test.vue'
// 防止浏览器控制控制台打印警告信息
Vue.config.productionTip = false
// 创建Vue的实例对象
new Vue({
  // el:'#app',            //el:'#app',  和.$mount('#app')  代码效果一样就是指定他渲染的区域
  // 把render 函数指定的组价，来渲染到html页面中
// rander 函数中，渲染的是哪个.vue组件，那这个组件就是“根组件”
  render: h => h(Test),
}).$mount('#app')
