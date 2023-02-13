import { Router } from "express";
import restaurantsServices from "./restaurantsServices.js";

const router = Router();

router
    .get('/bucaramanga', restaurantsServices.getBucaramangaRestaurants)
    .get('/florida', restaurantsServices.getFloridaRestaurants)
    .get('/giron', restaurantsServices.getGironRestaurants)


export default router;