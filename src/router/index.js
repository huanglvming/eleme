import Vue from "vue"
import Router from "vue-router"
import goods from "../components/content/goods.vue"
import seller from "../components/content/seller.vue"
import ratings from "../components/content/ratings.vue"

Vue.use(Router)

const routes = [
  {path: '/',redirect:"/goods"},
  {path: '/goods',component: goods},
  {path: '/seller',component: seller},
  {path: '/ratings',component: ratings},
]

export default new Router({
	linkActiveClass:'tab-active',
	routes
})

