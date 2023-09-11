const express = require("express");
const router = express.Router();
const {v4:uuid} = require("uuid");
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
    const userId = uuid();
    const userWithId = {...user,id:userId};
    usersModel.push(userWithId);
    res.send(`User with name ${user.firstName} added to the database and id ${userWithId.id} added to the database`);
}) ;
router.get('/:id',(req,res)=>{
  const {id} = req.params;
  const foundUser = usersModel.find((user)=>user.id === id);
  res.send(foundUser);
  console.log("Get id route");
})
module.exports = router;
