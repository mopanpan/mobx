import require from '../utils/request';

export function monet(){
   return require.get('/')
}
//根据分类ID获取当前分类信息和子分类
export function getClassify(params){
   return require.get('/catalog/current',{params})
}

//根据分类Id或者制造商Id获取商品
export function getClassifyList(params){
   return require.get('/goods/list',{params})
}
