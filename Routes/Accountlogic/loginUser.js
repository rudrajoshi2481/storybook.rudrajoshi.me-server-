const mongoose = require("mongoose");
const User = require("../../Schemas/userAccout");
const jwt =  require('jsonwebtoken')
require("dotenv").config()

module.exports = {
  loginUser: async (req, res, next) => {
    let { userEmail, userPassword } = req.body.data;

    if(!(userPassword && userEmail)){
        res.send("PASSWORD WRONG")
    }

    // console.log(req.body.data);
    dataLogin = await User.find({userEmail:userEmail})

    try {
      


        
        console.log(dataLogin[0].userPassword);

        if(dataLogin[0].userPassword === userPassword){

            let clientToken = jwt.sign({userEmail:userEmail},process.env.JWT_ACCESS_TOKEN)
            res.json({clientToken:clientToken,dataLogin:dataLogin})
        }else{
            res.send("PASSWORD WRONG")
        }
        

    } catch (err) {
      console.log(err);
      console.log("ERROE");
    }
  },
  
};
