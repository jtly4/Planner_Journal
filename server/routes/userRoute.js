const express = require('express')
const router = express.Router()
const {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser
} = require('../controllers/userController')


// Define routes

// GET all users
router.get('/', getUsers);

// GET a single users
router.get('/:id', getUser);

// POST a new user
router.post('/', createUser);

// PATCH a user 
router.patch('/:id', updateUser);

// DELETE a user
router.delete('/:id', deleteUser);

module.exports = router;
