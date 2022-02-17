<template>
    <div class="tabbar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="icon"></slot></div>
      <div v-else> <slot name="cur-icon"></slot></div>
      <!-- <div :class="{activeColor:isActive}"><slot name="text"></slot></div> -->
      <div :style="activeStyle"><slot name="text"></slot></div>
    </div>
</template>

<script>
  export default{
    name:'tabbarItem',
    data(){
      return {
        // isActive:false
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    methods:{
      itemClick(){
        this.$router.push(this.path)
        // this.$router.push(this.path).catch(err => err)  //catch防止push方法重复点击路由报错
      }
    }
  }
</script>

<style>
  .tabbar-item {
    flex: 1;
    text-align: center;
    cursor:pointer
  }
  .tabbar-item  img{
    width:25px;
    height: 25px;
    vertical-align: middle; /* 去除图片默认的边距 */
  }
</style>
