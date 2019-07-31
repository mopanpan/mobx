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

// 人气推荐  /goods/detail
// export function recomment(){
//   return request.get('')
// }


///topic/detail  根据专题Id获取 点击专题精选 进入详情页
export function getDetails(params){
  return request.get('/topic/detail',{params})
}


// /comment/list 根据专题ID或者商品ID获取评论获取 相关专题 评论
export function comment(params){
  return request.get('/comment/list',{params})
}

///comment/list 点击评论更多 跳转到查看评论更多页面
export function moreComment(params){
  return request.post('/comment/post',params)
}
