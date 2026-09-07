import { matchedData } from "express-validator";
import { ArticleModel } from "../Models/Article.js";

export const getAllArticles = async (req,res)=>{
  try {
    const articles = await ArticleModel.findAll();
    return res.status(200).json(articles);
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const getArticleById = async (req,res)=>{
  try {
    const { id } = matchedData(req);
    const article = await ArticleModel.findByPk(id);
    return res.status(200).json(article);
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const createArticle = async (req,res)=>{
  try {
    const data = matchedData(req);
    const articleCreated = await ArticleModel.create(data);
    return res.status(201).json(articleCreated);
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const updateArticle = async (req,res)=>{
  try {
    const { id, ...data } = matchedData(req);
    const article = await ArticleModel.findByPk(id);
    await article.update(data);
    return res.status(200).json({message: "el articulo fue actualizado correctamente"});
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};

export const deleteArticle = async (req,res)=>{
  try {
    const { id } = matchedData(req);
    const article = await ArticleModel.findByPk(id);
    await article.destroy();
    return res.status(200).json({message: "el articulo fue eliminado correctamente"});
  } catch (error) {
    return res.status(500).json({message: "lo sentimos ocurrio un error inesperado"});
  }
};