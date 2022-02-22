<template>
  <div id="first" class="wrapper"> <!-- 引用文件里的wrapper和content类用于设置样式 -->
    <nav-bar class="fir-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll"
    :probe-type="3" :pull-up-load="true"
    @scroll="ScrollContent" @pullUp="LoadMore">
      <home-swiper :banners="banners" class="home-swiper"></home-swiper>
      <recommend :recommend="recommend"></recommend>
      <feature></feature>
      <tabctrl :title="['流行','风格','爆款']" class="tab-ctrl" @tabClick="TabClick"></tabctrl>
      <goodlist :goods="showGoods"></goodlist>
    </scroll>
    <back-top @click.native="B2T()" v-show="isShowBack"></back-top>
    <router-view></router-view>
   <div class="text">
      <h1>first:CSS</h1>
      <p>1.在APP写入dom和样式</p>
      <p>2.加入背景色和阴影box-shadow：x y scope rgba();向上发散y取负值</p>
      <p>3.display:flex--横向，子项目-flex:1--均匀分布</p>
      <p>4.position:fixed;bottom:0;lef:0;right:0--置底</p>
      <p>5.img->vertical-align:middle--去除图片默认边距</p>
    </div>
  </div>
</template>

 <script>
  import navBar from 'components/common/navBar/navbar'

  import homeSwiper from 'views/first/childComps/homeSwiper'
  import Recommend from 'views/first/childComps/viewRecommend'
  import Feature from 'views/first/childComps/viewFeature'
  import Tabctrl from 'views/first/childComps/viewTabcontrol'
  import Goodlist from 'components/content/goodlist'
  import Scroll from 'components/common/Scroll/scroll'
  import BackTop from 'components/common/backTop/backTop'

  import {getHomedata,getHomegoods} from 'network/home'

  export default{
    name:'first',
    components:{
      navBar,
      homeSwiper,
      Recommend,
      Feature,
      Tabctrl,
      Goodlist,
      Scroll,
      BackTop
    },
    data(){
      return {
        result:null,
        banners:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        cur_type:'pop',
        isShowBack:false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.cur_type].list
      }
    },
    created(){
      this.getHomedata()
      this.getHomegoods('pop')
      this.getHomegoods('new')
      this.getHomegoods('sell')
    },
    mounted(){ /* this.$refs在created中使用可能会未加载 */
      this.$bus.$on('imgload', () => { /* $bus事件总线需要在main中定义$bus=new Vue(),从good-item发射 */
        this.$refs.scroll.refresh()
      })
    },
    methods:{
      TabClick(index){
        switch(index){
          case 0:this.cur_type='pop'
          break;
          case 1:this.cur_type='new'
          break;
          case 2:this.cur_type='sell'
          break;
        }
      },
      B2T(){
        this.$refs.scroll.toTop(0,0)
      },
      ScrollContent(position){
        this.isShowBack = -position.y > 1000
      },
      LoadMore(){
        this.getHomegoods(this.cur_type)
        this.$refs.scroll.finishPullUp()

      },
      getHomedata(){
        getHomedata().then(res => {
          this.result=res
          this.banners=res.data.banner.list
          this.recommend=res.data.recommend.list
        })
      },
      getHomegoods(type){
        const page=this.goods[type].page+1
        getHomegoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list) //将数组解构后加入另一个数组内
          this.goods[type].page+=1
        })
      }
    }
  }
</script>

<style scoped>
   /* scoped:只在当前文件生效 */
   #first{
     height: 100vh;  /* vh:viewport height 视口高度(使用的终端高度) */
     position: relative;
   }
  .fir-nav{
    box-shadow: 1px 1px 1px rgba(100,100,100,.1);
    background-color: var(--color-lint);
  }

  .tab-ctrl{
    position: sticky; /* 根据位置选定是否为static或fixed属性 */
    top:0px;
    z-index: 9;
  }
.content{
    overflow: hidden;
    height:calc(100% - 207px);
    }
     /* calc()运算符前后带空格 */
     /* 定位方法 */
/* .content{
    overflow: hidden;
    height: 300px;
    position:absolute;
    top:170px;
    bottom: 49px;
  }
  .text{
    position: absolute;
    bottom: 0px;
    left: 0px;
  } */
</style>
