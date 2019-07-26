import request from '../utils/request';
// 获取首页数据
export function homeData() {
  // return request.get('/');
  return request.get('http://123.206.55.50:8888/');
}
  