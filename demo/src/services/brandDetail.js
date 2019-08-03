import request from '../utils/request';

// 根据制造商ID获取制造商详情
export function brandDetail(params) { // /brand/detail 26
  console.log(params)
  return request.get('/brand/detail',{params});  
}

//  获取商品详情   // 新品首发 点击新品首发跳到详情页
export function productDetails(params) { // 
  console.log(params)
  return request.get('/goods/detail',{params});  
}

//   /cart/goodscount
// export function QuantityCommodities(){return request.get('/cart/goodscount')}   

//   /goods/detail  id

//   /goods/related  id: 1127047

// 点击收藏   /collect/addordelete  POST  typeId: 0   valueId: "1127047"

// 点击加入购物车 出来遮罩和弹框 如果没有商品数量的话就不能触发 如果点击弹框里面的加减就会有商品数量 再点击加入购物车商品就加进购物车页面里的视图里  /cart/add  POST   goodsId: "1127047 number: 6  productId: 182   

//   /cart/goodscount

// 点击X号 遮罩和弹框消失  点击遮罩  遮罩和阴影消失

// 相关商品
export function relatedProducts(params){
  return request.get('/goods/related',{params});
}

// 人气推荐  /goods/detail
// export function recomment(){
//   return request.get('')
// }


//  /topic/detail  根据专题Id获取 点击专题精选 进入详情页
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
