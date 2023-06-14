import Models from '../configs/sequelize';
const ruleModel = Models.rule;
class ruleController {
    async get(req, res) {
        try {
            const id_hero = req.query.id_hero;
            let listSkill = await ruleModel.findAll();
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
            const rule = req.body;
            console.log(rule)
            const result = await ruleModel.create(rule);
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
            const rule = req.body;
            const result = await ruleModel.update(rule, { where: { id: rule.id } })
            res.send({
                message: 'Cập nhật thành công',
                data: result
            }
            )
        } catch (error) {
            console.log(error)
            res.send({
                message: 'Lỗi máy chủ',
                data: []
            })
        }
    }
}
export default new ruleController()