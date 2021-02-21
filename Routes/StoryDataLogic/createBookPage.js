const StoryBook = require("../../Schemas/StoryBook");
const BookPages = require("../../Schemas/BookPages");

module.exports = {
  createPage: async (req, res, next) => {
    try {
      const { bookId, pageTitle, pageEditorData, viewStatus } = req.body.data;

      console.log(bookId,pageTitle,pageEditorData,viewStatus,"/**********************/");

      createPageInitiated = await BookPages.create({
        bookId: bookId,
        pageTitle: pageTitle,
        pageEditorData: pageEditorData,
        viewStatus: viewStatus,
      });

      //   Update Page Id in BookDAta

      savePageIdInBook = await StoryBook.findById({ _id: bookId });
      let bookPagesArray = savePageIdInBook.bookPages;

      bookPagesArray.push(createPageInitiated._id);

      updatePageInBook = await StoryBook.findByIdAndUpdate(
        { _id: bookId },
        { bookPages: bookPagesArray }
      );

      console.log(updatePageInBook, "BOOK RESULE UPDATEd");

      res.send(createPageInitiated);
    } catch (error) {
      console.log(error);
    }
  },
};
