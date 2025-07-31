import express from 'express';
import BookModel from '../models/Book';
import controller from '../controllers/Book';

const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const { title, author, publishedYear } = req.body;
        const book = new BookModel({ title, author, publishedYear });
        const result = await book.save();
        return res.status(201).json(result);
    } catch (error) {
        console.error('Error creating book:', error);
        return res.status(500).json({ message: 'Internal Server Error', error });
    }
});



router.post('/get/:bookId', controller.readBook);
router.post('/get/', controller.readAll);
router.post('/update/:bookId', controller.UpdateBook);
router.post('/delete/:bookId', controller.deleteBook);

export = router;