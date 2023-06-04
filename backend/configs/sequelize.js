import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
import initModels from "../models/init-models";
dotenv.config()

<<<<<<< HEAD
const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.LOGIN_NAME,process.env.PASSWORD, {
  host: process.env.SERVER_NAME,
  dialect:'mysql'
});

  (async ()=>{
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  })()
 
=======
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.LOGIN_NAME, process.env.PASSWORD, {
  host: process.env.SERVER_NAME,
  dialect: 'mysql',
  query: {
    "raw": true
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

>>>>>>> 4088da37274717776f71b3ae90974fdb2e3b8ca1

export default initModels(sequelize);
export { sequelize };