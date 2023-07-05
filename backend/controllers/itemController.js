import Model from '../configs/sequelize';
import mail from '../services/mail'
import auth from '../middleware/authenJWT'
import Resize from '../services/resize'
const ItemModel = Model.item

class ItemController {

    //Lấy thông tin người dùng 
    // async getItem(req, res) {
    //     try {
    //         let dataUser = await ItemModelfindOne({
    //             where: { id: id_account }, raw: true
    //         })
    //         if (dataUser) {
    //             delete dataUser['password'] //bỏ password nhạy cảm
    //             return res.status(200).json({
    //                 errCode: 0,
    //                 message: 'Lấy thành công thông tin người dùng',
    //                 data: dataUser
    //             })
    //         }
    //         else {
    //             return res.status(400).json({
    //                 errCode: 1,
    //                 message: 'Lỗi không hợp lệ',
    //                 data: dataUser
    //             })
    //         }
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // }

    async createItem(req, res) {
        try {

            const {
                name, id_skin, type
            } = req.body;

            console.log(
                name, id_skin, type
            );
            if (!name || !id_skin || !type) {
                //Không có ảnh sẽ không update avatar
                return res.send({
                    errCode: 1,
                    message:
                        "Không thể tạo do thiếu thông tin của vật phẩm. Vui lòng nhập đầy đủ thông tin!",
                });
            } else {
                console.log(
                    name, id_skin, type
                );

                const item = await ItemModel.create({
                    name, id_skin, type
                });
                return res.status(200).json({
                    errCode: 0,
                    data: item,
                    message: "Tạo thành công",
                });
            }
        }
        catch (error) {
            console.log(error);
            return res.send({
                errCode: 2,
                data: [],
                message: "Tạo thất bại",
            });
        }
    }
}
export default new ItemController()