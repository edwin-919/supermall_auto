<template>
  <div class="backTop">
    <img src="~assets/img/down.png" >
  </div>
</template>

<script>
  export default{
    name : 'backTop'
  }
</script>

<style>
  .backTop{
    border: solid;
    width: 40px;
    height: 40px;
    position: fixed;
    right: 10px;
    bottom: 70px;
    border-radius: 50%;
    overflow: hidden;
  }
  .backTop img{
    width: 100%;
  }
</style>
