import { Router } from "express";
import { createTag, deleteTag, getAllTags, getTagById, updateTag } from "../Controllers/tag.controller.js";
import { tagValidatorCreate, validationTagById, validationUpdateTag } from "../middlewares/validators/tag.validator.js";
import { validate } from "../middlewares/validate.js";

export const TagRoutes = Router();

TagRoutes.get("/tags", getAllTags);
TagRoutes.get("/tags/:id", validationTagById, validate, getTagById);
TagRoutes.post("/tags", tagValidatorCreate, validate, createTag);
TagRoutes.put("/tags/:id", validationUpdateTag, validate, updateTag);
TagRoutes.delete("/tags/:id", validationTagById, validate, deleteTag);