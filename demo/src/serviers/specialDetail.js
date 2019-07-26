import require from '../utils/request';

export function getSpecialDetail(params){
   return require.get('http://123.206.55.50:8888/topic/detail',params)
}