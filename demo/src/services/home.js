import request from '../utils/request';
// 获取首页数据
export function homeData() {
  return request.get('http://127.0.0.1:8888/');  
  // return request.get('http://123.206.55.50:8888/');
}

//  获取首页居家的详情数据
export function livingHomeDetail(){
  return request.get('http://127.0.0.1:8888/catalog/index')
}
  