import {request1} from './request'
export function getDetail(iid){
  return request1({
    url:'/detail',
    params: {
      iid
    }
  })
}
export function getRecommend(){
  return request1({
    url:'/recommend'
  })
}
export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.cSells = shopInfo.cSells;
  }
}

export class ParamsInfo {
  constructor(paramsInfo) {
    this.info = paramsInfo.info;
    this.rule = paramsInfo.rule;
    this.images = paramsInfo.info.images ? paramsInfo.info.images[0] : "";
    this.disclaimer = paramsInfo.rule.disclaimer
      ? paramsInfo.rule.disclaimer
      : "";
  }
}

export class RateInfo {
  constructor(rate) {
    this.user = rate.user;
    this.content = rate.content;
    this.created = rate.created;
    this.style = rate.style;
    this.extraInfo = rate.extraInfo ? rate.extraInfo : "";
    this.images = rate.images ? rate.images : "";
    this.explain = rate.explain ? rate.explain : "";
  }
}
