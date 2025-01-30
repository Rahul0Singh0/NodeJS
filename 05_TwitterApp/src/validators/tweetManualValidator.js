import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

export const createTweetManualValidator = (req, res, next) => {
    if(!req.body.tweet) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Tweet is required',
            success: false,
        });
    }
    if(req.body.tweet.length >= 280) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            error: 'Tweet must be 280 characters or less',
            success: false,
        });
    }
    next(); // next middleware called
}

export const getTweetByIdManualValidator = (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            error: 'Invalid tweet id',
        });
    }
    next();
}