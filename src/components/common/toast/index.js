import Toast from './toast.vue'
const obj = {}
obj.install = function(Vue){
  // 创建toast组件
  const toastConstructor = Vue.extend(Toast)
  const toast = new toastConstructor()
  // 将toast挂载到body
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  // 原型赋值:通过组件构造器构造的对象
  Vue.prototype.$toast = toast
}
export default obj
