"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Book_1 = __importDefault(require("../models/Book"));
const createBook = (req, res, next) => {
    const { title, author } = req.body;
    const book = new Book_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        title,
        author
    });
    return book
        .save()
        .then((book) => res.status(201).json({ book }))
        .catch((error) => res.status(500).json({ error }));
};
const readBook = (req, res, next) => {
    const bookId = req.params.bookId;
    return Book_1.default.findById(bookId)
        .then((Book) => (Book ? res.status(200).json({ Book }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return Book_1.default.find()
        .then((book) => res.status(200).json({ book }))
        .catch((error) => res.status(500).json({ error }));
};
const UpdateBook = (req, res, next) => {
    const bookId = req.params.bookId;
    return Book_1.default.findById(bookId)
        .then((book) => {
        if (book) {
            book.set(req.body);
            return book
                .save()
                .then((book) => res.status(201).json({ book }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found ' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteBook = (req, res, next) => {
    const bookId = req.params.bookId;
    return Book_1.default.findByIdAndDelete(bookId)
        .then((book) => (book ? res.status(201).json({ message: 'deleted' }) : res.status(404).
        json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createBook, readBook, readAll, UpdateBook, deleteBook };
