import Vue from 'vue'
import VueRouter from 'vue-router'
import SellerPage from '../views/SellPage.vue'
import TrendPage from '@/views/TrendPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sellerpage',
    component: SellerPage
  }, {
    path: '/trendpage',
    component: TrendPage
  }
]

const router = new VueRouter({
  routes
})

export default router
