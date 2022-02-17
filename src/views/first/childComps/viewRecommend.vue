<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" >
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'viewRecommend',
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommend{
    display: flex;
    padding: 10px 0px 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex:1;
    text-align: center;
  }
  .recommend-item img{
    width:64px;
    height:64px;
    margin-bottom: 10px;
  }
</style>
