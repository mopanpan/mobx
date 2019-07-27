import require from '../utils/request';

export function getSpecialDetail(params){
   return require.get('http://127.0.0.1:8888/topic/detail',{params})
}