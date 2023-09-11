const express = require("express");
const router =express.Router();
const usersModel = [{
    firstName:"Divyanshu",
    lastName:"Jain",
    age:23,
}];
router.get('/',(req,res)=>{
    console.log(usersModel);
    res.send(usersModel);
})
module.exports = router;