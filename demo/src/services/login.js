import require from '../utils/request';
//登录
export function getLogin(params){
   return require.post('/auth/loginByMobile',params)
}





