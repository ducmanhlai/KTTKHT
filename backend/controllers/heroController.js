import Models from '../configs/sequelize'
class heroController {
    async create(req, res) {
        res.send({ data: 1 + 1 })
    }
    async get(req,res){

    }
    async update(req,res){
        
    }
}
export default new heroController()