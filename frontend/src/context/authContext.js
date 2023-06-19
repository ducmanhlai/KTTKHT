import { createContext, useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
const AuthContext = createContext();
function AuthContextProvider({ children }) {
    const [user, setUser] = useState(()=>{
        return localStorage.getItem('accessToken') ? jwt_decode(localStorage.getItem('accessToken')) : {}      
    });
    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
} 
export {AuthContext,AuthContextProvider}