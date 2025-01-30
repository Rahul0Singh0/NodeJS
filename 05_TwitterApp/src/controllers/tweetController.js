import { StatusCodes } from "http-status-codes";
import { createTweet as createTweetService, getTweets as getTweetsService,
    getTweetById as getTweetByIdService,
    deleteTweet as deleteTweetService,
    updateTweet as updateTweetService
} from "../services/tweetService.js";
import { errorResponse, successResponse } from "../utils/response.js";


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
        return successResponse(response, StatusCodes.CREATED, 'Tweet created successfully', res);
    } catch(error) {
        return errorResponse(error);
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetsService();
        return successResponse(response, StatusCodes.OK, 'Tweets fetched successfully', res);
    } catch(error) {
        return errorResponse(error);
    }
}

export const getTweetById = async (req, res) => {
    try {
        const response = await getTweetByIdService(req.params.id);
        return successResponse(response, StatusCodes.OK, 'Tweets fetched successfully', res);
    } catch(error) {
        return errorResponse(error);
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const response = await deleteTweetService(req.params.id);
        return successResponse(response, StatusCodes.OK, 'Successfully deleted the tweet', res);
    } catch(error) {
        return errorResponse(error);
    }
}

export const updateTweet = async (req, res) => {
    try {
        const response = await updateTweetService(req.params.id, req.body.body);
        return successResponse(response, StatusCodes.OK, 'Successfully updated the tweet', res);
    } catch(error) {
        return errorResponse(error);
    }
}