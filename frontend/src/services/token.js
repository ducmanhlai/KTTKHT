function setToken(accessToken,refreshToken){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('refreshToken',refreshToken);
}
function getToken(){
   return  [localStorage.getItem('accessToken'),localStorage.getItem('refreshToken')]
}
export {setToken,getToken}