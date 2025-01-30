import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'TwitterApp',
        allowedFormats: ['jpeg', 'png', 'jpg'],
        // format: async (req, file) => file.originalname.split('.')[1],
        public_id: (req, file) => file.originalname.split('.')[0]+Date.now(),
    },
});

export const parser = multer({ storage: storage });