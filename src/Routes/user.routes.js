import { Router } from "express";
import { crearUser, deleteUser, GetAllUsers, GetUserById, updateUser } from "../Controllers/user.controller.js";
import { validationCreateUser, validationUpdateUser, validationUserByid } from "../middlewares/validators/user.Validator.js";
import { validate } from "../middlewares/validate.js";

export const UserRoutes = Router();

UserRoutes.get("/users/", GetAllUsers);
UserRoutes.get("/users/:id", validationUserByid , validate,GetUserById);
UserRoutes.post("/users/", validationCreateUser, validate ,crearUser)
UserRoutes.put("/users/:id",validationUpdateUser, validate, updateUser)
UserRoutes.delete("/users/:id",validationUserByid, validate, deleteUser)