import saveImage from '../services/saveImage';
import Models from '../configs/sequelize';
import Resize from '../services/resize';
import skill_hero from '../models/skill_hero';
const HeroModel = Models.hero;
const skillModel = Models.skill_hero;
const storyModel = Models.story_hero;
const type_damageModel = Models.type_damage;
class heroController {
    async get(req, res) {
        try {
            const query = req.query.id || "";
            const listHero = query.length != 0 ? await HeroModel.findByPk(query, {
                include: [{ model: skillModel, as: 'skill_heros', include: { model: type_damageModel, as: 'type_damage_type_damage' } }, { model: storyModel, as: 'story_hero' }]
            }) : await HeroModel.findAll();
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
            const file = req.file.buffer;
            const imagePath = '../public/images';
            // call class Resize
            const fileUpload = new Resize(imagePath);
            if (!req.file) {
                res.status(401).json({ error: 'Please provide an image' });
            }
            const filename = await fileUpload.save(req.file.buffer);
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
                mana,
                avatar: filename
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
            const file = req.file.buffer;
            const imagePath = '../public/images';
            // call class Resize
            const fileUpload = new Resize(imagePath);
            if (!req.file) {
                res.status(401).json({ error: 'Please provide an image' });
            }
            const filename = await fileUpload.save(req.file.buffer);
            body = { ...body, avatar: filename }
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