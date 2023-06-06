import Models from '../configs/sequelize';
const SkillModel = Models.skill_hero;
class skillController {
   async get(req, res) {
      try {
         const id_hero = req.query.id_hero;
         const listSkill = await SkillModel.findAll({
            where: {
               id_hero: id_hero
            }
         });
         res.send({
            data: listSkill,
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
         const { listSkill, idHero } = req.body;
         let newlistSkill = listSkill.map(item => {
            return {
               ...item,
               id_hero: idHero
            }
         });
         const result = await SkillModel.bulkCreate(newlistSkill);
         
         res.status(200).send({
            message: 'Tạo thành công',
            data: result
         })
      } catch (error) {
         console.log(error)
         res.status(400).send({
            message: 'Tạo thất bại',
            data: [],
         })
      }
   }
}
export default new skillController()