import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const PORT = process.env.PORT || 3000; // Define a PORT variable

export const MONGODB_URL = process.env.MONGODB_URL; // Define a MONGODB_URL variable

export const CLOUDINARY_NAME = process.env.CLOUDINARY_NAME; // Define a CLOUDINARY_NAME variable

export const CLOUDINARY_KEY = process.env.CLOUDINARY_KEY; // Define a CLOUDINARY_KEY variable

export const CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET; // Define a CLOUDINARY_SECRET variable