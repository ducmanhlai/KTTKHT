import connect_database from "./connect_database";
import * as dotenv from 'dotenv';
import router from "../routers";
dotenv.config()
export default function run(app){
    connect_database();
    router(app);
    app.get('/', (req, res) => {
        res.send('Hello World!');
      });
    app.listen(process.env.PORT,()=>{
        console.log('server run')
    })
}
