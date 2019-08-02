import axios from 'axios'

import {getToken} from '../utils/index.js'

// create an axios instance
const service = axios.create({  // 前端的接口
  // baseURL:'http://169.254.12.22:8888',
   baseURL:'http://169.254.12.254:8888',
  //  baseURL:'http://192.168.43.175:8888',
  //  baseURL:'http://127.0.0.1:8888',
   timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // 判断是否有登陆态
    if (getToken()) {
      // 让每个请求携带authorization
      config.headers['x-nideshop-token'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response.data,
  error => {
    return Promise.reject(error)
  }
)
export default service
