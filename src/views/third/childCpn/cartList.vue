<template>
  <div class="cartList">
    <scroll :probe-type="3" :pull-up-load="true"  class="cart-content" ref="scroll">
     <cart-item :Product="item" v-for="(item,index) in cartList" :key="index"></cart-item>
    </scroll>
  </div>
</template>

<script>
  import CartItem from './cartItem'
  import Scroll from 'components/common/Scroll/scroll'
  import {mapGetters} from 'vuex'
  export default{
    name:'cartList',
    components:{
      CartItem,
      Scroll
    },
    computed:{
      ...mapGetters(['cartList'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .cartList{
    height: calc(100vh - 44px - 49px - 40px);
  }
  .cart-content{
    height: 100%;
    overflow: hidden;
  }
</style>
