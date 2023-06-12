import Models from '../configs/sequelize';
import auth from "../../backend/middleware/authenJWT"
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
            const skin = req.body;
            const newSkin = await SkinModel.create(skin);
            res.status(200).send({
                message: 'Tạo thành công',
                data: newSkin
            })
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
            const skin = req.body;
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
            BuySkinService(account.id,id_skin,res) 
        } catch (error) {
            console.log(error)
              res.send({
                message:'Có lỗi xảy ra',
                data:[]
              })

        }


    }
}
export default new skillController()