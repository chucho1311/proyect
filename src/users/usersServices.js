import usersControllers from "./usersControllers.js";


const getAllUsers = async (req, res) => {
    const users = await usersControllers.getAllUsers();
    res.status(200).json(users)
}

const getUserById = async (req, res) => {

    const user = await usersControllers.getUserById(req.params.id);
    if(user.length <= 0){
        return res.status(404).json({
            message: 'User not found'
        })
    }
    res.status(200).json(user[0])
}

const createUser = async (req,res) => {
    const newUser = await usersControllers.createUser(req.body);
    res.status(200).json({
        id: newUser,
        name: req.body.name,
        email: req.body.email,
    })
}

const updateUser = async (req,res) => {
    const updatedUser = await usersControllers.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser)
}

const deleteUser = async (req,res) => {
    const deletedUser = await usersControllers.deleteUser(req.params.id);
    res.status(200).json(deletedUser)
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}