import { Router } from "express";
import usersServices from "./usersServices.js";

const router = Router();

router
    //? https://proyect-production.up.railway.app/api/v1/users
    .get('/users', usersServices.getAllUsers)
    //? https://proyect-production.up.railway.app/api/v1/users/1
    .get('/users/:id', usersServices.getUserById)
    .post('/users',usersServices.createUser)
    .patch('/users/:id', usersServices.updateUser)
    .delete('/users/:id', usersServices.deleteUser)

export default router;