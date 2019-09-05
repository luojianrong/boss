import axiosInstance from './ajax';

//请求注册的方法
export const reqRegister = (user) => axiosInstance.post('/api/register',user);
