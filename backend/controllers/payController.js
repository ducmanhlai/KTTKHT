import moment from 'moment';
import { readFileSync } from 'fs';
import Models from '../configs/sequelize';
import auth from '../middleware/authenJWT'
var file = readFileSync('./infopayment.json');
const config = JSON.parse(file);
const AccountModel = Models.account;
const PayModel = Models.payment;
const UserModel = Models.users;
class payController {
    async createTransaction(req, res) {
        var ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        var tmnCode = config.vnp_TmnCode;
        var secretKey = config.vnp_HashSecret;
        var vnpUrl = config.vnp_Url;
        var returnUrl = config.vnp_ReturnUrl;
        var date = new moment();
        var createDate = date.format('yyyyMMDDHHmmss');
        var orderId = date.format('HHmmss')
        var amount = req.body.amount;
        var bankCode = req.body.bankCode;
        var orderInfo = req.body.orderDescription;
        var orderType = req.body.orderType;
        var locale = req.body.language;
        if (locale === null || locale === '') {
            locale = 'vn';
        }
        var currCode = 'VND';
        var vnp_Params = {};
        vnp_Params['vnp_Version'] = '2.1.0';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        vnp_Params['vnp_Locale'] = 'vn';
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_OrderInfo'] = orderInfo;
        vnp_Params['vnp_OrderType'] = orderType;
        vnp_Params['vnp_Amount'] = amount * 100;
        vnp_Params['vnp_ReturnUrl'] = returnUrl;
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_CreateDate'] = createDate;
        if (bankCode !== null && bankCode !== '') {
            vnp_Params['vnp_BankCode'] = bankCode;
        }
        vnp_Params = sortObject(vnp_Params);
        var querystring = require('qs');
        var signData = querystring.stringify(vnp_Params, { encode: false });
        var crypto = require("crypto");
        var hmac = crypto.createHmac("sha512", secretKey);
        var signed = hmac.update(new Buffer.from(signData, 'utf-8')).digest("hex");
        vnp_Params['vnp_SecureHash'] = signed;
        vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
        const acc = auth.tokenData(req);
        try {
            ;
            let payment = { id_account: acc.id, id_method: 1, amount, date: new Date(), status: 1, id_order: orderId }
            PayModel.create(payment).then(data => {
                res.redirect(vnpUrl);
                console.log(vnpUrl)
            })
        } catch (error) {
            console.log(error);
            res.send({
                message: 'Có lỗi xảy ra',
                data: []
            })
        }

    }
    async handleResult(req, res) {
        var vnp_Params = req.query;
        var secureHash = vnp_Params['vnp_SecureHash'];

        delete vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHashType'];

        vnp_Params = sortObject(vnp_Params);
        var config = require('config');
        var secretKey = config.get('vnp_HashSecret');
        var querystring = require('qs');
        var signData = querystring.stringify(vnp_Params, { encode: false });
        var crypto = require("crypto");
        var hmac = crypto.createHmac("sha512", secretKey);
        var signed = hmac.update(new Buffer.from(signData, 'utf-8')).digest("hex");
        if (secureHash === signed) {
            var orderId = vnp_Params['vnp_TxnRef'];
            var rspCode = vnp_Params['vnp_ResponseCode'];
            //Kiem tra du lieu co hop le khong, cap nhat trang thai don hang va gui ket qua cho VNPAY theo dinh dang duoi
            try {
                if (rspCode == '00') {
                    const payment = await PayModel.findOne({ where: { id_order: orderId } })
                    if (payment != null)
                        res.status(200).json({ RspCode: '00', Message: 'success' });
                    else {
                        res.status(200).json({ RspCode: '97', Message: 'Fail checksum' })
                    }
                }
            } catch (error) {
                res.status(200).json({ RspCode: '97', Message: 'Fail checksum' })
            }

        }
        else {
            res.status(200).json({ RspCode: '97', Message: 'Fail checksum' })
        }
    }
    async showResult(req, res) {
        var vnp_Params = req.query;
        var secureHash = vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHashType'];

        vnp_Params = sortObject(vnp_Params);
        var tmnCode = config.vnp_TmnCode;
        var secretKey = config.vnp_HashSecret;

        var querystring = require('qs');
        var signData = querystring.stringify(vnp_Params, { encode: false });
        var crypto = require("crypto");
        var hmac = crypto.createHmac("sha512", secretKey);
        var signed = hmac.update(new Buffer.from(signData, 'utf-8')).digest("hex");
        if (secureHash === signed) {
            var orderId = vnp_Params['vnp_TxnRef'];
            //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
            const payment = await PayModel.findOne({ where: { id_order: orderId } });
            const user = await UserModel.findOne({ where: { id_account: payment.dataValues.id_account } })
            if (payment != null && user != null) {
                const newPayment = { ...payment.dataValues, status: 2 };
                const newUser = { ...user.dataValues, coin: user.dataValues.coin + payment.amount / 500 }
                const update = []
                update.push(payment.update(newPayment));
                update.push(user.update(newUser))
                Promise.all(update).then(data => {
                    res.send({
                        message: 'Nạp tiền thành công',
                        data: []
                    })
                }).catch(err => {
                    res.send({
                        message: 'Nạp tiền thất bại',
                        data: []
                    })
                    console.log(err)
                })
            }
            else res.send({
                message: 'Nạp tiền thất bại',
                data: []
            })

        } else {
            res.send({ code: '97' })
        }
    }
}
function sortObject(obj) {
    let sorted = {};
    let str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}
export default new payController()