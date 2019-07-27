import require from '../utils/request';
//专题详情
export function getSpecialDetail(params){
   return require.get('/topic/detail',{params})
}

