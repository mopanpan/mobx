import require from '../utils/request';

export function monet(){
   return require.get('/')
}

export function getClassify(params){
   return require.get('/catalog/index',{params})
}
