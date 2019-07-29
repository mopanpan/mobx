import require from '../utils/request';
//获取商品查询的相关信息
export function getclassifyHead(){
   return require.get('/search/index')
}

