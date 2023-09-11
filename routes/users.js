const express = require("express");
const router = express.Router();
const {updateUser,createUser,getUserById,deleteUser} = require('../controllers/users');
router.get("/", (req, res) => {
  console.log(usersModel);
  res.send(usersModel);
});
router.post('/',createUser) ;
router.get('/:id',getUserById);
router.delete('/:id',deleteUser);
router.patch('/:id',updateUser)
module.exports = router;
