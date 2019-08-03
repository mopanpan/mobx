import request from '../utils/request';
//获取收藏
export function getCollect(params) {
  console.log(params)
  return request.get('/collect/list', { params })
}
//获取用户地址数据
export function getAddress() {
  return request.get('/address/list')
}
//增加地址
export function addAddress(params) {
  return request.post('/api/address/save', params)
}
//删除地址
export function delAddress(params) {
  return request.post('/api/address/delete', params)
}

//删除收藏
export function delCollect(params){
  return request.post('/api/collect/addordelete',params)
}