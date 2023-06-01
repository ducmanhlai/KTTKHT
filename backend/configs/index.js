import connect_database from "./connect_database";
import * as dotenv from 'dotenv';
import router from "../routers";
import express from "express"
var cors = require('cors')
dotenv.config()
export default function run(app) {
    connect_database();
    app.use(cors({ credentials: true, origin: true }));
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    router(app);
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.listen(process.env.PORT, () => {
        console.log('server run')
    })
}