import { Router } from "express";
import usersServices from "./usersServices.js";
import cors from "cors";

const router = Router();

router
    //? https://proyect-production.up.railway.app/api/v1/users
    .get('/users',cors({credentials: true, origin: '*'}), usersServices.getAllUsers)
    //? https://proyect-production.up.railway.app/api/v1/users/1
    .get('/users/:id',cors({credentials: true, origin: '*'}), usersServices.getUserById)
    .post('/users',cors({credentials: true, origin: '*'}),usersServices.createUser)
    .patch('/users/:id',cors({credentials: true, origin: '*'}), usersServices.updateUser)
    .delete('/users/:id',cors({credentials: true, origin: '*'}), usersServices.deleteUser)

export default router;