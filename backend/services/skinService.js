import Models from '../configs/sequelize';

const AccountModel = Models.account;
const SkinModel = Models.skin;
const SkinOfUserModel = Models.skin_of_user;
const UserModel = Models.users
async function BuySkinService(id_acc, id_skin, res) {
    try {
        const listPromise = []
        listPromise.push(UserModel.findOne({ where: { id_account: id_acc } }));
        listPromise.push(SkinModel.findByPk(id_skin,{raw:true}))
        const [user, skin] = await Promise.all(listPromise);
        checkTransaction(user,skin,res)
    } catch (error) {
        console.log(error)
        res.send({
            message: 'Có lỗi xảy ra',
            data: []
        })
        
    }
}
async function checkTransaction(user, skin,res) {
    const price = skin.price;
    const coinUser = user.dataValues.coin;
    if (coinUser >= price) {
        const newUser = { ...user.dataValues, coin: coinUser - price };
        const skin_of_user = await SkinOfUserModel.findOne({where:{ id_user: user.dataValues.id_account, id_skin: skin.id }});
        if(skin_of_user==null){
            Promise.all([user.update(newUser), SkinOfUserModel.create({ id_user: user.dataValues.id_account, id_skin: skin.id })])
            .then(data => {
                res.send({
                    message: 'Mua thành công',
                    data: []
                })
            }).catch(err=>{
                res.send({
                    message: 'Có lỗi xảy ra',
                    data: []
                })
            })
        }
        else{
            res.send({
                message: 'Bạn đã sở hữu trang phục này!',
                data: []
            })
        }
       
    }
    else {
        console.log("Ko đủ tiền")
    }
}

export default BuySkinService