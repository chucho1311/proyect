import restaurantsController from "./restaurantsController.js";

const getBucaramangaRestaurants = async (req, res) => {
    const users = await restaurantsController.getBucaramangaRestaurants();
    res.status(200).json(users)
}

const getFloridaRestaurants = async (req, res) => {
    const users = await restaurantsController.getFloridaRestaurants;
    res.status(200).json(users)
}

const getGironRestaurants = async (req, res) => {
    const users = await restaurantsController.getGironRestaurants;
    res.status(200).json(users)
}

export default {
    getBucaramangaRestaurants,
    getFloridaRestaurants,
    getGironRestaurants
}