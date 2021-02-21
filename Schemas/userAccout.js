const mongoose  = require("mongoose")

const User = new mongoose.Schema({
    userName:{
        type:String,
        required:["true","UserName Not Declare"]
    },
    userPassword:{
        type:String,
        required:["true","UserName Not Declare"]
    },
    userEmail:{
        type:String,
        required:["true","UserName Not Declare"]
    },
    isAdmin:{
        type:Boolean
    },
    listOfBooks:{
        type:Array
    }
})


module.exports  = mongoose.model("UserAccout",User,"UserAccounts")