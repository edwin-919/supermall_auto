<template>
  <div>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
  </div>

</template>

<script>
  export default{
    name:'Toast',
    data(){
      return{
        message:'默认信息',
        isShow:false
      }
    },
    methods:{
      show(message='默认信息', duration=1500){
        this.isShow = true
        this.message = message
        setTimeout(() => {
          this.message = ''
          this.isShow = false
        },duration)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color:#fff;
    background-color: rgba(0,0,0,.6);
    z-index: 999;
  }
</style>
