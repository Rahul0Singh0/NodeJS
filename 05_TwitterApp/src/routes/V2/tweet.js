import express from 'express';
import { getTweetById, getTweets } from '../../controllers/tweetController.js';

const router = express.Router(); // create a new router object

router.get('/', getTweets);

router.get('/:id', getTweetById);

export default router; // Export the router object

// localhost:3000/tweet GET