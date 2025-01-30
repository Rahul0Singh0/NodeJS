import { createTweet as createTweetService, getTweets as getTweetsService} from "../services/tweetService.js";


export const getTweetById = (req, res) => {
    return res.json({
        message: 'Welcome to the tweet route',
        id: req.params.id
    });
}

export const createTweet = async (req, res) => {
    // return res.json({
    //     message: 'Welcome to the tweet route',
    //     body: req.body
    // });
    try {
        const response = await createTweetService({
            body: req.body.body,
            image: req.file?.path,
        });
        return res.status(201).json({
            success: true,
            data: response,
            message: 'Tweet created successfully'
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetsService();
        return res.status(200).json({
            success: true,
            data: response,
            message: 'Tweets fetched successfully'
        });
    } catch(error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        });
    }
}