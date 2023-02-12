import express from "express";
import usersRoutes from "./users/usersRoutes.js";


const app = express()
app.use(express.json())

app.use("/api/v1",usersRoutes)
// app.get('/', async (req,res) => {
//     const result =await pool.query('SELECT 1 + 1 AS result')
//     res.send(result)
// })

export default app;