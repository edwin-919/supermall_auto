import {ADD_COUNT,ADD_TO_CART} from './mutations_type'
export default{
    judgeCount(context,payload){
      return new Promise((resolve,reject) => {
        let oldProduct = context.state.Cartlist.find(item => item.iid === payload.iid) //find: 查找数组返回条件成立的元素
        if(oldProduct){
          context.commit(ADD_COUNT,oldProduct)
          resolve('增加数量')
        }else{
          payload.count = 1
          context.commit(ADD_TO_CART,payload)
          resolve('增加至购物车')
        }
      })
    }
  }
