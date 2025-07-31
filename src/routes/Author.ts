// import express from 'express';
// import controller from '../controllers/Author';
// import AuthorModel from '../models/Author';


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

import express from 'express';
import controller from '../controllers/Author';
import AuthorModel from '../models/Author';

const router = express.Router();

/** POST /authors/create */
router.post('/create', async (req, res) => {
    try {
        console.log('Author body:', req.body);

        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Name is required' });
        }

        const author = await AuthorModel.create({ name });

        return res.status(201).json(author);
    } catch (error) {
        console.error('Error while creating author:', error);
        return res.status(500).json({ error });
    }
});

 router.get('/get/:authorId', controller.readAuthor);
 router.get('/get/', controller.readAll);
 router.patch('/update/:authorId', controller.UpdateAuthor);
 router.delete('/delete/:authorId', controller.deleteAuthor);


export default router;
