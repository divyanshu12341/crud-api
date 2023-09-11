const express = require("express");
const router = express.Router();
const {v4:uuid} = require("uuid");
const {updateUser,createUser,getUserById,deleteUser} = require('../controllers/users');
let usersModel = [
  {
    firstName: "Divyanshu",
    lastName: "Jain",
    age: 23,
  },
];
router.get("/", (req, res) => {
  console.log(usersModel);
  res.send(usersModel);
});
router.post('/',createUser) ;
router.get('/:id',getUserById);
router.delete('/:id',deleteUser);
router.patch('/:id',updateUser)
module.exports = router;
