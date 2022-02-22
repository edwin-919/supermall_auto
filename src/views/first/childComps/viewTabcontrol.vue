<template>
  <div class="tab-control">
    <div
    v-for="(item,index) in title" class="tb-ctrl-item"
    :class="{active:index === curindex}"
    @click="tabClick(index)"
    >
    <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    name:'viewTabcontrol',
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        curindex:0
      }
    },
    methods:{
      tabClick(index){
        this.curindex=index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style>
  .tab-control{
    display:flex;
    text-align:center;
    line-height:40px;
    background-color: #fff;
  }
  .tb-ctrl-item{
    flex:1;
  }
  .active{
    color:var(--color-high);

  }
  .active span{
    border-bottom: solid 4px var(--color-high);
  }
</style>
