import request from '../utils/request';

// 根据制造商ID获取制造商详情
export function brandDetail(params) { // /brand/detail 26
  console.log(params)
  return request.get('/brand/detail',{params});  
}



//  获取商品详情
export function productDetails(params) { // 
  console.log(params)
  return request.get('/goods/detail',{params});  
}

// 相关商品
export function relatedProducts(params){
  return request.get('/goods/related',{params});
}

