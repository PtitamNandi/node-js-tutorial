const connect = require("./../database/db");
const { ObjectId } = require("mongodb");
const Book = require("../models/book");

exports.index = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};
exports.create = async (req, res) => {
  try {
    await Book.create(req.body);
    res.status(201).json({ data: "book is stored" });
  } catch (error) {
    res.json(error.errors);
  }
};
exports.show = async (req, res) => {
  const _id = ObjectId(req.params.id);
  const book = await Book.findById({ _id });
  res.json(book);
};
exports.update = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.updateOne({ _id }, { $set: req.body });
  res.json({ data: "book is updated" });
};
exports.delete = async (req, res) => {
  const _id = ObjectId(req.params.id);
  await Book.deleteOne({ _id });
  res.status(204).json();
};
