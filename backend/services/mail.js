import nodemailer from 'nodemailer';

let mail = {}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'huynhthanhphong12a1@gmail.com',
        pass: 'ahjzocagubfjvaiu'
    }
});

mail.sendVerification = (userEmail, verification) => {
    let mailOptions = {
        from: 'huynhthanhphong12a1',
        to: userEmail,
        subject: 'Xin lại mật khẩu',
        text: 'Mã xác nhận của bạn là: ' + verification,
    };
    transporter.sendMail(mailOptions)
}

mail.createCode = () => {
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += String(Math.floor(Math.random() * 10));
    }
    return result;
}

mail.sendAccountBlocked = (userEmail, content) => {
    let mailOptions = {
        from: 'huynhthanhphong12a1',
        to: userEmail,
        subject: 'TÀI KHOẢN CỦA BẠN ĐÃ BỊ KHÓA VĨNH VIỄN',
        text: content,
    };
    transporter.sendMail(mailOptions)
}

module.exports = mail