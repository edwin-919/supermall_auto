<template>
  <div id="first"> <!-- 引用文件里的wrapper和content类用于设置样式 -->
    <nav-bar class="fir-nav"><div slot="center">购物街</div></nav-bar>
    <tabctrl :title="['流行','风格','爆款']" @tabClick="TabClick" ref="tabCtrl1" v-show="isTabFix"></tabctrl>
    <scroll class="wrapper" ref="scroll"
    :probe-type="3" :pull-up-load="true"
    @scroll="ScrollContent" @pullUp="LoadMore">
      <home-swiper :banners="banners" class="home-swiper" @swiperImgLoad="SwiperImgLoad"></home-swiper>
      <recommend :recommend="recommend"></recommend>
      <feature></feature>
      <tabctrl :title="['流行','风格','爆款']" @tabClick="TabClick" ref="tabCtrl2" v-show="!isTabFix"></tabctrl>
      <goodlist :goods="showGoods"></goodlist>
    </scroll>
    <back-top @click.native="B2T()" v-show="isShowBack"></back-top>
    <router-view></router-view>
  </div>
</template>

 <script>
  import navBar from 'components/common/navBar/navbar'

  import homeSwiper from 'views/first/childComps/homeSwiper'
  import Recommend from 'views/first/childComps/viewRecommend'
  import Feature from 'views/first/childComps/viewFeature'
  import Tabctrl from 'components/content/viewTabcontrol'
  import Goodlist from 'components/content/goodlist'
  import Scroll from 'components/common/Scroll/scroll'

  import {getHomedata,getHomegoods} from 'network/home'
  import {debounce} from 'common/utils'
  import {ItemListenerMixin,BackTopMixin} from 'common/mixins'

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
        tabOffsetTop:0,
        isTabFix:false,
        PositionY:0,
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.cur_type].list
      }
    },
    mixins:[ItemListenerMixin,BackTopMixin],
    created(){
      this.getHomedata()
      this.getHomegoods('pop')
      this.getHomegoods('new')
      this.getHomegoods('sell')
    },
    mounted(){ /* this.$refs在created中使用可能会未加载 */
    },
    destroyed(){
      // console.log('destroyed')
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.PositionY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      // 保存Y位置
      this.PositionY = this.$refs.scroll.getSaveY()
      // 取消事件,防止离开后子组件继续向此页面发送事件
      this.$bus.$off('imgload',this.ItemListener)
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
        this.$refs.tabCtrl1.curindex = index /* 防止置顶表单和原表单点击位置不一致 */
        this.$refs.tabCtrl2.curindex = index
      },
      ScrollContent(position){
        this.ShowBacktop(position)
        this.isTabFix = (-position.y) > (this.tabOffsetTop - 40)
      },
      LoadMore(){
        this.getHomegoods(this.cur_type)
        this.$refs.scroll.finishPullUp()
      },
      SwiperImgLoad(){
        // console.log(this.$refs.tabCtrl2.$el.offsetTop)
        this.tabOffsetTop = this.$refs.tabCtrl2.$el.offsetTop
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
    position: relative;
    z-index: 1;
  }

/* .tab-ctrl{
    position: sticky;  /* 根据位置选定是否为static或fixed属性 *
  } */
.wrapper{
    overflow: hidden;
    height:calc(100% - 93px);
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
