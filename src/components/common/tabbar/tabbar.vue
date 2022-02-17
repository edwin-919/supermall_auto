<template>
    <div id="tabbar">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'tabbar'
  }
</script>

<style>
  #tabbar {
    background-color: #f2f2f2;
    height: 49px;
    display: flex;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    box-shadow: 0px -2px 10px rgba(100,100,100,0.2);  /* x 右 y 下 scope color */
  }
</style>
