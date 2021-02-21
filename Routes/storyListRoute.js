const express = require("express");
const Router = express.Router();
const chalk = require("chalk");
const { getList } = require("./storyListLogic/getAllBookList");
const {getPageFromId} = require("./storyListLogic/getPageFromId")
Router.get("/getBookList", (req, res, next) => {
  // starter list

//   data: [
//     {
//       bookId: "",
//       bookTitle: "",
//       bookPages: { pageId: "", pageTitle: "", pageVisiblity: "" },
//     },
//   ];

console.log(chalk.red("GET BOOK LIST STARTED"));
getList(req,res,next)
console.log(chalk.red("GET BOOK LIST OVER"));
});

Router.post("/getpagefromid",(req,res,next) => {
  console.log(chalk.red("GET PAGE FROM ID FUNCTION STARTED"));
  getPageFromId(req,res,next);
  console.log(chalk.red("GET PAGE FROM ID FUNCTION OVER"));
})

module.exports = Router;
