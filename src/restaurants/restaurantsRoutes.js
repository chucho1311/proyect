import { Router } from "express";
import restaurantsServices from "./restaurantsServices.js";
import cors from "cors";

const router = Router();

router
    .get('/bucaramanga',cors({credentials: true, origin: '*'}), restaurantsServices.getBucaramangaRestaurants)
    .get('/florida',cors({credentials: true, origin: '*'}), restaurantsServices.getFloridaRestaurants)
    .get('/giron',cors({credentials: true, origin: '*'}), restaurantsServices.getGironRestaurants)


export default router;