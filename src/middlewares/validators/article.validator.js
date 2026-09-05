import articleModel from "../../models/article.model.js";
import { body, param } from "express-validator";

export const validationArticleById = [
    param("id")
        .notEmpty().withMessage("el id esta vacio")
        .isInt().withMessage("el id no es del tipo numerico")
        .bail()
        .custom(async (id) => {
            const articleExist = await articleModel.findByPk(id);
            if(!articleExist) throw new Error("el article no existe");
            return true;
        })
]

export const validationCreateArticle = [
    body("title")
        .notNull().withMessage("el titulo esta vacio")
        .isString().withMessage("el titulo no es del tipo string")
        .isLength({ min: 3, max:300 }).withMessage("el titulo debe tener entre 3 y 300 caracteres"),
    body("content")
        .trim() //nota para mi el trim permite 
        .notNull().withMessage("el contenido esta vacio")
        .isString().withMessage("el contenido no es del tipo string")
        .isLength({min: 50}).withMessage("el contenido debe tener al menos 50 caracteres"),
    body("excerpt")
        .notNull().withMessage("el resumen esta vacio")
        .isString().withMessage("el resumen no es del tipo string")
        .isLength({max: 500 }).withMessage("el resumen no tiene un maximo de 500 caracteres"),
    body("status")
        .notNull().withMessage("el status esta vacio")
        .isIn(["draft", "published"]).withMessage("el status no es valido"),
    body("author_id")
        .notNull().withMessage("el author_id esta vacio")
        .isInt().withMessage("el author_id no es del tipo numerico")
        .bail()
        .custom(async (author_id) => {
            const authorExist = await UserModel.findByPk(author_id);
            if(!authorExist) throw new Error("el author no existe");
            return true;
        })
]

export const validationUpdateProfile = [
    param("id")
        .notEmpty().withMessage("el id esta vacio")
        .isInt().withMessage("el id no es del tipo numerico")
        .notEmpty().withMessage("el id esta vacio"),
    body("title")
        .optional()
        .isString().withMessage("el titulo no es del tipo string")
        .isLength({ min: 3, max:300 }).withMessage("el titulo debe tener entre 3 y 300 caracteres"),
    body("content")
        .optional()
        .isString().withMessage("el contenido no es del tipo string")
        .isLength({min: 50}).withMessage("el contenido debe tener al menos 50 caracteres"),
    body("excerpt")
        .optional()
        .isString().withMessage("el resumen no es del tipo string")
        .isLength({max: 500 }).withMessage("el resumen no tiene un maximo de 500 caracteres"),
    body("status")
        .optional()
        .isIn(["draft", "published"]).withMessage("el status no es valido"),
    body("author_id")
        .notNull().withMessage("el author_id esta vacio")
        .isInt().withMessage("el author_id no es del tipo numerico")
]