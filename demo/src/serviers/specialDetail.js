import require from '../utils/request';

export function getSpecialDetail(params){
   return require.get('/topic/detail',{params})
}