import require from '../utils/request';

export function getSpecialTopic(){
   return require.get('http://127.0.0.1:8888/topic/list')
}