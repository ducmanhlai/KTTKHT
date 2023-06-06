import Models from '../configs/sequelize';
const HeroModel = Models.hero
class heroController {
    async get(req, res) {
        try {
            const query= req.query.id || "";
            const listHero = query.length!=0 ? await HeroModel.findByPk(query) :await HeroModel.findAll();
            res.send({
                data: listHero,
                message: 'Tìm thành công'
            })
        } catch (error) {
            console.log(error);
            res.send({
                data: [],
                message: 'Tìm thất bại'
            })
        }

    }

    async createHero(req, res) {
        try {
            const { price, classify, coin, baseHp, armor, magicDefe, attDam, name, magicDam, attSpe, armorPie, magicPie, mana } = req.body;
            const hero = HeroModel.create({
                price,
                classify,
                coin,
                baseHp,
                armor,
                magicDefense: magicDefe,
                attackDamage: attDam,
                name,
                magicDamage: magicDam,
                attackSpeed: attSpe,
                armorPierce: armorPie,
                magicPierce: magicPie,
                mana
            });
            res.send({
                data: hero,
                message: 'Tạo thành công'
            })
        } catch (error) {
            console.log(error)
            res.send({
                data: [],
                message: 'Tạo thất bại'
            })
        }
    }
    async updateHero(req, res) {
        try {
            const body = req.body;
            const hero = await HeroModel.findByPk(body.id);
            await hero.update(body);
            res.send({
                data: hero,
                message: 'Cập nhật thành công'
            })
        } catch (error) {
            console.log(error)
            res.send({
                data: [],
                message: 'Cập nhật thất bại'
            })
        }
    }
}
export default new heroController()