import Models from '../configs/sequelize';

const AccountModel = Models.account;
const SkinModel = Models.skin;
const SkinOfUserModel = Models.skin_of_user;
const UserModel = Models.users
async function BuySkinService(id_acc, id_skin, res) {
    try {
        const listPromise = []
        listPromise.push(AccountModel.findByPk(id_acc));
        listPromise.push(UserModel.findOne({ where: { id_account: id_acc } }));
        listPromise.push(SkinModel.findByPk(id_skin,{raw:true}))
        const [acc, user, skin] = await Promise.all(listPromise);
        checkTransaction(user,skin)
        res.send({
            message: 'Có lỗi xảy ra',
            data: []
        })
    } catch (error) {
        res.send({
            message: 'Có lỗi xảy ra',
            data: []
        })
        console.log(error)
    }
}
function checkTransaction(user, skin) {
    const price = skin.price;
    const coinUser = user.dataValues.coin;
    if (coinUser >= price) {
        const newUser = { ...user.dataValues, coin: coinUser - price };
        Promise.all([user.update(newUser), SkinOfUserModel.create({ id_user: user.dataValues.id_account, id_skin: skin.id })])
            .then(data => {
                console.log(true)
            })
            .catch(error => {
                console.log(error)
            })
    }
    else {
        console.log("Ko đủ tiền")
    }
}

export default BuySkinService