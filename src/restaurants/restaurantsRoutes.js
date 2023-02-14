import { Router } from "express";
import restaurantsServices from "./restaurantsServices.js";
import cors from "cors";

const router = Router();

router
    .get('/bucaramanga',cors({credentials: true, origin: '*'}), restaurantsServices.getBucaramangaRestaurants)
    .get('/florida', restaurantsServices.getFloridaRestaurants)
    .get('/giron', restaurantsServices.getGironRestaurants)


export default router;