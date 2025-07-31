"use strict";
// import express from 'express';
// import controller from '../controllers/Author';
// import AuthorModel from '../models/Author';
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
Object.defineProperty(exports, "__esModule", { value: true });
// const router = express.Router();
// // router.post('/create', controller.createAuthor);
// router.post('/create', async (req, res) => {
//     try {
//         const { name } = req.body;
//         if (!name) {
//             return res.status(400).json({ message: 'Name is required' });
//         }
//         console.log('Author body:', req.body); // for debugging
//         const author = await AuthorModel.create({ name });
//         return res.status(201).json(author);
//     } catch (error) {
//         return res.status(500).json({ error });
//     }
// });
// router.get('/get/:authorId', controller.readAuthor);
// router.get('/get/', controller.readAll);
// router.patch('/update/:authorId', controller.UpdateAuthor);
// router.delete('/delete/:authorId', controller.deleteAuthor);
// export = router;
const express_1 = __importDefault(require("express"));
const Author_1 = __importDefault(require("../controllers/Author"));
const Author_2 = __importDefault(require("../models/Author"));
const router = express_1.default.Router();
/** POST /authors/create */
router.post('/create', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Author body:', req.body);
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }
        const author = yield Author_2.default.create({ name });
        return res.status(201).json(author);
    }
    catch (error) {
        console.error('Error while creating author:', error);
        return res.status(500).json({ error });
    }
}));
router.get('/get/:authorId', Author_1.default.readAuthor);
router.get('/get/', Author_1.default.readAll);
router.patch('/update/:authorId', Author_1.default.UpdateAuthor);
router.delete('/delete/:authorId', Author_1.default.deleteAuthor);
exports.default = router;
