const StoryBook = require("../../Schemas/StoryBook");
const BookPages = require("../../Schemas/BookPages");


module.exports = {
    getDataFromUrlTitle: async (req, res, next) => {
      let {pageTitle} = req.body.data;
      // console.log(req.body.data);

        console.log(pageTitle);
        if(!pageTitle){
            res.send("PAGE NOT VALID")
        }
        
        getBookPageData = await BookPages.find({pageTitle:pageTitle})
        
        try {
            console.log(getBookPageData,"GET PAGE DATA");
            res.send(getBookPageData)
            // console.log("SOME THING HAPPNED",pageTitle);
      } catch (error) {
        console.log(error);
      }
    },
  };
  