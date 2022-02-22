<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    name:'scroll',
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll=new BScroll(this.$refs.wrapper,{
        // 图片的宽度或者高度不确定 使用observeImage属性，否则无法滚动
        observeImage:true,
        click:true,  // 启用wrapper中的div点击
        probeType:this.probeType,//3为监听，2为只监听到手动滑动位置，1/0不监听
        pullUpLoad:this.pullUpLoad
      })
      // document.querySelector('.wrapper') 类有多个不好定位
      this.scroll.on('scroll',(position) => {
        this.$emit('scroll',position)
      })
      this.scroll.on('pullingUp',() => {
        this.$emit('pullUp')
      })
    },
    methods:{
      toTop(x,y,time=300){ //time=300 默认值
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        this.scroll && this.scroll.refresh() /*this.scroll && 为this.scroll判空*/
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
</style>
