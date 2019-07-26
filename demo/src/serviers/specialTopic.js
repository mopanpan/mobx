import require from '../utils/request';

export function getSpecialTopic(){
   return require.get('http://123.206.55.50:8888/topic/list')
}