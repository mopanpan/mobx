import require from '../utils/request';

//专题详情评论
export function getSpecialDetailList(params){
   return require.get('/comment/list',{params})
}