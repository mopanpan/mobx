import require from '../utils/request';
//搜索
export function getSearchHelper(params){
   return require.get('search/index',{params})
}

export function getSearchGoods(params){
   return require.get('goods/list',{params})
}





