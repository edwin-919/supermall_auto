import {request1} from './request'
export function getHomedata(){
  return request1({
    url:'/home/multidata'
  })
}
