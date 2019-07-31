import request from '../utils/request';
// 获取首页数据
export function homeData() {
  return request.get('/');  
  // return request.get('http://123.206.55.50:8888/');
}

//  * 获取分类ID分类Nav数据livingHomeDetail
export function livingHomeDetail(params){  // 25
  // console.log('ididid',params)
  // return request.get(`/goods/category?id=${params.id}`)
  return request.get('/goods/category',{params})
}

//  获取首页居家的详情数据
// export function livingHomeDetail(){
//   return request.get('/catalog/index')
// }

// {brandId,categoryId,sort:{id,price},order,page,size}

//  奇趣分类的数据
export function Manufacturer({categoryId,page,size}){
  return request.get('/goods/list',{params:{categoryId,page,size}})
}

// export function Manufacturer(params){
//   return request.get('/goods/list',params)
// }

// export function Manufacturer({brandId,categoryId,sort,order,page,size}){ // 8
//   // return request.get('/goods/list',{params:{brandId,categoryId,sort,order,page,size}})
//   return request.get(`/goods/list?id=${brandId}`)
// }


  