<template>
  <div class="cart-bottom">
    <div class="check-content">
      <check-btn class="btn" :isCheck="isChkAll" @click.native="ChkAll"/>
      <span>全选</span>
    </div>
    <div class="price">
     总价:{{TotalPrice}}
    </div>
    <div class="clac">
      去计算({{TotalLength}})
    </div>
  </div>
</template>

<script>
  import CheckBtn from 'components/content/checkBtn'
  import {mapGetters} from 'vuex'
  export default{
    name:'CartBottom',
    components:{
      CheckBtn
    },
    computed:{
      ...mapGetters(['cartList']),
      TotalPrice(){
        return '￥' + this.cartList.filter(item => item.check)
        .reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0)
      },
      TotalLength(){
        return this.cartList.filter(item => item.check).length
      },
      isChkAll(){
        if(this.cartList.length === 0) return false
        // 方法1:
        // return !this.cartList.filter(item => !item.check).length /* 有一个不选中，长度便有值，取反返回false，不全选*/
        // 方法2:
        return !this.cartList.find(item => !item.check)
        // 方法3:
        // for(let item of this.cartList){
        //   if(!item.check){
        //     return false
        //   }
        // }
        // return true
      }
    },
    methods:{
      ChkAll(){
        if(this.isChkAll){
          this.cartList.forEach(item => item.check=false)
        }else{
          this.cartList.forEach(item => item.check=true)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom{
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    display: flex;
  }
  .check-content{
    width: 80px;
    display: flex;
    align-items: center;
  }
  .btn{
    width: 20px;
    height: 20px;
    line-height: 26px;
    margin-right: 4px;
  }
  .price{
    flex: 1;
  }
  .clac{
    width: 80px;
    background-color: red;
  }
</style>
