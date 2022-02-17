<template>
  <div id="app">
    <main-tagbar></main-tagbar>
    <router-view></router-view>
  </div>
</template>

<script>
import mainTagbar from 'components/content/mainTabbar'
import router from './router'
export default {
  name: 'App',
  components: {
    mainTagbar
  },
  router
}
</script>

<style>
	@import "./assets/css/base.css";
</style>
