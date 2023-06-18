import * as dotenv from 'dotenv';
import router from "../routers";
import express from "express"
import path from 'path';
var cors = require('cors')
dotenv.config()
export default function run(app) {
    app.use(cors({ credentials: true, origin: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use('/public', express.static('public'));
    router(app);
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.listen(process.env.PORT, () => {
        console.log('server run')
    })
}
