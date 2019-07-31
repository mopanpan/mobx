import require from '../utils/request';
//我的收藏
export function getCollection(params){
   return require.get('/collect/list',params)
}





