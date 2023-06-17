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
            let id_hero = req.query.id_hero
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
                const skin = await SkinModel.create({
                    price, classify, name, avatar: filename, id_hero
                });
                return res.status(200).json({
                    errCode: 0,
                    data: skin,
                    message: 'Tạo trang phục thành công'
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(400).send({
                message: 'Tạo thất bại',
                data: [],
            })
        }
    }
    async update(req, res) {
        try {
            const imagePath = '../public/images';
            const { price, classify, name, id_hero } = req.body;
            const fileUpload = new Resize(imagePath);
            let id_skin = req.query.id_skin
            const dataSkin = await SkinModel.findOne({
                where: { id: id_skin }

            });

            let filename = ''
            if (!req.file || !price || !classify || !name || !id_hero) {
                console.log(id_skin, price, classify, name, id_hero, req.file);
                //Không có ảnh sẽ không update avatar
                return res.send({
                    errCode: 1,
                    message: 'Không thể cập nhật do thiếu thông tin của trang phục tướng. Vui lòng nhập đầy đủ thông tin!'
                })
            }
            else {
                console.log(price, classify, name);
                filename = await fileUpload.save(req.file.buffer);
                const skin = await dataSkin.set({
                    price, classify, name, avatar: filename, id_hero
                });
                await skin.save()
                return res.status(200).json({
                    errCode: 0,
                    data: skin,
                    message: 'Cập nhật trang phục thành công'
                })
            }
        } catch (error) {
            console.log(error)
            return res.send({
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