module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,
      viewportHeight:667,
      unitPrecision:5,  //转换保留的小数位数
      selectorBlackList:[], //不需要转化的类
      minPixeValue:1,  //最小的转化单位
      mediaQuery:false,  //允许媒体查询中转换'px'
      exclude:[/tabbar/]  //排除的文件，需要写入正则
    }
  }
}
