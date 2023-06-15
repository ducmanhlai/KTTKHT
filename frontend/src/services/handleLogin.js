import axiosApiInstance from '../config/interceptor';
import axios from '../config/axios';
import { setToken } from './token';
export default async (username,password)=>{
  const result = (await axios.post(axiosApiInstance.defaults.baseURL+'/api/v1/auth/login',{email:username,password})).data;
  if( result.errCode==0){
   setToken(result.accessToken,result.refreshToken)
   setTimeout(()=>{
     window.location.href= '/'
   },3000)
  }
  return result
}