const StoryBook = require("../../Schemas/StoryBook");
const BookPages = require("../../Schemas/BookPages");

module.exports = {
  deletePage: async (req, res, next) => {

    console.log(req.body.data);

    try {
      const { pageId } = req.body.data;
      let bookId = "";

      // get book Id
      getBookId = await BookPages.findById({ _id: pageId });
      bookId = getBookId.bookId;
      console.log(getBookId.bookId);

      // remove page from Book
      removePageFromBook = await StoryBook.findById({ _id: bookId });
      let pagesArray = removePageFromBook.bookPages;
      let pageArrayFinal = [];
      pagesArray.map((e) => {
          console.log(e.toString() === pageId.toString() ,pageId,e);
        if (e.toString() === pageId.toString()) {
            console.log("REMOVED PAGE : ", e);
        } else {
            pageArrayFinal.push(e);
        }
      });

      console.log(pageArrayFinal,"FINAL ARRAY PAGE");

      updatePageToBook = await StoryBook.findByIdAndUpdate({_id:bookId},{bookPages:pageArrayFinal})

      console.log(updatePageToBook);

    //   // delete Page

      finalyDeletePage = await BookPages.findByIdAndDelete({_id:pageId})

      res.send(finalyDeletePage)
      console.log("DELETED PAGE SUCCESSFULLY",finalyDeletePage);
      

    } catch (error) {
      console.log(error);
      res.send("ERROR");
    }
  },
};
