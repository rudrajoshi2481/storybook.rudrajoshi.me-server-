const chalk = require("chalk");
const BookPages = require("../../Schemas/BookPages");
const StoryBook = require("../../Schemas/StoryBook");
const { Promise } = require("mongoose");
var async = require("async_hooks")

module.exports = {
  getPageFromId: async (req, res, next) => {
    
    const {pageId} = req.body.data

    console.log(req);

    try {
    
        getPAGEDATA = await BookPages.findById({_id:pageId})

        res.send(getPAGEDATA)

    } catch (error) {
      console.log(chalk.red("ERROR IN GET PAGE FROM ID LIST MODULES", error));
    }
  },
};
