import { pool } from "../db.js";

const getBucaramangaRestaurants = async () => {
    // const result = await pool.query('INSERT INTO users(id,name,email,password) VALUES(1,"carlos","carlos@gmail.com","123456a")')
    const [rows] = await pool.query('SELECT * FROM bucaramanga ')
    return rows
}

const getFloridaRestaurants = async () => {
    // const result = await pool.query('INSERT INTO users(id,name,email,password) VALUES(1,"carlos","carlos@gmail.com","123456a")')
    const [rows] = await pool.query('SELECT * FROM florida ')
    return rows
}

const getGironRestaurants = async () => {
    // const result = await pool.query('INSERT INTO users(id,name,email,password) VALUES(1,"carlos","carlos@gmail.com","123456a")')
    const [rows] = await pool.query('SELECT * FROM giron ')
    return rows
}

export default {
    getBucaramangaRestaurants,
    getFloridaRestaurants,
    getGironRestaurants
}