<template>
  <div>
    <nav-bar class="cartBar" >
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list>
    </cart-list>
    <cart-bottom></cart-bottom>
  </div>

</template>

<script>
  import navBar from 'components/common/navBar/navbar'
  import CartList from './childCpn/cartList'
  import CartBottom from './childCpn/cartBottom'
  import {mapGetters} from 'vuex'
  export default{
    name:'third',
    components:{
      navBar,
      CartList,
      CartBottom
    },
    computed:{
      // cartLength(){
      //   return this.$store.state.Cartlist.length
      // }
      // ...mapGetters(['cartLength','cartList'])
      ...mapGetters({
        length:'cartLength',
        cartlist:'cartList'
      })
    }
  }
</script>

<style scoped>
  .cartBar{
    background-color:var(--color-lint);
    color:#fff;
  }

</style>
