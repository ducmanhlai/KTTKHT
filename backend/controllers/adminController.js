import Model from "../configs/sequelize";
import mail from "../services/mail";

class adminController {
  //Lấy tất cả người dùng
  async getAllUser(req, res) {
    try {
      let dataUser = await Model.account.findAll({
        where: { id_role: 1 },
        include: { model: Model.users, as: "users", attributes: ["name_user"] },
      });

      return res.status(200).json({
        errCode: 0,
        message: "Lấy thành công tất cả User",
        data: dataUser,
      });
    } catch (e) {
      console.log(e);
    }
  }
  //Khóa người dùng không nghiêm túc
  async blockUser(req, res) {
    try {
      //Cần id người dùng để lấy email
      let id_account = req.query.id_account;
      let dataUser = await Model.account.findOne({
        where: { id: id_account, id_role: 1, status: 0 },
      });

      //Admin soạn nội dung gửi gắm đến người chơi không nghiêm túc
      let { content } = req.body;

      if (dataUser) {
        let email = dataUser.dataValues.email;
        //Gửi mail đi cho người dùng bị khóa
        mail.sendAccountBlocked(email, content);
        //update trạng thái người dùng
        dataUser.status = 1;
        await dataUser.save();
        // let updateStatus = await Model.account.findOne({ where: { id: id_account }, raw: true })
        return res.status(200).json({
          errCode: 0,
          message:
            "Khóa thành công tài khoản người dùng không nghiêm túc chấp hành nội quy của trò chơi!",
        });
      }
      return res.status(400).json({
        errCode: 1,
        message: "Khóa tài khoản người dùng thất bại!",
      });
    } catch (e) {
      console.log(e);
    }
  }

  //Mở khóa người dùng đã bị khóa nhầm
  async unlockUser(req, res) {
    try {
      //Cần id người dùng để lấy email
      let id_account = req.query.id_account;
      let dataUser = await Model.account.findOne({
        where: { id: id_account, id_role: 1 },
      });

      let content =
        "Chúc mừng bạn đã được mở khóa tài khoản. Lần sau tái phạm sẽ bị xóa tài khoản vĩnh viễn";
      if (dataUser) {
        let email = dataUser.dataValues.email;
        //Gửi mail đi cho người dùng bị khóa
        mail.sendAccountBlocked(email, content);
        //update trạng thái người dùng
        dataUser.status = 0;
        await dataUser.save();
        // let updateStatus = await Model.account.findOne({ where: { id: id_account }, raw: true })
        return res.status(200).json({
          errCode: 0,
          message:
            "Mở khóa thành công tài khoản người dùng không nghiêm túc chấp hành nội quy của trò chơi!",
        });
      }
      return res.status(400).json({
        errCode: 1,
        message: "Mở khóa tài khoản người dùng thất bại!",
      });
    } catch (e) {
      console.log(e);
    }
  }
}
export default new adminController();
