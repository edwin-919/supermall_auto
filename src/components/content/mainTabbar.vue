<template>
  <div>
    <div style="border: solid;">
      <p>路径问题：build/webpack.base.conf.js -->resolve:alias --改别名</p>
      <p>直接使用别名防止文件移动时路径错乱问题，dom标签内使用别名要加~符号</p>
    </div>

    <Tabbar class="main-bar">
      <tabbarItem path='/first' activeColor='blue'>
        <img slot="icon" src="~assets/img/down.png" >
        <img slot="cur-icon" src="~assets/img/a3.jpg" >
        <div slot="text">首页</div>
      </tabbarItem>
      <tabbarItem path='/second' activeColor='green'>
        <img slot="icon" src="~assets/img/up.png" >
        <img slot="cur-icon" src="~assets/img/billie.jpg" >
        <div slot="text">服饰</div>
      </tabbarItem>
      <tabbarItem path='/third'>
        <img slot="icon" src="~assets/img/yinfu.png" >
        <img slot="cur-icon" src="~assets/img/dua.jpg" >
        <div slot="text">食品</div>
      </tabbarItem>
      <tabbarItem path='/fourth' activeColor='yellow'>
        <img slot="icon" src="~assets/img/yinyue.jpg" >
        <img slot="cur-icon" src="~assets/img/weekend.jpg" >
        <div slot="text">我的</div>
      </tabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from 'components/common/tabbar/tabbar'
  import tabbarItem from 'components/common/tabbar/tabbarItem'
  export default{
    name:'mainTabbar',
    components: {
      Tabbar,
      tabbarItem
    }
  }
</script>

<style>
  .main-bar{
    z-index: 9;
  }
</style>
