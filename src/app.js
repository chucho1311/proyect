import express from "express";
import usersRoutes from "./users/usersRoutes.js";
import restaurantRoutes from "./restaurants/restaurantsRoutes.js"
import cors from "cors";

const app = express()
app.use(cors({
    origin: "*",
    methods: "GET,PUT,PATCH,POST,DELETE"
}))
app.use(express.json())

app.use("/api/v1",cors(), usersRoutes)
app.use("/api/v1",cors(), restaurantRoutes)
// app.get('/', async (req,res) => {
//     const result =await pool.query('SELECT 1 + 1 AS result')
//     res.send(result)
// })

export default app;