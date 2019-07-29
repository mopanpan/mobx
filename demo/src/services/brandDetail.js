import request from '../utils/request';

// 根据制造商ID获取制造商详情
export function brandDetail(params) { // /brand/detail 26
  console.log(params)
  return request.get('/brand/detail',{params});  
}


// export function brandDetail(params) { // 
//   console.log(params)
//   return request.get('/goods/detail',{params});  
// }


