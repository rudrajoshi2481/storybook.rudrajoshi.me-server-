const chalk = require("chalk");
const BookPages = require("../../Schemas/BookPages");
const StoryBook = require("../../Schemas/StoryBook");
const { Promise } = require("mongoose");
var async = require("async_hooks");
const { find } = require("../../Schemas/BookPages");
const { white } = require("chalk");

module.exports = {
  getList: async (req, res, next) => {
    
    
    
    try {
      getBookList = await StoryBook.find({});
      getPageList = await BookPages.find({})
      res.send({getBookList,getPageList})
    } catch (error) {
      console.log(chalk.red("ERROR IN GET LIST MODULES", error));
    }
  },
};
