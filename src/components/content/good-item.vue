<template>
  <div class="good-item" @click="ItemClick">
    <img v-lazy="ShowImage" @load="imgload">
    <div class="good-info">
    <p class="good-title">{{gooditem.title}}</p>
    <span class="good-price">{{gooditem.price}}</span>
    <span class="good-star">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'good-item',
    props:{
      gooditem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgload(){
        // 判断路由向正确的路由发送事件
        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('imgload')
        // } else if(this.$route.path.indexof('/detail')){
        //   this.$bus.$emit('detailImgLoad')
        // }
        this.$bus.$emit('imgload')
      },
      ItemClick(){
        this.$router.push('./detail/'+this.gooditem.iid)
      }
    },
    computed:{
      ShowImage(){
        return this.gooditem.image || this.gooditem.show.img
      }
    }
  }
</script>

<style>
  .good-item img{
    width: 100%;
    height: 80%;
  }
  .good-info{
    font-size: 15px;
  }
  .good-title{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .good-price{
    color: var(--color-high);
    margin-right: 20px;
  }
  .good-info .good-star{
    position: relative;
  }
  .good-star::before{
    content: '';  /* content加长宽显示img */
    width: 15px;
    height: 15px;
    left: -15px;
    top:3px;
    position: absolute;
    background: url('~assets/img/down.png') 0 0/15px 15px; /* url 背景色 position/width height */
  }
</style>
