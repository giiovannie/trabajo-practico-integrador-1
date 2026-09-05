import ProfileModel from '../../models/profile.model.js';
import { body, param } from 'express-validator';    

export const validationProfileById = [
    param('id')
        .notEmpty().withMessage('el id esta vacio')
        .isInt().withMessage('el id no es del tipo numerico')
        .bail()
        .custom(async (id) => {
            const profileExist = await ProfileModel.findByPk(id);
            if (!profileExist) throw new Error('el profile no existe');
            return true;
        })
]

export const validationCreateProfile = [
    body("first_name")
        .notNull().withMessage("el first name esta vacio")
        .isString().withMessage("el first name no es del tipo string")
        .isLength({ min: 2, max: 50 }).withMessage("el first name debe tener entre 2 y 50 caracteres"),
    body("last_name")
        .notNull().withMessage("el last name esta vacio")
        .isString().withMessage("el last name no es del tipo string")
        .isLength({ min: 2, max: 50 }).withMessage("el last name debe tener entre 2 y 50 caracteres"),
    body("biography")
        .optional()
        .isString().withMessage("la biography no es del tipo string")
        .isLength({ max: 500 }).withMessage("la biography debe tener como maximo 500 caracteres"),
    body("avatar_url")
        .optional()
        .isURL().withMessage("el avatar_url no es una URL valida")
]

export const validationUpdateProfile = [
    param("id")
        .isInt().withMessage("el id no es del tipo numerico")
        .notEmpty().withMessage("el id esta vacio"),
    body("first_name")
        .optional()
        .isString().withMessage("el first name no es del tipo string")
        .isLength({ min: 2, max: 50 }).withMessage("el first name debe tener entre 2 y 50 caracteres"),
    body("last_name")
        .optional()
        .isString().withMessage("el last name no es del tipo string")
        .isLength({ min: 2, max: 50 }).withMessage("el last name debe tener entre 2 y 50 caracteres"),
    body("biography")
        .optional()
        .isString().withMessage("la biography no es del tipo string")
        .isLength({ max: 500 }).withMessage("la biography debe tener como maximo 500 caracteres"),
    body("avatar_url")
        .optional()
        .isURL().withMessage("el avatar_url no es una URL valida")
]