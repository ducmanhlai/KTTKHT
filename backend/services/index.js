import connect_database from "./connect_database";
import * as dotenv from 'dotenv';
dotenv.config()
export default function run(app){
    connect_database();
    app.listen(process.env.PORT,()=>{
        console.log('server run')
    })
}
