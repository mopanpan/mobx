import request from '../utils/request';

//  购物车  获取用户购物车数据
export function carts(){
   return request.get('/cart/index')
}

//  购物车商品是否选中
export function cartCheck(params){
   return request.post('/cart/checked',params)
}

//  删除商品
export function delAll(params){
   return request.post('/cart/delete',params)
}

// 更新商品数量
export function upCount(params){
   return request.post('/cart/update',params)
}

