import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config()

export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql"
});

export const DataBaseUp = async()=>{
    try {
        await sequelize.sync();
        await sequelize.authenticate({force: false})
        console.log("la conecion con la base de datos fue exitosa :)");
    } catch (error) {
        console.log("lo sentimos la conexion con la base de datos fallo :c");
    }
}