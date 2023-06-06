import Model from '../configs/sequelize'
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);
import { createJWT } from '../services/JWTAction'
import auth from "../../backend/middleware/authenJWT"

class authController {

    //user login
    async login(req, res) {
        try {
            let data = req.body
            let userData = {}

            //check email User tồn tại
            let isExistUser = await checkUserEmail(data.email)
            console.log('Check tồn tại: ', isExistUser);
            //check email Admin tồn tại
            let isExistAdmin = await checkUserEmailAdmin(data.email)
            console.log('Check tồn tại: ', isExistAdmin);
            //Check email tồn tại
            if (isExistUser) {
                // const [rows] = await pool.execute('SELECT * FROM account where email=?', [email])
                const userDataDb = await Model.account.findOne({ where: { email: data.email, id_role: 1 } })

                //Check password: So sánh password
                let checkPass = bcrypt.compareSync(data.password, userDataDb.password)

                console.log('Password: ', checkPass);
                if (checkPass) {
                    let data = userDataDb//lấy object
                    //let data = rows[0]
                    userData.errCode = 0;
                    userData.message = 'Đăng nhập thành công';
                    delete data['password']// bỏ cái password nhạy cảm
                    userData.user = createJWT(data)//đổi dữ liệu ng dùng thành tokten
                    console.log(userData.user);
                    console.log('Data', data);
                }
                else {
                    userData.errCode = 2;
                    userData.message = 'Sai mật khẩu.Vui lòng kiểm tra lại'
                }
            }
            //Check email tồn tại
            else if (isExistAdmin) {
                // const [rows] = await pool.execute('SELECT * FROM account where email=?', [email])
                const userDataDb = await Model.account.findOne({ where: { email: data.email, id_role: 2 } })

                //Check password: So sánh password
                let checkPass = bcrypt.compareSync(data.password, userDataDb.password)

                console.log('Password: ', checkPass);
                if (checkPass) {
                    let data = userDataDb//lấy object
                    //let data = rows[0]
                    userData.errCode = 0;
                    userData.message = 'Đăng nhập thành công';
                    delete data['password']// bỏ cái password nhạy cảm
                    userData.user = createJWT(data)//đổi dữ liệu ng dùng thành tokten
                    console.log(userData.user);
                    console.log('Data', data);
                }
                else {
                    userData.errCode = 2;
                    userData.message = 'Sai mật khẩu.Vui lòng kiểm tra lại'
                }
            }
            else {
                userData.errCode = 1
                userData.message = 'Tên đăng nhập không tồn tại'
            }
            return res.status(200).json(userData)
        } catch (e) {
            // reject(error)
            console.log(e);
        }
    }

    async signUp(req, res) {
        try {
            let data = req.body
            let test = await createNewUser(data)
            console.log(test);
            return res.status(200).json(test)
        } catch (e) {
            console.log(e);
        }
    }

    async testMiddleware(req, res) {
        try {
            let id_account = auth.tokenData(req)
            console.log(req);
            if (id_account) {
                return res.status(200).json({
                    errCode: 0,
                    message: 'Thành công'
                })
            }
            else {
                return res.status(400).json({
                    errCode: 1,
                    message: 'Thất bại'
                })
            }

        } catch (e) {
            console.log(e);
        }
    }
}

//Check email user tồn tại
let checkUserEmail = async (email) => {
    try {
        let check = await Model.account.findOne({ where: { email: email, id_role: 1 } })
        console.log(check);
        if (check) {
            return true
        }
        else {
            return false
        }
    }
    catch (e) {
        console.log(e);
    }
}

//Check email admin tồn tại
let checkUserEmailAdmin = async (email) => {
    try {
        let check = await Model.account.findOne({ where: { email: email, id_role: 2 } })
        console.log(check);
        if (check) {
            return true
        }
        else {
            return false
        }
    }
    catch (e) {
        console.log(e);
    }
}

let hashUserPassword = async (password) => {

    try {
        let hashPassword = bcrypt.hashSync(password, salt);
        return hashPassword
    } catch (e) {
        console.log(e);
    }
}

let createNewUser = async (data) => {
    try {
        let check = await checkUserEmail(data.email);
        if (check) {
            return ({
                errCode: 1,
                message: 'Email đã được sử dụng. Vui lòng nhập email khác!'
            })
        }
        else {
            let hash = await hashUserPassword(data.password)
            console.log(hash);
            await Model.account.create({
                email: data.email,
                password: hash,
                phone: '',
                status: 0,
                id_role: 1,
            })
            return ({
                errCode: 0,
                message: 'Đăng ký thành công',
            })
        }
    } catch (e) {
        console.log(e);
    }
}

export default new authController()