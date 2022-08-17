import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入登录组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'
// 导入左侧侧边栏组件
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Rights from '@/components/menus/MyRights.vue'
import Setting from '@/components/menus/MySettings.vue'
import Users from '@/components/menus/MyUsers.vue'
//导入用户详情页
import UserDetail from '@/components/user/MyUserDetail.vue'



Vue.use(VueRouter)
 


const router = new VueRouter({
routes:[
  // 登录的路由规则
  {path:'/',redirect: '/Login'},//重定向
{path:'/login',component: Login },
// 后台首页的路由规则

{   path:'/home',
    component:Home,
    redirect:'/home/users',
    children:[
      {path:'goods',component: Goods  },
      {path:'orders',component: Orders  },
      {path:'rights',component:  Rights },
      {path:'settings',component:  Setting },
      {path:'users',component:  Users },
      // 用户详情页的路由规则  在路由规则中才能出现：号
      {path:'userinfo/:id',component: UserDetail ,props:true}
    ]

}
]
})


// 全局前置守卫
router.beforeEach((to,from,next) =>{
if(to.path === '/home' ){
// 假如有多条权限
// 1 ： const pathArr = ['/home','/home/users','/home/rights'];
// if(pathArr.indexOf(to.path)!==-1){}
// 1.1太多的话可以先建一个js文件，然后导入进来  命名为xx，然后在if中（xx.indexof(to.path)!==-1）
// 2： 或者在if(||  addw||  拿||隔开);

  const token = localStorage.getItem('token')
  if(token){
next();
  }else{
next('/login');
  }
}else{
next();
}


})


export default router