import axios from "./axios";
import { getToken } from "../services/token";
const axiosApiInstance = axios.create({});

axiosApiInstance.interceptors.request.use((config) => {
  // const [accessToken,refreshToken] = getToken()
  let accessToken= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsInBhc3N3b3JkIjoiJDJ5JDEwJElXZFN0Z1JUM0pYYi5zSmg5a1FDU2VMU1BMdFpCMWZiT3ZoczVlZU5IWi5pVlE1LloyT3c2IiwiZW1haWwiOiJkdWNtYW5oQGdtYWlsLmNvbSIsInBob25lIjoiIiwiY3JlYXRlZF90aW1lIjoiMjAyMy0wNi0wOFQwNjoyNTo0Ny4wMDBaIiwic3RhdHVzIjowLCJpZF9yb2xlIjoxLCJpYXQiOjE2ODY3MzU0MjksImV4cCI6MTY4Njc1MzQyOX0.mhwQ-LYxyl4giTwSq9I0_62p8liifuAcMCtuE9MdK-s'
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