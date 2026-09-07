import { matchedData } from "express-validator";
import { UserModel } from "../Models/User.js";

export const GetAllUsers = async (req,res)=>{
    try {
        const allUsers = await UserModel.findAll()
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json({message: "lo sentimos pero ocurrio un error inesperado"})
    }
}

export const GetUserById = async (req,res)=>{
    try {
        const { id } = matchedData(req)
        const userById = await UserModel.findByPk(id)
        return res.status(200).json(userById)
    } catch (error) {
        return res.status(500).json({message: "lo sentimos pero ocurrio un error inesperado"})        
    }
}


export const updateUser = async(req,res)=>{
    try {
        const {id, ...datos} = matchedData(req)
        const user = await UserModel.findByPk(id)
        await user.update(datos)
        return res.status(200).json({message: "user actualizado correctamente", user})
    } catch (error) {
        return res.status(500).json({message: "lo sentimos pero ocurrio un error inesperado"})   
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const {id} = matchedData(req)
        const userABorrar = await UserModel.findByPk(id)
        await userABorrar.destroy()
        return res.status(200).json({message: "el user fue borrado correctamente"})
    } catch (error) {
        return res.status(500).json({message: "lo sentimos pero ocurrio un error inesperado"})          
    }
}

export const crearUser = async(req,res)=>{
    try {
        const data = matchedData(req)
        const userCreated = await UserModel.create(data);
        return res.status(201).json(userCreated);
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "lo sentimos pero ocurrio un error inesperado"})    
    }
}