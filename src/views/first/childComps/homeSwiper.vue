<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default{
    name:'homeSwiper',
    props:{
      banners:{
        type:Array,
        dafault(){
          return []
        },
        required:true
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
</style>
