import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

export const PORT = process.env.PORT || 3000; // Define a PORT variable

export const MONGODB_URL = process.env.MONGODB_URL; // Define a MONGODB_URL variable