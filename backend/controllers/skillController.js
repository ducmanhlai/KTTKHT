import Models from '../configs/sequelize';
import type_damage from '../models/type_damage';
const SkillModel = Models.skill_hero;
const typeDamageModel = Models.type_damage
const typeSkillModel = Models.type_skill

class skillController {
   async get(req, res) {
      try {
         const id_hero = req.query.id_hero;
         let listSkill = await SkillModel.findAll({
            where: {
               id_hero: id_hero
            },
            include: [{ model: type_damageModel, as: 'type_damage_type_damage' }]
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

   async getDetail(req, res) {
      try {
         const id_hero = req.query.id_hero;
         let listSkill = await SkillModel.findAll({
            where: { id_hero: id_hero },
            include: [{
               model: typeDamageModel,
               as: 'type_damage_type_damage',
            }, {
               model: typeSkillModel,
               as: 'type_skill_type_skill',
            }], raw: true
         })
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
   async update(req, res) {
      try {
         const body = req.body;
         let listSkill = []
         for (let i of body) {
            listSkill.push(
               SkillModel.update(i, { where: { id: i.id } }))
         }
         Promise.all(listSkill).then((data) => {
            res.send({
               message: 'Cập nhật thành công',
               data: data
            })
         }).catch(err => {
            console.log(err)
            res.send({
               message: 'Lỗi cập nhật',
               data: []
            })
         })
      } catch (error) {
         console.log(error)
         res.send({
            message: 'Lỗi máy chủ',
            data: []
         })
      }
   }
}
export default new skillController()