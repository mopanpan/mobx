const key = 'x-nideshop-token'
// 设置cookie, 过期时间为十个小时
export function setToken(val){
  console.log(val)
  window.localStorage.setItem(key,val)
}
// 读取cookie
export function getToken(){
 return  window.localStorage.getItem(key) 
}
// 删除cookie
export function removeToken(){
    window.localStorage.removeItem(key)
}
