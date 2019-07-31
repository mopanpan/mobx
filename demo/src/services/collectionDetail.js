import require from '../utils/request';
//跳collectionDetail详情
export function getCollectionDetail(params){
   return require.get('/goods/detail',{params})
}

