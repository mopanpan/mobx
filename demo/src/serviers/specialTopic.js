import require from '../utils/request';

export function getSpecialTopic(){
   return require.get('/topic/list')
}