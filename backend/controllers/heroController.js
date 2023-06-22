import saveImage from "../services/saveImage";
import Models from "../configs/sequelize";
import Resize from "../services/resize";
import skill_hero from "../models/skill_hero";
const HeroModel = Models.hero;
const skillModel = Models.skill_hero;
const storyModel = Models.story_hero;
const type_damageModel = Models.type_damage;
class heroController {
  async get(req, res) {
    try {
      const query = req.query.id || "";
      const listHero =
        query.length != 0
          ? await HeroModel.findByPk(query, {
              include: [
                {
                  model: skillModel,
                  as: "skill_heros",
                  include: {
                    model: type_damageModel,
                    as: "type_damage_type_damage",
                  },
                },
                { model: storyModel, as: "story_hero" },
              ],
            })
          : await HeroModel.findAll();
      res.send({
        data: listHero,
        message: "Tìm thành công",
      });
    } catch (error) {
      console.log(error);
      res.send({
        data: [],
        message: "Tìm thất bại",
      });
    }
  }
  async createHero(req, res) {
    try {
      const imagePath = "../public/images";
      const {
        price,
        classify,
        coin,
        baseHp,
        armor,
        magicDefe,
        attDam,
        name,
        magicDam,
        attSpe,
        armorPie,
        magicPie,
        mana,
      } = req.body;
      const fileUpload = new Resize(imagePath);
      let filename = "";
      console.log(
        price,
        classify,
        coin,
        baseHp,
        armor,
        magicDefe,
        attDam,
        name,
        magicDam,
        attSpe,
        armorPie,
        magicPie,
        mana
      );
      console.log("File:", req.file);
      if (
        !req.file ||
        !price ||
        !classify ||
        !coin ||
        !baseHp ||
        !armor ||
        !magicDefe ||
        !attDam ||
        !name ||
        !magicDam ||
        !attSpe ||
        !armorPie ||
        !magicPie ||
        !mana
      ) {
        //Không có ảnh sẽ không update avatar
        return res.send({
          errCode: 1,
          message:
            "Không thể tạo do thiếu thông tin của tướng. Vui lòng nhập đầy đủ thông tin!",
        });
      } else {
        console.log(
          price,
          classify,
          coin,
          baseHp,
          armor,
          magicDefe,
          attDam,
          name,
          magicDam,
          attSpe,
          armorPie,
          magicPie,
          mana
        );
        filename = await fileUpload.save(req.file.buffer);
        const hero = await HeroModel.create({
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
          avatar: filename,
        });
        return res.status(200).json({
          errCode: 0,
          data: hero,
          message: "Tạo thành công",
        });
      }
    } catch (error) {
      console.log(error);
      return res.send({
        errCode: 2,
        data: [],
        message: "Tạo thất bại",
      });
    }
  }
  async updateHero(req, res) {
    try {
      const {
        price,
        classify,
        coin,
        baseHp,
        armor,
        magicDefe,
        attDam,
        name,
        magicDam,
        attSpe,
        armorPie,
        magicPie,
        mana,
      } = req.body;
      let id_hero = req.query.id_hero;
      let dataHero = await HeroModel.findOne({
        where: { id: id_hero },
      });
      console.log(dataHero);
      console.log(
        price,
        classify,
        coin,
        baseHp,
        armor,
        magicDefe,
        attDam,
        name,
        magicDam,
        attSpe,
        armorPie,
        magicPie,
        mana
      );
      const imagePath = "../public/images";
      // call class Resize
      const fileUpload = new Resize(imagePath);
      let filename = "";
      if (
        !price ||
        !classify ||
        !coin ||
        !baseHp ||
        !armor ||
        !magicDefe ||
        !attDam ||
        !name ||
        !magicDam ||
        !attSpe ||
        !armorPie ||
        !magicPie ||
        !mana
      ) {
        //Không có ảnh sẽ không update avatar
        return res.status(200).json({
          errCode: 1,
          message:
            "Không thể cập nhật do thiếu thông tin của tướng. Vui lòng nhập đầy đủ thông tin!",
        });
      } else {
        console.log(
          price,
          classify,
          coin,
          baseHp,
          armor,
          magicDefe,
          attDam,
          name,
          magicDam,
          attSpe,
          armorPie,
          magicPie,
          mana
        );
        if (!req.file) {
          const hero = await dataHero.set({
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
          });
          await hero.save();
        } else {
          filename = await fileUpload.save(req.file.buffer);
          const hero = await dataHero.set({
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
            avatar: filename,
          });
          await hero.save();
        }
        return res.status(200).json({
          errCode: 0,
          message: "cập nhật thành công tướng",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errCode: 2,
        message: "Cập nhật thất bại",
      });
    }
  }
}
export default new heroController();
