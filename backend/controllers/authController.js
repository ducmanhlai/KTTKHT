class authController{
    async login(req,res){
        res.send({data:1+1})
    }
}
export default new authController()