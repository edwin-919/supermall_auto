<template>
  <div class="goodlist">
    <good-item v-for="item in goods" :gooditem="item" class="good-item"/>
  </div>
</template>

<script>
  import goodItem from './good-item'
  export default{
    name:'goodlist',
    components:{
      goodItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .goodlist{
    display: flex;
    flex-wrap: wrap; /* 子元素设置宽度后,使用包裹,决定一行包含多少个子元素 */
    justify-content: space-around; /* 空格均等分 */
  }
  .good-item{
    width: 48%;
  }
</style>
