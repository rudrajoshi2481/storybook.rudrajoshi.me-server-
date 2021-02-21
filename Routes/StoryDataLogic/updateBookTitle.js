const StoryBook = require("../../Schemas/StoryBook");



module.exports = {
    UpdateBookTitle: async (req, res, next) => {

      let {bookId,bookTitle} = req.body.data

      // if(!bookTitle && !bookId){
      //   res.send("BOOK ID IN VALID")
      // }
      updateTitle = await StoryBook.findByIdAndUpdate({_id:bookId},{bookTitle:bookTitle})  

      console.log(updateTitle,"This one BOOK TITLE UPDATE");
      try {
          res.send(updateTitle).status(200)
      } catch (error) {
        console.log(error);
      }
    },
  };
  