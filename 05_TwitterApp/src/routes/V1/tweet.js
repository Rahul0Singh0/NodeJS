import express from 'express';
import { createTweet, getTweetById, getTweets } from '../../controllers/tweetController.js';
// import { createTweetManualValidator } from '../../validators/tweetManualValidator.js';
import { validate } from '../../validators/zodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { parser } from '../../config/cloudinaryConfig.js';

const router = express.Router(); // create a new router object

router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', parser.single('tweetImage'), validate(tweetZodSchema), createTweet);

export default router; // Export the router object

// localhost:3000/tweet GET