import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
import initModels from "../models/init-models";
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.LOGIN_NAME, process.env.PASSWORD, {
  host: process.env.SERVER_NAME,
  dialect: 'mysql',
  query: {
    "raw": false
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


export default initModels(sequelize);
export { sequelize };