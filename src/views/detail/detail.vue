<template>
  <div id="detail">
    <detail-navbar class="detailNav" @ItemClick="ItemClick" ref="nav"/>
    <scroll class="content" ref="scroll" :pull-up-load="true" @scroll="contentScroll">
     <detail-swiper :TopImage="Topimage" />
     <detail-baseinfo :baseInfo="baseInfo" />
     <detail-shopinfo :shopInfo="shopInfo"/>
     <detail-goodsinfo :goodsInfo="goodsInfo" @imageLoad="imageLoad"/>
     <detail-paraminfo :paramsInfo="paramInfo" ref="param"/>
     <detail-rateinfo :rateInfo="rateInfo" ref="rate"/>
     <good-list :goods="RecommendInfo" ref="recommend"></good-list>
    </scroll>
    <back-top @click.native="B2T()" v-show="isShowBack"></back-top>
    <detail-bottombar class="bottom" @addCart="AddtoCart()"/>
  </div>
</template>

<script>
  import DetailNavbar from './childCpn/detailNavbar'
  import DetailSwiper from './childCpn/detailSwiper'
  import DetailBaseinfo from './childCpn/detailBaseInfo'
  import DetailShopinfo from './childCpn/detailShopInfo'
  import DetailGoodsinfo from './childCpn/detailGoodsinfo'
  import DetailParaminfo from './childCpn/detailParaminfo'
  import DetailRateinfo from './childCpn/detailRateinfo'
  import DetailBottombar from './childCpn/detailBottombar'


  import Scroll from 'components/common/Scroll/scroll'
  import GoodList from 'components/content/goodlist'
  import {getDetail,getRecommend,Goods,ShopInfo,ParamsInfo,RateInfo} from 'network/detail'
  import {ItemListenerMixin,BackTopMixin} from 'common/mixins'
  import {debounce} from 'common/utils'
  import {mapActions} from 'vuex'
  export default{
    name: 'Detail',
    created(){
      this.id = this.$route.params.id
      getDetail(this.id).then(res => {
        // console.log(res)
        const data = res.result
        this.Topimage = data.itemInfo.topImages
        this.baseInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shopInfo = new ShopInfo(data.shopInfo)
        this.goodsInfo = data.detailInfo
        this.paramInfo = data.itemParams
        this.rateInfo = data.rate.list ? new RateInfo(data.rate.list[0]) : {}
      })
      getRecommend().then(res => {
        // console.log(res)
        this.RecommendInfo = res.data.list
      })
      this.getNavY = debounce(() => {
        this.$nextTick(() => { /*  渲染完成后的周期 */
        this.NavY = []
        this.NavY.push(0)
        this.NavY.push(this.$refs.param.$el.offsetTop)
        this.NavY.push(this.$refs.rate.$el.offsetTop)
        this.NavY.push(this.$refs.recommend.$el.offsetTop)
        this.NavY.push(Number.MAX_VALUE)  /* 增加最大值以简化判断 */
        })
      },200)
    },
    updated(){

    },
    data(){
      return {
        id: null,
        Detailgoods: [],
        Topimage: [],
        baseInfo:{},
        shopInfo:{},
        goodsInfo:{},
        paramInfo:{},
        rateInfo:{},
        RecommendInfo:[],
        NavY:[],
        getNavY:null,
        curindex:0,
      }
    },
    components:{
      DetailNavbar,
      DetailSwiper,
      DetailBaseinfo,
      DetailShopinfo,
      DetailGoodsinfo,
      DetailParaminfo,
      DetailRateinfo,
      DetailBottombar,
      Scroll,
      GoodList,
    },
    mixins:[ItemListenerMixin,BackTopMixin],
    methods:{
      ...mapActions(['judgeCount']),
      imageLoad(){
        this.newRefresh()
        this.getNavY()  /* 只有在图片加载完成后获取的高度才是正确的 */
      },
      ItemClick(index){
        this.$refs.scroll.scrollTo(0,-(this.NavY[index]-44),100)
    },
    contentScroll(position){
      this.ShowBacktop(position)
      const positionY = -position.y
      let length = this.NavY.length
      for(let i = 0;i<length;i++){
        // if(this.curindex !== i &&
        // ((i<length-1 && positionY>=this.NavY[i] && positionY<this.NavY[i+1]) || (i==length-1 &&positionY>this.NavY[i]))
        // )
        if(this.curindex !== i && (i<length-1 && positionY>=this.NavY[i] && positionY<this.NavY[i+1]))
        {
          // console.log(i+'_'+this.curindex)
          this.curindex = i
          this.$refs.nav.curIndex=this.curindex
        }
      }
    },
    AddtoCart(){
      const product = {}
      product.image = this.Topimage[0]
      product.title = this.baseInfo.title
      product.desc = this.baseInfo.desc
      product.price = this.baseInfo.realPrice
      product.iid = this.id
      this.judgeCount(product).then(res => {
        this.$toast.show(res,1500)
      })
    }
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
   /* border: solid; */
  }
  .content{
    height: calc(100vh - 44px - 49px);
  }
  .detailNav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .bottom{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
