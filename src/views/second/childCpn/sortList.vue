<template>
  <div class="sortList">
    <scroll :probe-type="3" :pull-up-load="true" class="content" ref="scroll">
        <div v-for="(item,index) in category"
        :key="index"
        class="category" :class="{active:index === cur_index}"
        @click="itemClick(item,index)">
          {{item.title}}
        </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/Scroll/scroll'
  export default{
    name:'SortList',
    components:{
      Scroll
    },
    data(){
      return {
        cur_index:0
      }
    },
    updated(){
      this.$refs.scroll.refresh()
    },
    props:{
      category:{
        type:Array,
        default(){
          return []
        }
    }
  },
  methods:{
    itemClick(item,index){
      this.cur_index = index
      this.$emit('SortClick',item.maitKey)
      this.$emit('DetailClick',item.miniWallkey)
    }
  }
  }
</script>

<style scoped>
  .sortList{
    height: 100%;
  }
  .content{
    height: 100%;
    width: 20vw;
    overflow: hidden;
  }
  .category{
    text-align: center;
    height: 10vh;
    line-height: 10vh;
    background-color: var(--color-high);
    color: black;
    margin-bottom: 2px;
  }
  .active{
    color:#fff;
  }

</style>
