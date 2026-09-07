import { Router } from "express";
import { createArticle, deleteArticle, getAllArticles, getArticleById, updateArticle } from "../Controllers/article.controller.js";
import { validationArticleById, validationCreateArticle, validationUpdateArticle } from "../middlewares/validators/article.validator.js";
import { validate } from "../middlewares/validate.js";

export const ArticleRoutes = Router();

ArticleRoutes.get("/articles", getAllArticles);
ArticleRoutes.get("/articles/:id", validationArticleById, validate, getArticleById);
ArticleRoutes.post("/articles", validationCreateArticle, validate, createArticle);
ArticleRoutes.put("/articles/:id", validationUpdateArticle, validate, updateArticle);
ArticleRoutes.delete("/articles/:id", validationArticleById, validate, deleteArticle);