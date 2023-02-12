import { pool } from "../db.js";


const getAllUsers = async () => {
    // const result = await pool.query('INSERT INTO users(id,name,email,password) VALUES(1,"carlos","carlos@gmail.com","123456a")')
    const [rows] = await pool.query('SELECT * FROM users ')
    return rows
}

const getUserById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows
}

const createUser = async (data) => {
    const [rows] = await pool.query('INSERT INTO users (name,email,password) VALUES (?,?,?)', [data.name, data.email, data.password]);
    return rows.insertId;
}

const updateUser = async (id,data) => {
    const [result] = await pool.query('UPDATE users SET name=IFNULL(?,name), email=IFNULL(?,email), password=IFNULL(?,password) WHERE id=?', [data.name, data.email, data.password, id]);
    if(result.affectedRows === 0) return result.serverStatus(404).json({
        message: 'User not found'
    })

    const [rows] = await pool.query('SELECT * FROM users WHERE id=?',[id])
    return rows[0];
}

const deleteUser = async (id) => {
    const result = await pool.query('DELETE FROM users WHERE id = ?', [id]);
    return {
        message: 'User Deleted'
    }
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}