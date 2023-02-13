import express from "express";
import usersRoutes from "./users/usersRoutes.js";
import restaurantRoutes from "./restaurants/restaurantsRoutes.js"
import cors from "cors";

const app = express()
app.use(express.json())
// app.use(cors())

app.use("/api/v1", usersRoutes)
app.use("/api/v1", restaurantRoutes)
// app.get('/', async (req,res) => {
//     const result =await pool.query('SELECT 1 + 1 AS result')
//     res.send(result)
// })

export default app;