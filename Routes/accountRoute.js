const express = require("express");
const Router = express.Router();

const CreateUserLogic = require("./Accountlogic/createUser");
const DeleteUserLogic = require("./Accountlogic/deleteUser")
const UpdateUserLogic = require("./Accountlogic/updateUser.js")
const LoginUser = require("./Accountlogic/loginUser")

Router.post("/createtmpuser", (req,res,next) => {
    res.send("Route Not Created Yet")
  // create Token and save it to the user profile
});

Router.post("/login",async(req,res,next) => {
    dataLogin = await LoginUser.loginUser(req,res,next)
    
})

Router.post("/createuser", (req, res, next) => {
  //create Token and log in the user
  console.log("CALLED CREATE USER");
  CreateUserLogic.createuser(req, res, next);
});

Router.delete("/deleteuser", (req,res,next) => {
    DeleteUserLogic.deleteuser(req,res,next)
});

Router.post("/updateuser", (req,res,next) => {
  //create Token and log in the user
  UpdateUserLogic.updateuser(req,res,next)
});

module.exports = Router;
