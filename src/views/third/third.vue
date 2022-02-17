<template>
  <div>
    <h1>third:Route</h1>
    <p>1.创建component（子组件）并导入index.js,设置path属性</p>
    <p>2.tabbar-item.vue监听点击（在app中写需要写4次，直接在item.vue中写可以实现分离）</p>
    <p>3.props定义path属性，app中< item path='/path'>，得以将/path传入item.vue的path属性</p>
    <p>4.方法：this.$router.push(this.path).catch(err => err)</p>
    <p>5.将$router.path跳转到传入的路径，catch方法防止重复点击路由的报错</p>
  </div>

</template>

<script>
  export default{
    name:'third'
  }
</script>

<style>
</style>
