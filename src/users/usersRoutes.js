import { Router } from "express";
import usersServices from "./usersServices.js";

const router = Router();

router
    .get('/users', usersServices.getAllUsers)
    .get('/users/:id', usersServices.getUserById)
    .post('/users',usersServices.createUser)
    .patch('/users/:id', usersServices.updateUser)
    .delete('/users/:id', usersServices.deleteUser)

export default router;