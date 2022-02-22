import {request1} from './request'
export function getHomedata(){
  return request1({
    url:'/home/multidata'
  })
}
export function getHomegoods(type,page){
  return request1({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}
