const UserModel = require('../models/userModel')
const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id}, "secret", {expiresIn: '3d'})
} // secret in quotes or nah


// get all users
// const getUsers = async (req, res) => {
//     const users = await UserModel.find({}) // .sort({createdAt: -1}) sorts newest first
//     res.status(200).json(users)
// }

// get a single user
// const getUser = async (req, res) => {
//     const { id } = req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: "no such user"})
//     }
//     const user = await UserModel.findById(id)
//     if(!user) {
//         return res.status(404).json({error: "No such user"})
//     }
//     res.status(200).json(user)
// }

// create a new user
// const createUser = async (req, res) => {
//     const {email, password} = req.body
//     // add document to db
//     try {
//         const user = await UserModel.create({email, password})
//         await user.save()
//         res.status(200).json(user)
//     }
//     catch (error){
//         res.status(400).json({error: error.message})
//     }
// }

// delete a user
// const deleteUser = async (req, res) => {
//     const { id } = req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: "no such user"})
//     }
//     const user = await UserModel.findOneAndDelete({_id: id})
//     if(!user) {
//         return res.status(404).json({error: "No such user"})
//     }
//     res.status(200).json(user)
// }

// update a user
// const updateUser = async (req, res) => {
//     const { id } = req.params
//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error: "no such user"})
//     }
//     const user = await UserModel.findByIdAndUpdate({_id: id}, {
//         ...req.body
//     })
//     if(!user) {
//         return res.status(404).json({error: "No such user"})
//     }
//     res.status(200).json(user)
// }

// login a user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try {
      const user = await UserModel.login(email, password)
      // create a token
      const token = createToken(user._id)
      res.status(200).json({email, token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}
  
  // signup a user
  const signupUser = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await UserModel.signup(email, password)
        // create a token
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
  }

module.exports = {
    // getUsers,
    // getUser,
    // createUser,
    // deleteUser,
    // updateUser,
    loginUser,
    signupUser
}