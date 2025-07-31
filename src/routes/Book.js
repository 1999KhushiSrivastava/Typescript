"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Book_1 = __importDefault(require("../models/Book"));
const Book_2 = __importDefault(require("../controllers/Book"));
const router = express_1.default.Router();
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, publishedYear } = req.body;
        const book = new Book_1.default({ title, author, publishedYear });
        const result = yield book.save();
        return res.status(201).json(result);
    }
    catch (error) {
        console.error('Error creating book:', error);
        return res.status(500).json({ message: 'Internal Server Error', error });
    }
}));
router.post('/get/:bookId', Book_2.default.readBook);
router.post('/get/', Book_2.default.readAll);
router.post('/update/:bookId', Book_2.default.UpdateBook);
router.post('/delete/:bookId', Book_2.default.deleteBook);
module.exports = router;
