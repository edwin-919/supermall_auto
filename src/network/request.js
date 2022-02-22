import axios from 'axios'
const request1=function(config){
  //一、实例化axios使默认属性可以根据情况调用不同的instance
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/hy66/',
    timeout:5000
  })
  //二、拦截器
  //请求拦截器传入函数（成功，失败）
  //可用于修改请求参数，显示请求状态图片，验证登录状态等
  instance.interceptors.request.use(
  config=> {
    return config  //不返回请求数据则无法进行请求操作
  },
    err=>{})
    //响应拦截器:成功返回的是响应数据即请求结果
    instance.interceptors.response.use(
    res=>{
      return res.data //不返回请求数据则是未获取数据状态
    },
    err=>{}
    )
  // 三、发送网络请求
  return instance(config)
}
export {
  request1
}
