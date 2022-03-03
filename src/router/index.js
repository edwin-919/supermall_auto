import Vue from 'vue'
import Router from 'vue-router'
const First = () => import('views/first/first')
const Second =() => import('views/second/second')
const Third = () => import('views/third/third')
const Fourth = () => import('views/fourth/fourth')
const Detail = () => import('views/detail/detail')
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
  },
  {
    path:'/detail/:id',
    component:Detail
  }
]
export default new Router({
  routes,
  mode:'history'
})
