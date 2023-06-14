import React, { useEffect, useState } from "react";
import axiosApiInstance from "../../config/interceptor";
export default ()=>{
    const [user,setUser]= useState({});
    useEffect(()=>{
        (async ()=>{
            const result = (await axiosApiInstance.get(axiosApiInstance.defaults.baseURL+'/api/v1/user/getinfo')).data;
        })().catch(err=>{
            console.log(err)
        })
    },[])
    return (
        <div>
            
        </div>
    )
}