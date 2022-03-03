import {debounce} from 'common/utils'
import BackTop from 'components/common/backTop/backTop'
export const ItemListenerMixin = {
  data(){
    return {
      ItemListener:null,
      newRefresh:null,
    }
  },
  mounted(){ /* this.$refs在created中使用可能会未加载 */
      this.newRefresh = debounce(this.$refs.scroll.refresh,200) /* 防抖动：为不让函数执行太多次，生成新函数进行判断再赋值 */
      this.ItemListener = () => { /* $bus事件总线需要在main中定义$bus=new Vue(),从good-item发射 */
      this.newRefresh()
    }
      this.$bus.$on('imgload', this.ItemListener)
  }
}
export const BackTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBack:false
    }
  },
  methods:{
    ShowBacktop(position){
      this.isShowBack = -position.y > 1000
    },
    B2T(){
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}
