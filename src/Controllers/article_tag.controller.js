import { matchedData } from "express-validator";
import { ArticleTagModel } from "../Models/Article_Tag.js";

export const createArticleTag = async (req,res)=>{
  try {
    const data = matchedData(req);
    const relationCreated = await ArticleTagModel.create(data);
    return res.status(201).json(relationCreated);
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const deleteArticleTag = async (req,res)=>{
  try {
    const { articleTagId } = matchedData(req);
    const relation = await ArticleTagModel.findByPk(articleTagId);
    await relation.destroy();
    return res.status(200).json({message: "la relacion fue eliminada correctamente"});
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};