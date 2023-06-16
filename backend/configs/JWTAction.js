import jwt from 'jsonwebtoken'
require('dotenv').config()

const createJWT = (data, type) => {
    let payload = data;
    let key = process.env.JWT_SECRECT
    let token = null
    let keyRefresh = process.env.JWT_SECRECT_REFRESH
    try {
        token = type.localeCompare('REFRESH')==0 ? jwt.sign(payload, keyRefresh, { expiresIn: '7d' }) : jwt.sign(payload, key, { expiresIn: '5h' });
        //Bản chất của refresh token là để xài liên tục không cần đăng nhập
    } catch (e) {
        console.log(e);
    }
    return token;
}


const verifyJWT = (token, type = "") => {
    let key = process.env.JWT_SECRECT;
    let keyRefresh = process.env.JWT_SECRECT_REFRESH
    let data = null
    try {
        let decoded = type.localeCompare('REFRESH') != 0 ? jwt.verify(token, key) : jwt.verify(token, keyRefresh)
        data = decoded
    } catch (e) {
        console.log(e);
    }
    // console.log(data);
    return data
}


export { createJWT, verifyJWT }
