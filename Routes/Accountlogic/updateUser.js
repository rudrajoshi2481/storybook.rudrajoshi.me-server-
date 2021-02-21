const mongoose = require("mongoose");
const User = require("../../Schemas/userAccout");
module.exports = {
  updateuser: async (req, res, next) => {
    const { userName, userId } = req.body.data;

    // console.log(req.body.data);

    try {
      updateUser = await User.findByIdAndUpdate(
        { _id: userId },
        { userName: userName }
      );
      updatedUser = await User.findById({_id:userId})
      
      if(updatedUser){
          
          res.send(updatedUser);
      }else{
          res.send("ERROR RECORDS FOUND")
      }

    } catch (err) {
      console.log(err);
      console.log("ERROE");
    }
  },
};
