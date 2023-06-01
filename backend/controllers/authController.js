class authController {
    async login(req, res) {
        res.status(200).json({ data: 1 + 1 })
    }

    async signUp(req, res) {
        console.log(req.body)
        res.status(200).send({ data: 'ok', message: 'thành công', errCode: 0 })
    }
}
export default new authController()