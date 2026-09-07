import { matchedData } from "express-validator";
import { ProfileModel } from "../Models/Profile.js";

export const getAllPerfiles = async (req,res)=>{
  try {
    const perfiles = await ProfileModel.findAll();
    return res.status(200).json(perfiles);
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const getPerfileById = async (req,res)=>{
  try {
    const { id } = matchedData(req);
    const profile = await ProfileModel.findByPk(id);
    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const createPerfil = async (req,res)=>{
  try {
    const data = matchedData(req);
    const profileCreated = await ProfileModel.create(data);
    return res.status(201).json(profileCreated);
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const updatePerfil = async (req,res)=>{
  try {
    const { id, ...data } = matchedData(req);
    const profile = await ProfileModel.findByPk(id);
    await profile.update(data);
    return res.status(200).json({message: "perfil actualizado correctamente"});
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const deletePerfil = async (req,res)=>{
  try {
    const { id } = matchedData(req);
    const profile = await ProfileModel.findByPk(id);
    await profile.destroy();
    return res.status(200).json({message: "el perfil fue eliminado correctamente"});
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};