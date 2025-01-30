import express from 'express';
import { createTweet, deleteTweet, getTweetById, getTweets, updateTweet } from '../../controllers/tweetController.js';
// import { createTweetManualValidator } from '../../validators/tweetManualValidator.js';
import { validate } from '../../validators/zodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { parser } from '../../config/cloudinaryConfig.js';
import { getTweetByIdManualValidator } from '../../validators/tweetManualValidator.js';

const router = express.Router(); // create a new router object

router.get('/', getTweets);

router.get('/:id', getTweetByIdManualValidator, getTweetById);

router.post('/', parser.single('tweetImage'), validate(tweetZodSchema), createTweet);

router.delete('/:id', getTweetByIdManualValidator, deleteTweet);

router.put('/:id', getTweetByIdManualValidator, updateTweet);

export default router; // Export the router object

// localhost:3000/tweet GET