<template>
  <div class="check" :class="{chkBtn:isCheck}">
    <img src="~assets/img/tick.svg" >
  </div>
</template>

<script>
  export default{
    name: 'CheckBtn',
    props:{
      isCheck:{
        type:Boolean,
        default(){
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .check{
    border: solid 2px gray;
    border-radius: 50%;
  }
  .chkBtn{
    background-color: var(--color-high);
  }
</style>
