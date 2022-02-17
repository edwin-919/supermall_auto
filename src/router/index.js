import Vue from 'vue'
import Router from 'vue-router'
import First from 'views/first/first.vue'
import Second from 'views/second/second.vue'
import Third from 'views/third/third.vue'
import Fourth from 'views/fourth/fourth.vue'
Vue.use(Router)
const routes=[
  {
    path:'/',
    redirect:'/first'
  },
  {
    path:'/first',
    component:First
  },
  {
    path:'/second',
    component:Second
  },
  {
    path:'/third',
    component:Third
  },
  {
    path:'/fourth',
    component:Fourth
  }
]
export default new Router({
  routes,
  mode:'history'
})
