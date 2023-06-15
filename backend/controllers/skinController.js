import Models from '../configs/sequelize';
import auth from "../../backend/middleware/authenJWT";
import Resize from '../services/resize'
const SkinModel = Models.skin;
import BuySkinService from '../services/skinService';
class skillController {
    async get(req, res) {
        try {
            let listSkin = await SkinModel.findAll();
            res.send({
                data: listSkin,
                message: 'Lấy dữ liệu thành công'
            })
        } catch (err) {
            console.log(err)
            res.send({
                data: [],
                message: 'Lỗi lấy dữ liệu'
            })
        }
    }
    async create(req, res) {
        try {
            const imagePath = '../public/images';
            const { price, classify, name } = req.body;
            const fileUpload = new Resize(imagePath);
            console.log(id);
            let filename = ''
            if (!req.file || !price || !classify || !name) {
                //Không có ảnh sẽ không update avatar
                return res.send({
                    errCode: 1,
                    message: 'Không thể tạo do thiếu thông tin của trang phục tướng. Vui lòng nhập đầy đủ thông tin!'
                })
            }
            else {
                console.log(price, classify, name);
                filename = await fileUpload.save(req.file.buffer);
                // const hero = await HeroModel.create({
                //     price, classify, name
                // });
                // return res.status(200).json({
                //     errCode: 0,
                //     data: hero,
                //     message: 'Tạo thành công'
                // })
            }
        } catch (error) {
            console.log(error)
            res.status(400).send({
                message: 'Tạo thất bại',
                data: [],
            })
        }
    }
    async update(req, res) {
        try {
            const file = req.file.buffer;
            const imagePath = '../public/images';
            // call class Resize
            let skin = {};
            const fileUpload = new Resize(imagePath);
            if (!req.file) {
                skin = { ...req.body }
            }
            else {
                const filename = await fileUpload.save(req.file.buffer);
                skin = { ...req.body, avatar: filename };
            }
            const result = await SkinModel.update(skin, { where: { id: skin.id } });
            res.send({
                message: 'Cập nhật thành công',
                data: result
            })
        } catch (error) {
            console.log(error)
            res.send({
                message: 'Lỗi máy chủ',
                data: []
            })
        }
    }
    async buy(req, res) {
        try {
            const account = auth.tokenData(req);
            const { id_skin } = req.body;
            BuySkinService(account.id, id_skin, res)
        } catch (error) {
            console.log(error)
            res.send({
                message: 'Có lỗi xảy ra',
                data: []
            })

        }


    }
}
export default new skillController()