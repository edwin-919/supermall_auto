<template>
  <div class="second">
    <nav-bar class="sort" >
      <div slot="center">商品分类</div>
    </nav-bar>
    <tab-ctrl :title="['流行','风格','爆款']" @tabClick="TabClick" class="tabctrl"></tab-ctrl>
    <div class="content">
      <sort-list
      :category="category" class="sortlist"
      @SortClick="ChangeSort"
      @DetailClick="ClickDetail"
      />
      <sub-menu :submenu="submenu" class="submenu"></sub-menu>
      <scroll :probe-type="3" :pull-up-load="true" ref="scroll" class="scroll">
        <good-item v-for="(item,index) in detail" :key="index" :gooditem="item" class="gooditem" />
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/navbar'
  import TabCtrl from 'components/content/viewTabcontrol'
  import SortList from './childCpn/sortList'
  import SubMenu from './childCpn/subMenu'
  import GoodItem from 'components/content/good-item'
  import Scroll from 'components/common/Scroll/scroll'

  import {getCategory,getSubcategory,getCategoryDetail} from 'network/category'
  export default{
    name:'second',
    components:{
      NavBar,
      SortList,
      SubMenu,
      TabCtrl,
      GoodItem,
      Scroll
    },
    data(){
      return{
        category:[],
        submenu:[],
        detail:[],
        cur_type:'pop',
        miniKey:0,
        sort:0
      }
    },
    created(){
      getCategory().then(res => {
        this.category = res.data.category.list
      })
    },
    methods:{
      ChangeSort(maitKey){
        getSubcategory(maitKey).then(res => {
          this.submenu = res.data.list
        })
      },
      TabClick(index){
        switch(index){
          case 0:this.cur_type='pop'
          break;
          case 1:this.cur_type='new'
          break;
          case 2:this.cur_type='sell'
          break;
        }
        this.GetDetail()
      },
      ClickDetail(miniKey){
        this.miniKey = miniKey
        this.GetDetail()
      },
      GetDetail(){
          getCategoryDetail(this.miniKey,this.cur_type).then(res => {
            this.detail = res
          })
      }
    }
  }
</script>

<style scoped>
  .second{
    width: 100vw;
  }
  .sort{
    position: relative;
    background-color: var(--color-lint);
    color:#fff;
    z-index: 9;
  }
  .tabctrl{
    position: relative;
    z-index: 9;
  }
  .content{
    height: calc(100vh - 44px - 49px - 40px);
    overflow: hidden;
    display: flex;
  }
  .sortlist{
    flex: 1;
  }
  .submenu{
    flex:1;
  }
  .scroll{
    width: 60%;
    height: 100%;
  }
  .gooditem{
    width: 100%;
  }
</style>
