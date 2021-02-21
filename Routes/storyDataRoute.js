const express = require("express");
const Router = express.Router();
const chalk = require("chalk")

const { createBook } = require("./StoryDataLogic/createStoryBook");
const { deleteBook } = require("./StoryDataLogic/DeleteStoryBook");
const {createPage}  = require("./StoryDataLogic/createBookPage")
const {deletePage} =  require("./StoryDataLogic/deleteBookPage");
const { UpdateBookTitle } = require("./StoryDataLogic/updateBookTitle");
const {getDataFromUrlTitle }= require("./StoryDataLogic/getDataFromUrlTitle");
const {updatePageData} = require("./StoryDataLogic/updatePageData");
const jwt = require("jsonwebtoken");
require("dotenv").config();

 // TO VERIFY THE USER ADMIN REQ
 const authJWT = (req, res, next) => {
     console.log(req.body.data,"page Requ");
    const { jwtToken } = req.body.data;
    console.log(jwtToken);
  
    jwt.verify(jwtToken, process.env.JWT_ACCESS_TOKEN, (err, user) => {
      if (err) console.log(err, "ARROR AUTH");
      if (user) {
        next();
      }
    });
  };
  

Router.post("/createBook", authJWT,(req,res,next) => {
    console.log(chalk.red("CREATE BOOK STARTED"));
    createBook(req,res,next)
    console.log(chalk.red("CREATE BOOK OVER"));
});

Router.post("/deleteBook", authJWT,(req, res, next) => {
    console.log(chalk.red("DELETE BOOK STARTED"));
    deleteBook(req,res,next)
    console.log(chalk.red("DELETE BOOK OVER"));
});

Router.post("/createPage", authJWT,(req,res,next) => {
    console.log(chalk.red("Create Page STARTED"));
    createPage(req,res,next)
    console.log(chalk.red("CREATE PAGE OVER"));
});

Router.post("/deletePage", authJWT,(req,res,next) => {
    console.log(chalk.red("DELETE Page STARTED"));
    deletePage(req,res,next)
    console.log(chalk.red("DELETE PAGE OVER"));
});

Router.post("/updateBookTitle",authJWT,(req,res,next) => {
    console.log(chalk.red("UPDATE TITLE Page STARTED"));
    UpdateBookTitle(req,res,next)
    console.log(chalk.red("UPDATE TITLE Page OVER"));
})

Router.post("/getDataFromUrlTitle",(req,res,next) => {
    console.log(chalk.red("GET DATA FROM URL TITLE STARTED"));
    getDataFromUrlTitle(req,res,next)
    console.log(chalk.red("GET DATA FROM URL TITLE OVER"));
})


Router.post("/updatePageData",authJWT,(req,res,next) => {
    console.log(chalk.red("Update Page Data"));
    updatePageData(req,res,next)
    console.log(chalk.red("Update Page Data"));
})

module.exports = Router;
