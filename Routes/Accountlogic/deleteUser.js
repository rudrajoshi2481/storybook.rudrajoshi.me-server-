const mongoose = require("mongoose")
const User = require("../../Schemas/userAccout")
module.exports = {
    deleteuser: async(req,res,next) => {

        const {userId} = req.body.data;

        // console.log(req.body.data);

        try{
            deleteUser = await User.findByIdAndDelete({_id:userId});
            console.log(deleteUser);
            res.send(deleteUser)
        }catch(err){
            console.log(err);
            console.log(Error);
        }
        
    }
}