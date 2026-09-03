import express from "express"

import dotenv from "dotenv"
import { DataBaseUp } from "./src/config/DataBase.js"
dotenv.config()


const PORT = process.env.PORT
const app = express()


app.use(express.json())


app.listen(PORT, async()=>{
    try {
        await DataBaseUp()
        console.log(`Se ensendio el server correctamente en el puerto ${PORT}`);
    } catch (error) {
        console.log("lo sentimos pero ocurrio un error en ensender el server , toco reiniciar jiji :p");
    }
})