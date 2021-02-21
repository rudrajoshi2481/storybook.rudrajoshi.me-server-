const mongoose  = require("mongoose")

const StoryBook = new mongoose.Schema({
    bookTitle:{
        type:String,
        required:["true","UserName Not Declare"]
    },
    authorId:{
        type:String,
    },
    bookPages:{
        type:Array,
        required:["true","BookPages Not Declare"]
    },
})


module.exports  = mongoose.model("StoryBook",StoryBook,"StoryBook")