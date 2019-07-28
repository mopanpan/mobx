import require from '../utils/request';

export function getClassify(params){
   return require.get('/catalog/index',{params})
}