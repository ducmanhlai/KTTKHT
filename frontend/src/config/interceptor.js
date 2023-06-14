import axios from "./axios";
import { getToken } from "../services/token";
const axiosApiInstance = axios.create({});

axiosApiInstance.interceptors.request.use((config) => {
  let [accessToken,refreshToken] = getToken()
   
  if(accessToken === null){
    localStorage.clear()
    window.location.href = "/login";
  }

  config.headers = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  return config;
});

axiosApiInstance.interceptors.response.use(
  response  => response,
  async (error) => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
     if(refreshToken){
       let apiResponse = await axios.get(
           axios.defaults.baseURL + `/api/auth/user/refresh/${refreshToken}`
       );
       if(apiResponse.data.status && apiResponse){
         // alert("Da Refresh Token")
         const [accessToken,refreshToken] = getToken()
         //alert("Da set Token moi")
         error.config.headers = {
           'Authorization': `Bearer ${accessToken}`
         }
         window.location.reload()
       }
       else {
         localStorage.clear()
         window.location.href = "/login";
       }
     }
      /*error.config.headers[
        "Authorization"
      ] = `Bearer ${apiResponse.data.accessToken}`;*/
      //return axios(error.config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosApiInstance;