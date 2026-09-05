import TagModel from "../../Models/Tag.js"
import { param, body } from "express-validator"

export const tagValidatorCreate = [
    body("name")
        .notEmpty().withMessage("el nombre de la etiqueta esta vacio")
        .isString().withMessage("el nombre no es del tipo string")
        .isLength({min: 2, max: 30})
        .bail()
        .custom(async (name)=>{
            const nameTag = await TagModel.findOne({where: {name}})
            if (nameTag) throw new Error("ya existe ese nombre ")
                return true
        })
]