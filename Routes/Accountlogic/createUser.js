const mongoose = require("mongoose")
const User = require("../../Schemas/userAccout")
module.exports = {
    createuser: async(req,res,next) => {

        const {userName,userPassword,userEmail,isAdmin} = req.body.data;

        console.log(req.body.data);

        try{
            createUser = await User.create({userName:userName,userPassword:userPassword,userEmail:userEmail,isAdmin:isAdmin});
            // console.log(createUser);
            res.send(createUser)
        }catch(err){
            console.log(err);
        }
        
    }
}