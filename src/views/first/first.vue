<template>
  <div id="first">
    <nav-bar class="fir-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommend="recommend"></recommend>
    <router-view></router-view>
    <h1>first:CSS</h1>
    <p>1.在APP写入dom和样式</p>
    <p>2.加入背景色和阴影box-shadow：x y scope rgba();向上发散y取负值</p>
    <p>3.display:flex--横向，子项目-flex:1--均匀分布</p>
    <p>4.position:fixed;bottom:0;lef:0;right:0--置底</p>
    <p>5.img->vertical-align:middle--去除图片默认边距</p>
  </div>
</template>

<script>
  import navBar from 'components/common/navBar/navbar'
  import homeSwiper from 'views/first/childComps/homeSwiper'
  import Recommend from 'views/first/childComps/viewRecommend'
  import {getHomedata} from 'network/home'

  export default{
    name:'first',
    components:{
      navBar,
      homeSwiper,
      Recommend
    },
    data(){
      return {
        result:null,
        banners:[],
        recommend:[]
      }
    },
    created(){
      getHomedata().then(res => {
        this.result=res
        this.banners=res.data.banner.list
        this.recommend=res.data.recommend.list
      })
    }
  }
</script>

<style>
  .fir-nav{
    box-shadow: 1px 1px 1px rgba(100,100,100,.1);
    background-color: var(--color-lint);
  }
</style>
