const express = require("express");
const router = express.Router();
const {v4:uuid} = require("uuid");
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
});
router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  usersModel = usersModel.filter((user)=>user.id!==id);
  res.send(`User with id ${id} is deleted from your profile`);
})
module.exports = router;
