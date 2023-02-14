import express from "express";
import usersRoutes from "./users/usersRoutes.js";
import restaurantRoutes from "./restaurants/restaurantsRoutes.js"
import cors from "cors";

const app = express()

app.use(cors());
app.use(express.json())
// app.use( (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Accept");
//     next();
// });
app.use("/api/v1",cors({ credentials: true, origin: 'https://la-miapizza.netlify.app/users' }), usersRoutes)
app.use("/api/v1", restaurantRoutes)
// app.get('/', async (req,res) => {
//     const result =await pool.query('SELECT 1 + 1 AS result')
//     res.send(result)
// })

export default app;