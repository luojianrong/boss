//引入
const axios = require('axios');

//设置基本路径
const BASE_URL = process.env.NODE_ENV  === 'development'?'http://localhost:4000':'http://localhost:5000'

//创建axios实例
const axiosInstance = axios.create({
  baseURL:BASE_URL,
  timeout:100000
})

//设置拦截器/中间件
axiosInstance.interceptors.response.use(
  (response)=>{
    //请求连接成功得回调
    const result = response.data;
    if (result.code === 0){
      //请求成功
      return result.data
    } else if (result.code === 1){
      //请求失败
      return Promise.reject(result.msg)
    }
  },
  (error)=>{
    //请求连接失败的回调
    console.log(error);
    Promise.reject("网络连接失败，请从新刷新试试")
  }
)

export default axiosInstance;
