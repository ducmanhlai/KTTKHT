import Model from '../configs/sequelize'
import bcrypt from 'bcryptjs';
import { createJWT, verifyJWT } from '../configs/JWTAction';
import auth from "../../backend/middleware/authenJWT";
import mail from '../services/mail';
const salt = bcrypt.genSaltSync(10);

class authController {
    //user login
    async login(req, res) {
        try {
            let data = req.body
            let userData = {}

            //check email User và Admin tồn tại
            let isExist = await checkUserEmail(data.email)
            console.log('Check tồn tại: ', isExist);
            //Check email tồn tại
            if (isExist) {
                // const [rows] = await pool.execute('SELECT * FROM account where email=?', [email])
                const userDataDb = await Model.account.findOne({ where: { email: data.email } })

                //Check password: So sánh password
                let checkPass = bcrypt.compareSync(data.password, userDataDb.password)

                console.log('Password: ', checkPass);
                if (checkPass) {
                    let data = userDataDb//lấy object
                    //let data = rows[0]
                    userData.errCode = 0;
                    userData.message = 'Đăng nhập thành công';
                    delete data['password']// bỏ cái password nhạy cảm
                    userData.accessToken = createJWT(data.dataValues, 'TOKEN')
                    userData.refreshToken = createJWT(data.dataValues, 'REFRESH')//đổi dữ liệu ng dùng thành tokten

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

    //Đăng ký tài khoản
    async signUp(req, res) {
        try {
            let data = req.body
            console.log('Data:', data);
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

    //Đổi mật khẩu
    async changePassword(req, res) {
        try {
            let id_account = await auth.tokenData(req).id
            const userData = await Model.account.findOne({ where: { id: id_account } })
            let { oldPassword, currentPassword, newPassword } = req.body
            //Check password: So sánh password
            let checkPass = bcrypt.compareSync(oldPassword, userData.password)
            if (checkPass) {
                //Nhập 1 password cũ, 1 password mới
                let hashPasswordFromBcrypt = ''// mã hóa password mới

                console.log(currentPassword, newPassword, id_account);

                if (currentPassword.trim() != newPassword.trim()) {
                    return res.status(200).json({
                        errCode: 1,
                        message: 'Mật khẩu không khớp!'
                    })
                }
                //if(oldPassword == )
                else if (currentPassword.trim() != '' && newPassword.trim() != '') {
                    currentPassword = currentPassword.trim()
                    hashPasswordFromBcrypt = await hashUserPassword(currentPassword)
                    currentPassword = hashPasswordFromBcrypt
                    userData.password = currentPassword;
                    await userData.save();
                    // await pool.execute('update account set password=? where id_account=?', [currentPassword, id_account])
                    return res.status(200).json({
                        errCode: 0,
                        message: 'Đổi mật khẩu thành công!'
                    })
                }
                else {
                    return res.status(500).json({
                        errCode: 2,
                        message: 'Vui lòng không được bỏ trống mật khẩu!'
                    })
                }
            }
            else {
                return res.status(200).json({
                    errCode: 3,
                    message: 'Mật khẩu không hợp lệ. Vui lòng nhập lại!'
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    //Quên mật khẩu
    async forgotPassword(req, res) {
        try {
            let email = req.body.email
            let checkEmail = await checkUserEmail(email)
            if (checkEmail) {
                //Tạo mã code có 6 kí tự 132451
                let code = mail.createCode()
                let getData = await Model.account.findOne({ where: { email: email } })
                console.log(getData.dataValues);
                //Gửi mail đi
                mail.sendVerification(email, code)

                //Thêm vào db forgot_password
                await Model.forgot_password.create({
                    id_account: getData.dataValues.id,
                    code: code,
                    status: 0,

                })

                //Lưu code vào bảng sql
                return res.status(200).json({
                    errCode: 0,
                    id_account: getData.dataValues.id,
                    message: 'Đã gửi mã code thành công. Mời bạn check mail'
                })
            }
            else {
                return res.status(400).json({
                    errCode: 1,
                    message: 'Email không tồn tại trong hệ thống!'
                })
            }

        } catch (e) {
            console.log(e);
        }
    }

    async checkCodeForgotPassword(req, res) {
        try {
            let code = req.body.code;
            let id_account = req.query.id_account
            console.log(code, id_account);
            let checkCode = await checkCodeFromDb(id_account, code)
            if (checkCode) {
                return res.status(200).json({
                    errCode: 0,
                    message: 'Code bạn nhập thành công!'
                })
            }
            else {
                return res.status(400).json({
                    errCode: 0,
                    message: 'Code bạn chưa đúng. Vui lòng nhập lại!'
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

    //Đổi mật khẩu
    async changeForgotPassword(req, res) {
        try {
            let id_account = req.query.id_account
            const userData = await Model.account.findOne({ where: { id: id_account } })
            let { currentPassword, newPassword } = req.body

            //Nhập 1 password cũ, 1 password mới
            let hashPasswordFromBcrypt = ''// mã hóa password mới

            console.log(currentPassword, newPassword, id_account);

            if (currentPassword.trim() != newPassword.trim()) {
                return res.status(200).json({
                    errCode: 1,
                    message: 'Mật khẩu không khớp!'
                })
            }
            //if(oldPassword == )
            else if (currentPassword.trim() != '' && newPassword.trim() != '') {
                currentPassword = currentPassword.trim()
                hashPasswordFromBcrypt = await hashUserPassword(currentPassword)
                currentPassword = hashPasswordFromBcrypt
                userData.password = currentPassword;
                await userData.save();
                // await pool.execute('update account set password=? where id_account=?', [currentPassword, id_account])
                return res.status(200).json({
                    errCode: 0,
                    message: 'Đổi mật khẩu thành công!'
                })
            }
            else {
                return res.status(500).json({
                    errCode: 2,
                    message: 'Vui lòng không được bỏ trống mật khẩu!'
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    async refreshToken(req, res) {
        const { token } = req.body;
        try {
            let check = verifyJWT(token,'REFRESH');
            delete check.iat,
            delete check.exp
            if(check){
                let accessToken= createJWT(check,'TOKEN');
                let refreshToken = createJWT(check,'REFRESH')
                res.status(200).send({
                    message:'Thành công',
                    data:{
                        accessToken,
                        refreshToken
                    }
                })
            }
            else res.send({
                message:'Lỗi xảy ra',
                data:{}
            })
        } catch (error) {
            res.send({
                message:'Lỗi xảy ra',
                data:{}
            })
            console.log(error)
        }
       
    }
}

//Check email user tồn tại
let checkUserEmail = async (email) => {
    try {
        let check = await Model.account.findOne({ where: { email: email } })
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
        console.log(data.email, data.password);
        if (!data.email || !data.password) {
            return ({
                errCode: 2,
                message: 'Vui lòng không được bỏ trống thông tin!'
            })
        }
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

let checkCodeFromDb = async (id_account, code) => {
    try {
        let check = await Model.forgot_password.findOne({ where: { code, id_account } })
        if (check) {
            return true
        }
        else {
            return false
        }
    } catch (e) {
        console.log(e);
    }

}

export default new authController()