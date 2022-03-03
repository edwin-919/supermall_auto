export function debounce(func,delay) {
        let timer = null
        return function(...args){
          if(timer) clearTimeout(timer) /* 若原先timer有值，则清除上一次赋值的timer */
          timer = setTimeout(() => {
            func.apply(this,args)
          },delay)
        }
      }
export function formatDate(date, fmt) { /* fmt:格式 */
  /* test 返回 Boolean，查找对应的字符串中是否存在模式 */
  if (/(y+)/.test(fmt)) {  /* RegExp.$1 第一个匹配的对象 */
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      // console.log(RegExp.$1+'_'+RegExp.$1.length)
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}
function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
