const StoryBook = require("../../Schemas/StoryBook");
const BookPages = require("../../Schemas/BookPages");

module.exports = {
  deleteBook: async (req, res, next) => {
    console.log(req.body.data.bookId);
    try {
      // let { bookId } = req.body.data;

      


      if(!req.body.data.bookId){
        res.send("ID Not Provided")
      }
    
      

      checkPage = await StoryBook.findById({_id:req.body.data.bookId})

      if(!checkPage){
        res.send("ID Not Provided")
      }
      
      let pagePresent = checkPage.bookPages

      console.log(pagePresent.length,"LENGTH");

    if(pagePresent.length === 0){
        deleteBookConfirm = await StoryBook.findByIdAndDelete({_id:req.body.data.bookId})

        res.send(deleteBookConfirm)

    }else{
        res.send("PAGE PRESENT")
    }


      
    } catch (error) {
      console.log(error);
    }
  },
};
