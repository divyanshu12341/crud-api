const express = require("express");
const router = express.Router();
const {updateUser,createUser,getUserById,deleteUser, getAllUsers} = require('../controllers/users');
router.post('/',createUser) ;
router.get('/',getAllUsers);
router.get('/:id',getUserById);
router.delete('/:id',deleteUser);
router.patch('/:id',updateUser)
module.exports = router;
