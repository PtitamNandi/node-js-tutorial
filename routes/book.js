const express = require("express");
const bookRouter = express.Router();
const BookControler = require("../controllers/BookControlers");
const auth = require("../middleware/auth");

bookRouter
  .use(auth)
  .route("/")
  .get(BookControler.index)
  .post(BookControler.create);

bookRouter

  .route("/:id")
  .get(BookControler.show)
  .patch(BookControler.update)
  .delete(BookControler.delete);

module.exports = bookRouter;
