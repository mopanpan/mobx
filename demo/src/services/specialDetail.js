import require from '../utils/request';
//专题详情
export function getSpecialDetail(params){
   return require.get('http://127.0.0.1:8888/topic/detail',{params})
}





