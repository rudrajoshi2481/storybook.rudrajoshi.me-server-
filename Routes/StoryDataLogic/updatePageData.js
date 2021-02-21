const StoryBook = require("../../Schemas/StoryBook");
const BookPages = require("../../Schemas/BookPages");


module.exports = {
    updatePageData: async (req, res, next) => {
      let {pageTitle,editorData,bookId,viewStatus,pageId} = req.body.data;
      // console.log(req.body.data);

        
        getBookPageData = await BookPages.findByIdAndUpdate({_id:pageId},{pageEditorData:editorData,viewStatus:viewStatus,pageTitle:pageTitle})
        
        try {
            console.log(getBookPageData,"UpdatePageData");
            res.send(getBookPageData)
            // console.log("SOME THING HAPPNED",pageTitle);
      } catch (error) {
        console.log(error);
      }
    },
  };
  