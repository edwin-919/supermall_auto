<template>
  <div class="subMenu">
    <scroll :probe-type="3" :pull-up-load="true" class="content" ref="scroll">
      <div class="menuItem" v-for="(item,index) in submenu" :key="index">
        <a :href="item.link">
         <p>{{item.title}}</p>
         <img :src="item.image">
        </a>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/Scroll/scroll'
  export default{
    name: 'SubMenu',
    props:{
      submenu:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Scroll
    },
    methods:{
    }
  }
</script>

<style>
  .subMenu{
    width: 30vw;
    height: calc(100vh - 44px - 49px);
  }
  .content{
    height: 100%;
  }
  .menuItem{
    text-align: center;
    background-color: var(--color-deep);
    border-bottom: #ccc solid;
  }
  .menuItem img{
    width: 50px;
    height: 50px;
  }
  .menuItem p{
    margin-top: 0;
    color: #fff;
  }
  .menuItem a{
    text-decoration: none;
    color:#fff;
  }
</style>
