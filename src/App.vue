<template>
  <div id="app">
    <main-tagbar></main-tagbar>
    <keep-alive exclude="Detail"><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import mainTagbar from 'components/content/mainTabbar'
import router from './router'
import store from './store'
export default {
  name: 'App',
  components: {
    mainTagbar
  },
  router,
  store
}
</script>

<style>
	@import "./assets/css/base.css";
</style>
