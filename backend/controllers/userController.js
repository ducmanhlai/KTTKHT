import Model from '../configs/sequelize';
import mail from '../services/mail'
import auth from '../middleware/authenJWT'
import Resize from '../services/resize'

class userController {

    //Lấy thông tin người dùng 
    async getInfoUser(req, res) {
        try {
            let id_account = auth.tokenData(req).id
            console.log(id_account);
            // let dataUser = await Model.account.findAll({ where: { id_role: 1 }, raw: true })
            let users = Model.users

            let dataUser = await Model.account.findOne({
                where: { id: id_account }, raw: true, include: [{
                    model: users,
                    as: 'users',
                }]
            })
            if (dataUser) {
                delete dataUser['password'] //bỏ password nhạy cảm
                return res.status(200).json({
                    errCode: 0,
                    message: 'Lấy thành công thông tin người dùng',
                    data: dataUser
                })
            }
            else {
                return res.status(400).json({
                    errCode: 1,
                    message: 'Lỗi không hợp lệ',
                    data: dataUser
                })
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    //Sửa thông tin người dùng
    async updateUser(req, res) {
        try {
            let id_account = auth.tokenData(req).id
            let { name_user, phone } = req.body
            console.log(name_user, phone);
            let dataAccount = await Model.account.findOne({
                where: { id: id_account }
            })
            let dataUser = await Model.users.findOne({
                where: { id_account }
            })
            const imagePath = '../public/images';
            // call class Resize
            const fileUpload = new Resize(imagePath);
            let filename = ''
            if (!req.file) {
                //Không có ảnh sẽ không update avatar
                dataAccount.set({
                    phone
                })
                dataUser.set({
                    name_user
                })
                await dataAccount.save()
                await dataUser.save()
            }
            else {
                //Có ảnh sẽ update avatar
                filename = await fileUpload.save(req.file.buffer);
                console.log(filename);

                dataAccount.set({
                    phone
                })

                dataUser.set({
                    name_user,
                    avatar: filename
                })
                await dataAccount.save()
                await dataUser.save()
            }

            // let dataAccount = await Model.account.findOne({
            //     where: { id: id_account }
            // })
            // dataAccount.set({
            //     phone: phone
            // })
            // let dataUser = await Model.users.findOne({
            //     where: { id_account }
            // })
            // dataUser.set({
            //     name_user,
            //     id_card
            // })
            // await dataAccount.save()
            // await dataUser.save()
            // console.log(dataAccount);

            return res.status(400).json({
                errCode: 0,
                message: 'Cập nhật thành công thông tin người dùng!'
            })
        } catch (e) {
            console.log(e);
        }
    }

    //Mở khóa người dùng đã bị khóa nhầm
    async unlockUser(req, res) {
        try {
            //Cần id người dùng để lấy email
            let id_account = req.query.id_account
            let dataUser = await Model.account.findOne({ where: { id: id_account, id_role: 1 } })

            let content = 'Chúc mừng bạn đã được mở khóa tài khoản. Lần sau tái phạm sẽ bị xóa tài khoản vĩnh viễn'
            if (dataUser) {
                let email = dataUser.dataValues.email;
                //Gửi mail đi cho người dùng bị khóa
                mail.sendAccountBlocked(email, content)
                //update trạng thái người dùng
                dataUser.status = 0
                await dataUser.save();
                // let updateStatus = await Model.account.findOne({ where: { id: id_account }, raw: true })
                return res.status(200).json({
                    errCode: 0,
                    message: 'Mở khóa thành công tài khoản người dùng không nghiêm túc chấp hành nội quy của trò chơi!'
                })
            }
            return res.status(400).json({
                errCode: 1,
                message: 'Mở khóa tài khoản người dùng thất bại!'
            })
        } catch (e) {
            console.log(e);
        }
    }

}
export default new userController()