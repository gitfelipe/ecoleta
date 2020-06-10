import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import crypto from 'crypto';
import { Request } from 'express';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');

            const filename = `${hash}-${file.originalname}`

            callback(null, filename);
        }
    }),

    limits: {
        fileSize: 1024 * 1024 * 5
    },

    fileFilter: (request: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
        const allowedTypes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
        ];

        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type'));
        }
    },
};
