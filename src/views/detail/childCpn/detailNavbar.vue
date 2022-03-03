<template>
  <div>
    <nav-bar class="navbar">
      <div slot="left" class="back" @click="back">
        <img src="~assets/img/up.png" >
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in title" class="title-item" @click="titleClick(index)"
        :class="{active:curIndex === index}">
        {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/navbar'
  export default{
    name:'DetailNavBar',
    components:{
      NavBar
    },
    data(){
      return {
        title:['商品','参数','评论','推荐'],
        curIndex:0,
      }
    },
    methods:{
      titleClick(index){
        this.curIndex =  index
        this.$emit('ItemClick',index)
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .navbar{
    height: 44px;
    line-height: 44px;
  }
  .title{
    display: flex;
  }
  .title-item{
    flex:1;
  }
  .active{
    color:var(--color-high)
  }
  .back img{
    width: 40px;
    height: 40px;
  }
</style>
