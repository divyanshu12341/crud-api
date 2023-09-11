const express = require("express");
const router = express.Router();
const usersModel = [
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
router.post('/',(req,res)=>{
    const user = req.body;
    usersModel.push(user);
    res.send(`User with name ${user.firstName} added to the database`);
}) ;
module.exports = router;
