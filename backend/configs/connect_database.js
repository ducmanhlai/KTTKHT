import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
dotenv.config()

async function connectDatabase(){
    const sequelize = new Sequelize(process.env.DATABASE_NAME,process.env.LOGIN_NAME,process.env.PASSWORD, {
    host: process.env.SERVER_NAME,
    dialect:'mysql'
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


export default connectDatabase;