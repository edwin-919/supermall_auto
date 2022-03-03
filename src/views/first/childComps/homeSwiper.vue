<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="SwiperImgLoad">
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
    data(){
      return {
        isLoad:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      SwiperImgLoad(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad=true
        }
      }
    }
  }
</script>

<style scoped>
</style>
