const mongoose  = require("mongoose")

const BookPages = new mongoose.Schema({
    bookId:{
        type:String,
        required:["true","UserName Not Declare"]
    },
    pageTitle:{
        type:String,
        required:["true","UserName Not Declare"]
    },
    pageEditorData:{
        type:Array,
        required:["true","View Status Not Declare"]
    },
    viewStatus:{
        type:Boolean,
        required:["true","View Status Not Declare"]
    },

})


module.exports  = mongoose.model("BookPages",BookPages,"BookPages")