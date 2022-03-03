import Vue from 'vue'
import App from './App.vue'
import LazyLoad from 'lazy-load'
import Toast from 'components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'
Vue.use(Toast)
// 解决移动端延迟
FastClick.attach(document.body)
//  图片懒加载
Vue.use(VueLazyload,{
  loading:require('./assets/img/paper.png')
})
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
}).$mount('#app')
