import jwt from 'jsonwebtoken'
require('dotenv').config()

const createJWT = (data) => {
    let payload = data;
    let key = process.env.JWT_SECRECT
    let token = null
    try {
        token = jwt.sign(payload, key);
    } catch (e) {
        console.log(e);
    }
    return token;
}
const verifyJWT = (token) => {
    let key = process.env.JWT_SECRECT
    let data = null

    try {
        let decoded = jwt.verify(token, key)
        data = decoded
    } catch (e) {
        console.log(e);
    }
    // console.log(data);
    return data
}


export {createJWT,verifyJWT}
