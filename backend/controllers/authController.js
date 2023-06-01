class authController{
    async login(req,res){
        res.send({data:1+1})
    }
    async signUp(req,res)
    {
         console.log(req.body)
         res.status(401).send({data:'ok',message:'thành công',errCode:0})
    }
}
export default new authController()