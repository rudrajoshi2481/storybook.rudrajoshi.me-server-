const StoryBook = require("../../Schemas/StoryBook");

module.exports = {
  createBook: async (req, res, next) => {
    try {
      const { bookTitle, authorId, bookPages } = req.body.data;

      createdBook = await StoryBook.create({
        bookTitle: bookTitle,
        authorId: authorId,
        bookPages: bookPages,
      });

      if (createdBook) {
        res.send(createdBook);
      } else {
        res.send("GOT ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  },
};
