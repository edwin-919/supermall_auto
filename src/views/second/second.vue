<template>
  <div>
    <h1>second：Tabbar-item</h1>
    <p>1.样式用@import从css文件导入，dom用组件从vue文件导入</p>
    <p>2.抽出tabBar的样式，写入tabBar的style标签内</p>
    <p>3.tabBar.vue使用插槽占位，将具体的tabBar-item抽离</p>
    <p>4.创建tabbar-item.vue，写入内容，APP导入组件</p>
    <p>5.tabbar-item的样式写入style标签内</p>
    <p>6.tabBar-item使用slot占位，使得图片和文字在APP中定义</p>
    <p>7.APP: < tagBar >< tagBar-item >文字，图片</p>
    <p>8.最后可将路径从APP抽离到单独的文件中</p>
  </div>

</template>

<script>
  export default{
    name:'second'
  }
</script>

<style>
</style>
