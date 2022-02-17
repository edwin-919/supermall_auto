<template>
  <div>
   <h1>fourth：Active</h1>
   <p>1.设定两张图片，定义isactive属性为false</p>
   <p>2.v-if=!isactive---当被点击时，显示活跃图片，否则显示非活跃图片</p>
   <p>3.文字的类绑定active:isactive---活跃类显示不同颜色，为防止插槽被替换，这类属性写入包裹的div标签中</p>
   <p>4.设置计算属性isActive:return this.$route.path.indexOf(this.path)!==-1</p>
   <p>5.意为当前点击当前$route(当前活跃路由)的路径是否和props传入的路径值相同</p>
   <p>6.相同返回true则触发文字绑定类和v-if属性,其他item不相同则显示样式相反</p>
   <p>7.动态传入颜色--:style={activeColor--计算属性}</p>
   <p>8.props传入颜色，计算属性使用三目运算符判断当前是否活跃，活跃则显示传入颜色：</p>
   <p>9. return this.isActive?{color:this.activeColor--传入的颜色}:{}</p>
  </div>

</template>

<script>
  export default{
    name:'fourth'
  }
</script>

<style>
</style>
